"use client";

import { useState, useEffect } from "react";
import { useParams, useRouter } from "next/navigation";
import Link from "next/link";

interface AIVerdict {
  verdict: string;
  confidence: number;
  facts?: { claim: string; verdict: string; source?: string; details: string }[];
  sources?: string[];
  explanation?: string;
  warning_signs?: string[];
}

interface NewsItem {
  id: string;
  title: string;
  source: string | null;
  url: string | null;
  published_at: string | null;
  image_url: string | null;
  content: string | null;
  ai_verdict: AIVerdict | null;
  ai_analyzed_at: string | null;
  human_votes_count: number;
  real_votes: number;
  fake_votes: number;
  status: string;
  created_at: string;
}

interface Vote {
  id: string;
  vote: boolean;
  justification: string | null;
  email: string;
  created_at: string;
}

export default function NewsDetailPage() {
  const params = useParams();
  const router = useRouter();
  const id = params?.id as string;

  const [news, setNews] = useState<NewsItem | null>(null);
  const [votes, setVotes] = useState<Vote[]>([]);
  const [loading, setLoading] = useState(true);
  const [userVote, setUserVote] = useState<boolean | null>(null);
  const [justification, setJustification] = useState("");
  const [email, setEmail] = useState("");
  const [submitting, setSubmitting] = useState(false);
  const [message, setMessage] = useState("");

  useEffect(() => {
    if (id) fetchNewsDetail();
  }, [id]);

  async function fetchNewsDetail() {
    setLoading(true);
    try {
      const res = await fetch(`/api/news/${id}/vote`);
      const data = await res.json();
      setNews(data.news);
      setVotes(data.votes || []);
    } catch (e) {
      console.error(e);
    }
    setLoading(false);
  }

  async function handleVote(voteValue: boolean) {
    if (!email || !email.includes("@")) {
      setMessage("⚠️ Ingresa un email válido para votar");
      return;
    }

    setSubmitting(true);
    setMessage("");

    try {
      const res = await fetch(`/api/news/${id}/vote`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          vote: voteValue,
          justification: justification || null,
          email,
        }),
      });
      const data = await res.json();

      if (data.error) {
        setMessage(`❌ ${data.error}`);
      } else {
        setMessage("✅ ¡Voto registrado! Gracias por participar");
        setUserVote(voteValue);
        fetchNewsDetail();
      }
    } catch (e) {
      setMessage("❌ Error al enviar voto");
    }

    setSubmitting(false);
  }

  async function triggerAnalysis() {
    setMessage("🤖 Iniciando análisis con IA...");
    try {
      const res = await fetch(`/api/news/${id}/analyze`, { method: "POST" });
      const data = await res.json();
      if (data.error) {
        setMessage(`❌ ${data.error}`);
      } else {
        setMessage("✅ Análisis completado");
        fetchNewsDetail();
      }
    } catch (e) {
      setMessage("❌ Error en análisis");
    }
  }

  function getVerdictColor(verdict: string) {
    if (verdict === "REAL") return "bg-green-100 text-green-800 border-green-200";
    if (verdict === "FAKE") return "bg-red-100 text-red-800 border-red-200";
    if (verdict === "PARTIALLY_REAL") return "bg-yellow-100 text-yellow-800 border-yellow-200";
    return "bg-gray-100 text-gray-800 border-gray-200";
  }

  function getVotePercentage() {
    if (!news || news.human_votes_count === 0) return { real: 0, fake: 0 };
    return {
      real: Math.round((news.real_votes / news.human_votes_count) * 100),
      fake: Math.round((news.fake_votes / news.human_votes_count) * 100),
    };
  }

  if (loading) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="animate-spin text-4xl">⏳</div>
      </div>
    );
  }

  if (!news) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-center">
          <p className="text-gray-500">Noticia no encontrada</p>
          <Link href="/fake-news" className="text-blue-600 hover:underline">
            ← Volver
          </Link>
        </div>
      </div>
    );
  }

  const percentages = getVotePercentage();

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-white shadow-sm">
        <div className="max-w-4xl mx-auto px-4 py-4">
          <Link
            href="/fake-news"
            className="text-blue-600 hover:underline flex items-center gap-2"
          >
            ← Volver a noticias
          </Link>
        </div>
      </div>

      <div className="max-w-4xl mx-auto px-4 py-8">
        {/* Title */}
        <div className="bg-white rounded-xl shadow-sm p-6 mb-6">
          <div className="flex items-center gap-2 mb-3">
            {news.ai_verdict && (
              <span
                className={`px-3 py-1 rounded-full text-sm font-medium border ${getVerdictColor(
                  news.ai_verdict.verdict
                )}`}
              >
                {news.ai_verdict.verdict === "REAL" && "✅ REAL"}
                {news.ai_verdict.verdict === "FAKE" && "❌ FAKE"}
                {news.ai_verdict.verdict === "PARTIALLY_REAL" && "⚠️ PARCIALMENTE REAL"}
                {news.ai_verdict.verdict === "NO_VERIFICABLE" && "❓ NO VERIFICABLE"}
              </span>
            )}
            {news.source && <span className="text-gray-500 text-sm">📰 {news.source}</span>}
          </div>

          <h1 className="text-2xl font-bold text-gray-900 mb-4">{news.title}</h1>

          {news.url && (
            <a
              href={news.url}
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-600 hover:underline text-sm"
            >
              🔗 Ver fuente original
            </a>
          )}
        </div>

        {/* AI Analysis */}
        {news.ai_verdict && (
          <div className="bg-white rounded-xl shadow-sm p-6 mb-6">
            <h2 className="text-lg font-semibold mb-4 flex items-center gap-2">
              🤖 Análisis IA
            </h2>

            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <span className="text-gray-600">Confianza:</span>
                <span className="font-bold text-blue-600">
                  {news.ai_verdict.confidence}%
                </span>
              </div>

              {news.ai_verdict.explanation && (
                <div className="bg-gray-50 rounded-lg p-4">
                  <p className="text-gray-700">{news.ai_verdict.explanation}</p>
                </div>
              )}

              {news.ai_verdict.facts && news.ai_verdict.facts.length > 0 && (
                <div>
                  <h3 className="font-medium mb-2">📋 Hechos verificados:</h3>
                  <ul className="space-y-2">
                    {news.ai_verdict.facts.map((fact, i) => (
                      <li
                        key={i}
                        className={`p-2 rounded ${
                          fact.verdict === "VERIFIED"
                            ? "bg-green-50"
                            : fact.verdict === "FALSE"
                            ? "bg-red-50"
                            : "bg-gray-50"
                        }`}
                      >
                        <span className="font-medium">{fact.claim}</span>
                        <span className="text-sm ml-2">
                          → {fact.verdict}
                          {fact.source && ` (${fact.source})`}
                        </span>
                      </li>
                    ))}
                  </ul>
                </div>
              )}

              {news.ai_verdict.warning_signs &&
                news.ai_verdict.warning_signs.length > 0 && (
                  <div>
                    <h3 className="font-medium mb-2 text-red-600">
                      ⚠️ Señales de alerta:
                    </h3>
                    <ul className="list-disc list-inside text-red-700">
                      {news.ai_verdict.warning_signs.map((sign, i) => (
                        <li key={i}>{sign}</li>
                      ))}
                    </ul>
                  </div>
                )}
            </div>
          </div>
        )}

        {/* Voting */}
        <div className="bg-white rounded-xl shadow-sm p-6 mb-6">
          <h2 className="text-lg font-semibold mb-4 flex items-center gap-2">
            🗳️ Votación comunitaria
          </h2>

          {message && (
            <div
              className={`mb-4 p-3 rounded-lg ${
                message.includes("✅")
                  ? "bg-green-50 text-green-700"
                  : "bg-red-50 text-red-700"
              }`}
            >
              {message}
            </div>
          )}

          <div className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Tu email (requerido para recibir el reporte):
              </label>
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="tu@email.com"
                className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                ¿Es real o fake?
              </label>
              <div className="flex gap-4">
                <button
                  onClick={() => handleVote(true)}
                  disabled={submitting}
                  className={`flex-1 py-3 rounded-lg font-medium transition ${
                    userVote === true
                      ? "bg-green-600 text-white"
                      : "bg-green-100 text-green-700 hover:bg-green-200"
                  }`}
                >
                  🟢 ES REAL
                </button>
                <button
                  onClick={() => handleVote(false)}
                  disabled={submitting}
                  className={`flex-1 py-3 rounded-lg font-medium transition ${
                    userVote === false
                      ? "bg-red-600 text-white"
                      : "bg-red-100 text-red-700 hover:bg-red-200"
                  }`}
                >
                  🔴 ES FAKE
                </button>
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Justificación (opcional):
              </label>
              <textarea
                value={justification}
                onChange={(e) => setJustification(e.target.value)}
                placeholder="¿Por qué crees que es real o fake?"
                rows={3}
                className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
              />
            </div>
          </div>
        </div>

        {/* Results */}
        <div className="bg-white rounded-xl shadow-sm p-6 mb-6">
          <h2 className="text-lg font-semibold mb-4">
            📈 Resultados ({news.human_votes_count} votos)
          </h2>

          <div className="space-y-3">
            <div>
              <div className="flex justify-between text-sm mb-1">
                <span className="text-green-700">🟢 Real: {percentages.real}%</span>
                <span className="text-gray-500">{news.real_votes} votos</span>
              </div>
              <div className="w-full bg-gray-200 rounded-full h-3">
                <div
                  className="bg-green-500 h-3 rounded-l-full"
                  style={{ width: `${percentages.real}%` }}
                ></div>
              </div>
            </div>

            <div>
              <div className="flex justify-between text-sm mb-1">
                <span className="text-red-700">🔴 Fake: {percentages.fake}%</span>
                <span className="text-gray-500">{news.fake_votes} votos</span>
              </div>
              <div className="w-full bg-gray-200 rounded-full h-3">
                <div
                  className="bg-red-500 h-3 rounded-l-full"
                  style={{ width: `${percentages.fake}%` }}
                ></div>
              </div>
            </div>
          </div>
        </div>

        {/* Justifications */}
        {votes.filter((v) => v.justification).length > 0 && (
          <div className="bg-white rounded-xl shadow-sm p-6">
            <h2 className="text-lg font-semibold mb-4">
              💬 Justificaciones de usuarios
            </h2>

            <div className="space-y-3">
              {votes
                .filter((v) => v.justification)
                .slice(0, 10)
                .map((vote) => (
                  <div
                    key={vote.id}
                    className={`p-3 rounded-lg ${
                      vote.vote ? "bg-green-50" : "bg-red-50"
                    }`}
                  >
                    <div className="flex items-center gap-2 mb-1">
                      <span
                        className={`text-sm font-medium ${
                          vote.vote ? "text-green-700" : "text-red-700"
                        }`}
                      >
                        {vote.vote ? "🟢 Dice que es REAL" : "🔴 Dice que es FAKE"}
                      </span>
                      <span className="text-xs text-gray-400">
                        {new Date(vote.created_at).toLocaleDateString("es-CL")}
                      </span>
                    </div>
                    <p className="text-gray-700">{vote.justification}</p>
                  </div>
                ))}
            </div>
          </div>
        )}

        {/* Admin Actions */}
        <div className="mt-6 flex gap-4">
          <button
            onClick={triggerAnalysis}
            className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700"
          >
            🤖 Analizar con IA
          </button>
        </div>
      </div>
    </div>
  );
}