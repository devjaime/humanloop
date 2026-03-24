import Link from "next/link";

export default function BlogIndex() {
  const posts = [
    {
      slug: "maritime-ai",
      title: "Humanloop Maritime: AI-Powered Marine Technical Services",
      description: "Técnicos navieros certificados cuando los necesitas. Radar, GMDSS, AIS, GPS - cuando los barcos necesitan expertos, los conectamos.",
      date: "March 23, 2026",
      lang: "en",
    },
    {
      slug: "plumbing-ai-chile",
      title: "AI + Human Plumbers: A New Model for Home Services in Chile",
      description: "Exploring how HumanLoop combines AI agents with certified plumbers to deliver reliable services.",
      date: "March 6, 2026",
      lang: "en",
    },
    {
      slug: "gasfiteria-ia-chile",
      title: "IA + Gasfiteros Humanos: Un Nuevo Modelo en Chile",
      description: "Cómo HumanLoop combina agentes de IA con gasfiteros certificados para servicios confiables.",
      date: "6 de Marzo, 2026",
      lang: "es",
    },
  ];

  return (
    <main className="min-h-screen bg-slate-900 text-white p-8">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold mb-4">HumanLoop Blog</h1>
        <p className="text-slate-400 mb-8">
          Exploring the intersection of AI orchestration and human execution.
        </p>

        <div className="grid gap-6">
          {posts.map((post) => (
            <Link
              key={post.slug}
              href={`/blog/${post.slug}`}
              className="block p-6 bg-slate-800 rounded-lg hover:bg-slate-700 transition-colors"
            >
              <div className="flex items-center gap-3 mb-2">
                <span className="text-xs uppercase px-2 py-1 bg-cyan-500/20 text-cyan-400 rounded">
                  {post.lang}
                </span>
                <span className="text-sm text-slate-400">{post.date}</span>
              </div>
              <h2 className="text-xl font-semibold mb-2">{post.title}</h2>
              <p className="text-slate-300">{post.description}</p>
            </Link>
          ))}
        </div>

        <div className="mt-12">
          <Link
            href="/"
            className="text-cyan-400 hover:underline"
          >
            ← Back to Home
          </Link>
        </div>
      </div>
    </main>
  );
}