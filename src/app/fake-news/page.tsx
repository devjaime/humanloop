"use client";

import { useState, useEffect } from "react";
import Link from "next/link";

interface NewsItem {
  id: string;
  title: string;
  source: string | null;
  status: "pending" | "analyzed" | "completed";
  human_votes_count: number;
  real_votes: number;
  fake_votes: number;
  ai_verdict: { verdict: string; confidence: number } | null;
  created_at: string;
}

export default function FakeNewsPage() {
  const [news, setNews] = useState<NewsItem[]>([]);
  const [loading, setLoading] = useState(true);
  const [filter, setFilter] = useState("all");
  const [page, setPage] = useState(1);

  useEffect(() => {
    fetchNews();
  }, [filter, page]);

  async function fetchNews() {
    setLoading(true);
    try {
      const res = await fetch(`/api/news?status=${filter}&page=${page}&pageSize=12`);
      const data = await res.json();
      setNews(data.news || []);
    } catch (e) {
      console.error(e);
    }
    setLoading(false);
  }

  function getStatusBadge(newsItem: NewsItem) {
    if (newsItem.status === "pending") {
      return <span className="badge badge-pending">⏳ Pendiente</span>;
    }
    if (newsItem.ai_verdict?.verdict === "REAL") {
      return <span className="badge badge-real">✅ Real</span>;
    }
    if (newsItem.ai_verdict?.verdict === "FAKE") {
      return <span className="badge badge-fake">❌ Fake</span>;
    }
    return <span className="badge badge-unknown">❓ Sin analizar</span>;
  }

  function getVotePercentage(newsItem: NewsItem) {
    if (newsItem.human_votes_count === 0) return 0;
    const realPct = (newsItem.real_votes / newsItem.human_votes_count) * 100;
    return Math.round(realPct);
  }

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-gradient-to-r from-blue-600 to-blue-800 text-white py-8">
        <div className="max-w-6xl mx-auto px-4">
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-3xl font-bold flex items-center gap-2">
                🔍 FakeNews Detector
              </h1>
              <p className="text-blue-100 mt-2">
                Analiza noticias con IA y vota junto a la comunidad
              </p>
            </div>
            <Link
              href="/fake-news/admin"
              className="bg-white/10 hover:bg-white/20 px-4 py-2 rounded-lg transition"
            >
              📊 Admin
            </Link>
          </div>
        </div>
      </header>

      {/* Filters */}
      <div className="max-w-6xl mx-auto px-4 py-6">
        <div className="flex gap-2 flex-wrap">
          {["all", "pending", "analyzed", "completed"].map((f) => (
            <button
              key={f}
              onClick={() => {
                setFilter(f);
                setPage(1);
              }}
              className={`px-4 py-2 rounded-lg transition ${
                filter === f
                  ? "bg-blue-600 text-white"
                  : "bg-white text-gray-700 hover:bg-gray-100"
              }`}
            >
              {f === "all" && "📰 Todas"}
              {f === "pending" && "⏳ Pendientes"}
              {f === "analyzed" && "🤖 Analizadas"}
              {f === "completed" && "✅ Completadas"}
            </button>
          ))}
        </div>
      </div>

      {/* News Grid */}
      <div className="max-w-6xl mx-auto px-4 pb-12">
        {loading ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[...Array(6)].map((_, i) => (
              <div key={i} className="bg-white rounded-xl p-6 animate-pulse">
                <div className="h-4 bg-gray-200 rounded w-3/4 mb-4"></div>
                <div className="h-3 bg-gray-200 rounded w-1/2"></div>
              </div>
            ))}
          </div>
        ) : news.length === 0 ? (
          <div className="text-center py-12">
            <p className="text-gray-500 text-lg">📭 No hay noticias disponibles</p>
            <p className="text-gray-400">Vuelve más tarde</p>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {news.map((item) => (
              <Link
                key={item.id}
                href={`/fake-news/${item.id}`}
                className="block group"
              >
                <div className="bg-white rounded-xl shadow-sm hover:shadow-lg transition-all duration-200 p-6 h-full">
                  <div className="flex items-start justify-between mb-3">
                    {getStatusBadge(item)}
                    <span className="text-xs text-gray-400">
                      {new Date(item.created_at).toLocaleDateString("es-CL")}
                    </span>
                  </div>

                  <h3 className="font-semibold text-gray-800 mb-2 line-clamp-3 group-hover:text-blue-600">
                    {item.title}
                  </h3>

                  {item.source && (
                    <p className="text-sm text-gray-500 mb-4">{item.source}</p>
                  )}

                  {/* Vote Progress */}
                  <div className="mt-auto">
                    <div className="flex items-center justify-between text-sm mb-1">
                      <span className="text-gray-500">
                        {item.human_votes_count} votos
                      </span>
                      <span className="font-medium">
                        {getVotePercentage(item)}% Real
                      </span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-2">
                      <div
                        className="bg-blue-600 h-2 rounded-full transition-all"
                        style={{ width: `${getVotePercentage(item)}%` }}
                      ></div>
                    </div>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        )}

        {/* Pagination */}
        {news.length > 0 && (
          <div className="flex justify-center gap-2 mt-8">
            <button
              onClick={() => setPage((p) => Math.max(1, p - 1))}
              disabled={page === 1}
              className="px-4 py-2 bg-white rounded-lg disabled:opacity-50"
            >
              ← Anterior
            </button>
            <span className="px-4 py-2">Página {page}</span>
            <button
              onClick={() => setPage((p) => p + 1)}
              className="px-4 py-2 bg-white rounded-lg"
            >
              Siguiente →
            </button>
          </div>
        )}
      </div>

      <style jsx>{`
        .badge {
          @apply px-2 py-1 rounded-full text-xs font-medium;
        }
        .badge-pending {
          @apply bg-yellow-100 text-yellow-800;
        }
        .badge-real {
          @apply bg-green-100 text-green-800;
        }
        .badge-fake {
          @apply bg-red-100 text-red-800;
        }
        .badge-unknown {
          @apply bg-gray-100 text-gray-600;
        }
      `}</style>
    </div>
  );
}