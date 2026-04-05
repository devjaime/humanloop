"use client";

import { useState, useEffect } from "react";
import Link from "next/link";

interface NewsItem {
  id: string;
  title: string;
  source: string | null;
  status: string;
  human_votes_count: number;
  real_votes: number;
  fake_votes: number;
  ai_verdict: { verdict: string; confidence: number } | null;
  created_at: string;
}

export default function AdminPage() {
  const [news, setNews] = useState<NewsItem[]>([]);
  const [loading, setLoading] = useState(true);
  const [stats, setStats] = useState({ total: 0, pending: 0, analyzed: 0, completed: 0 });

  useEffect(() => {
    fetchNews();
  }, []);

  async function fetchNews() {
    setLoading(true);
    try {
      const res = await fetch("/api/news?status=all&pageSize=100");
      const data = await res.json();
      setNews(data.news || []);

      const pending = data.news?.filter((n: NewsItem) => n.status === "pending").length || 0;
      const analyzed = data.news?.filter((n: NewsItem) => n.status === "analyzed").length || 0;
      const completed = data.news?.filter((n: NewsItem) => n.status === "completed").length || 0;
      
      setStats({
        total: data.total || 0,
        pending,
        analyzed,
        completed,
      });
    } catch (e) {
      console.error(e);
    }
    setLoading(false);
  }

  async function addSampleNews() {
    const sampleNews = [
      {
        title: "Chile anuncia nuevo aumento del salario mínimo a $500.000",
        source: "Ministerio del Trabajo",
        url: "https://.gob.cl",
        content: "El gobierno anunció que el salario mínimosubirá a $500.000 mensuales a partir de enero...",
      },
      {
        title: "Científicos descubren que el café cura el cáncer",
        source: "Noticias Salud",
        url: "https://ejemplo.com",
        content: "Un estudio reciente reveló que consumir café previene todo tipo de cáncer...",
      },
      {
        title: "Banco Central mantiene tasa de interés en 5.5%",
        source: "Banco Central de Chile",
        url: "https://bcentral.cl",
        content: "El Comité de Política Monetaria decidió mantener la tasa de interés...",
      },
    ];

    for (const n of sampleNews) {
      await fetch("/api/news", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(n),
      });
    }

    fetchNews();
  }

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-gradient-to-r from-purple-600 to-purple-800 text-white py-6">
        <div className="max-w-6xl mx-auto px-4">
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-2xl font-bold flex items-center gap-2">
                📊 Admin - FakeNews Detector
              </h1>
              <p className="text-purple-100 mt-1">Panel de gestión</p>
            </div>
            <Link
              href="/fake-news"
              className="bg-white/10 hover:bg-white/20 px-4 py-2 rounded-lg transition"
            >
              👁️ Ver sitio
            </Link>
          </div>
        </div>
      </header>

      {/* Stats */}
      <div className="max-w-6xl mx-auto px-4 py-6">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
          <div className="bg-white rounded-xl shadow-sm p-6">
            <p className="text-gray-500 text-sm">Total Noticias</p>
            <p className="text-3xl font-bold text-gray-900">{stats.total}</p>
          </div>
          <div className="bg-white rounded-xl shadow-sm p-6">
            <p className="text-yellow-600 text-sm">⏳ Pendientes</p>
            <p className="text-3xl font-bold text-yellow-600">{stats.pending}</p>
          </div>
          <div className="bg-white rounded-xl shadow-sm p-6">
            <p className="text-blue-600 text-sm">🤖 Analizadas</p>
            <p className="text-3xl font-bold text-blue-600">{stats.analyzed}</p>
          </div>
          <div className="bg-white rounded-xl shadow-sm p-6">
            <p className="text-green-600 text-sm">✅ Completadas</p>
            <p className="text-3xl font-bold text-green-600">{stats.completed}</p>
          </div>
        </div>

        {/* Actions */}
        <div className="bg-white rounded-xl shadow-sm p-6 mb-6">
          <h2 className="text-lg font-semibold mb-4">⚡ Acciones</h2>
          <div className="flex gap-4 flex-wrap">
            <button
              onClick={addSampleNews}
              className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700"
            >
              + Agregar noticias de prueba
            </button>
            <button
              onClick={fetchNews}
              className="px-4 py-2 bg-gray-200 text-gray-700 rounded-lg hover:bg-gray-300"
            >
              🔄 Actualizar
            </button>
          </div>
        </div>

        {/* News List */}
        <div className="bg-white rounded-xl shadow-sm p-6">
          <h2 className="text-lg font-semibold mb-4">📋 Todas las noticias</h2>
          
          {loading ? (
            <div className="animate-pulse space-y-4">
              {[...Array(5)].map((_, i) => (
                <div key={i} className="h-16 bg-gray-200 rounded"></div>
              ))}
            </div>
          ) : news.length === 0 ? (
            <p className="text-gray-500 text-center py-8">
              No hay noticias. Agrega algunas para comenzar.
            </p>
          ) : (
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr className="border-b">
                    <th className="text-left py-3 px-4 text-gray-500 text-sm">Título</th>
                    <th className="text-left py-3 px-4 text-gray-500 text-sm">Fuente</th>
                    <th className="text-left py-3 px-4 text-gray-500 text-sm">Estado</th>
                    <th className="text-left py-3 px-4 text-gray-500 text-sm">Votos</th>
                    <th className="text-left py-3 px-4 text-gray-500 text-sm">Veredicto IA</th>
                    <th className="text-left py-3 px-4 text-gray-500 text-sm">Acciones</th>
                  </tr>
                </thead>
                <tbody>
                  {news.map((item) => (
                    <tr key={item.id} className="border-b hover:bg-gray-50">
                      <td className="py-3 px-4 max-w-xs truncate">{item.title}</td>
                      <td className="py-3 px-4 text-sm text-gray-500">{item.source || "-"}</td>
                      <td className="py-3 px-4">
                        <span
                          className={`px-2 py-1 rounded text-xs font-medium ${
                            item.status === "pending"
                              ? "bg-yellow-100 text-yellow-800"
                              : item.status === "analyzed"
                              ? "bg-blue-100 text-blue-800"
                              : "bg-green-100 text-green-800"
                          }`}
                        >
                          {item.status}
                        </span>
                      </td>
                      <td className="py-3 px-4 text-sm">
                        {item.human_votes_count} ({item.real_votes}R/{item.fake_votes}F)
                      </td>
                      <td className="py-3 px-4">
                        {item.ai_verdict ? (
                          <span
                            className={`text-sm ${
                              item.ai_verdict.verdict === "REAL"
                                ? "text-green-600"
                                : item.ai_verdict.verdict === "FAKE"
                                ? "text-red-600"
                                : "text-gray-500"
                            }`}
                          >
                            {item.ai_verdict.verdict} ({item.ai_verdict.confidence}%)
                          </span>
                        ) : (
                          <span className="text-gray-400 text-sm">-</span>
                        )}
                      </td>
                      <td className="py-3 px-4">
                        <Link
                          href={`/fake-news/${item.id}`}
                          className="text-blue-600 hover:underline text-sm"
                        >
                          Ver →
                        </Link>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}