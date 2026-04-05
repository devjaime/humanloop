import { NextResponse } from "next/server";
import { createClient } from "@supabase/supabase-js";

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL || "";
const supabaseKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY || "";

export async function POST(
  request: Request,
  { params }: { params: Promise<{ id: string }> }
) {
  const { id } = await params;
  const supabase = createClient(supabaseUrl, supabaseKey);
  const body = await request.json();

  const { vote, justification, email } = body;

  if (!email || !email.includes("@")) {
    return NextResponse.json(
      { error: "Email válido requerido" },
      { status: 400 }
    );
  }

  // Check if already voted
  const { data: existingVote } = await supabase
    .from("votes")
    .select("id")
    .eq("news_id", id)
    .eq("email", email)
    .single();

  if (existingVote) {
    // Update existing vote
    const { data, error } = await supabase
      .from("votes")
      .update({ vote, justification })
      .eq("news_id", id)
      .eq("email", email)
      .select()
      .single();

    if (error) {
      return NextResponse.json({ error: error.message }, { status: 500 });
    }

    // Update counts
    await updateVoteCounts(supabase, id);

    return NextResponse.json({ vote: data, updated: true });
  }

  // Insert new vote
  const { data, error } = await supabase
    .from("votes")
    .insert({
      news_id: id,
      vote,
      justification,
      email,
    })
    .select()
    .single();

  if (error) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }

  // Update vote counts
  await updateVoteCounts(supabase, id);

  // Subscribe email
  await supabase.from("subscriptions").upsert(
    { email, is_active: true },
    { onConflict: "email" }
  );

  return NextResponse.json({ vote: data, created: true });
}

async function updateVoteCounts(
  supabase: ReturnType<typeof createClient>,
  newsId: string
) {
  const { data: votes } = await supabase
    .from("votes")
    .select("vote")
    .eq("news_id", newsId);

  if (!votes) return;

  const realVotes = votes.filter((v) => v.vote === true).length;
  const fakeVotes = votes.filter((v) => v.vote === false).length;

  await supabase
    .from("news")
    .update({
      human_votes_count: votes.length,
      real_votes: realVotes,
      fake_votes: fakeVotes,
    })
    .eq("id", newsId);
}

export async function GET(
  request: Request,
  { params }: { params: Promise<{ id: string }> }
) {
  const { id } = await params;
  const supabase = createClient(supabaseUrl, supabaseKey);

  const { data: news, error } = await supabase
    .from("news")
    .select("*")
    .eq("id", id)
    .single();

  if (error || !news) {
    return NextResponse.json({ error: "Noticia no encontrada" }, { status: 404 });
  }

  // Get votes with justifications
  const { data: votes } = await supabase
    .from("votes")
    .select("*")
    .eq("news_id", id)
    .order("created_at", { ascending: false });

  return NextResponse.json({
    news,
    votes: votes || [],
  });
}