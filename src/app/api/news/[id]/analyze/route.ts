import { NextResponse } from "next/server";
import { createClient } from "@supabase/supabase-js";

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL || "";
const supabaseKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY || "";
const anthropicApiKey = process.env.ANTHROPIC_API_KEY || "";

export async function POST(
  request: Request,
  { params }: { params: Promise<{ id: string }> }
) {
  const { id } = await params;
  const supabase = createClient(supabaseUrl, supabaseKey);

  // Get news
  const { data: news, error: newsError } = await supabase
    .from("news")
    .select("*")
    .eq("id", id)
    .single();

  if (newsError || !news) {
    return NextResponse.json({ error: "Noticia no encontrada" }, { status: 404 });
  }

  // Analyze with AI
  const analysis = await analyzeWithAI(news);

  // Update news with AI verdict
  const { data: updated, error } = await supabase
    .from("news")
    .update({
      ai_verdict: analysis,
      ai_analyzed_at: new Date().toISOString(),
      status: "analyzed",
    })
    .eq("id", id)
    .select()
    .single();

  if (error) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }

  return NextResponse.json({ news: updated });
}

async function analyzeWithAI(news: any): Promise<any> {
  const systemPrompt = `Eres un verificador de hechos especializado en desinformación.
Analiza la siguiente noticia y determina:
1. Veredicto: REAL, FAKE, PARCIALMENTE_REAL, NO_VERIFICABLE
2. Confianza: 0-100%
3. Hechos verificables: lista de claims que se pueden verificar
4. Fuentes de verificación: enlaces a fuentes oficiales
5. Explicación: razonamiento detallado
6. Señales de alerta: indicadores de posible desinformación

Responde en JSON con este formato exacto:
{
  "verdict": "REAL|FAKE|PARTIALLY_REAL|NO_VERIFICABLE",
  "confidence": 85,
  "facts": [{"claim": "...", "verdict": "VERIFIED|FALSE|UNVERIFIABLE", "source": "...", "details": "..."}],
  "sources": ["fuente1", "fuente2"],
  "explanation": "...",
  "warning_signs": ["seal1", "seal2"]
}`;

  const userPrompt = `Analiza esta noticia:
Título: ${news.title}
Fuente: ${news.source}
Contenido: ${news.content || "No disponible"}
URL: ${news.url || "No disponible"}`;

  try {
    if (!anthropicApiKey) {
      // Return mock analysis if no API key
      return {
        verdict: "NO_VERIFICABLE",
        confidence: 50,
        facts: [],
        sources: ["API key no configurada"],
        explanation: "Análisis no disponible. Configure ANTHROPIC_API_KEY.",
        warning_signs: ["Sistema sin configurar"],
      };
    }

    const response = await fetch("https://api.anthropic.com/v1/messages", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "x-api-key": anthropicApiKey,
        "anthropic-version": "2023-06-01",
      },
      body: JSON.stringify({
        model: "claude-3-5-sonnet-20241022",
        max_tokens: 2000,
        system: systemPrompt,
        messages: [{ role: "user", content: userPrompt }],
      }),
    });

    if (!response.ok) {
      throw new Error(`API error: ${response.status}`);
    }

    const data = await response.json();
    const content = data.content?.[0]?.text || "{}";

    // Parse JSON from response
    const jsonMatch = content.match(/\{[\s\S]*\}/);
    if (jsonMatch) {
      return JSON.parse(jsonMatch[0]);
    }

    return {
      verdict: "NO_VERIFICABLE",
      confidence: 50,
      facts: [],
      sources: [],
      explanation: "No se pudo parsear la respuesta",
      warning_signs: [],
    };
  } catch (error: any) {
    return {
      verdict: "NO_VERIFICABLE",
      confidence: 0,
      facts: [],
      sources: [],
      explanation: `Error en análisis: ${error.message}`,
      warning_signs: ["Error de API"],
    };
  }
}