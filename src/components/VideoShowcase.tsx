"use client";

import { useState } from "react";
import { useLanguage } from "@/context/LanguageContext";

export default function VideoShowcase() {
  const { t, language } = useLanguage();
  const [activeVideo, setActiveVideo] = useState<string>("main");

  const videos = [
    {
      id: "main",
      src: language === "es" ? "/videos/humanloop-ES.mp4" : "/videos/humanloop-EN.mp4",
      title: language === "es" ? "HumanLoop - Video Principal" : "HumanLoop - Main Video",
      description: language === "es"
        ? "Descubre cómo HumanLoop conecta IA con operadores humanos"
        : "Discover how HumanLoop connects AI with human operators",
      duration: "60s",
      badge: language === "es" ? "DESTACADO" : "FEATURED",
    },
    {
      id: "skills",
      src: "/videos/skills-showcase.mp4",
      title: language === "es" ? "Showcase de Skills" : "Skills Showcase",
      description: language === "es"
        ? "Deep dive en los skills disponibles: consultoría y IoT"
        : "Deep dive into available skills: consulting and IoT",
      duration: "80s",
      badge: "SKILLS",
    },
    {
      id: "promo",
      src: "/videos/humanloop-promo.mp4",
      title: language === "es" ? "Video Promocional" : "Promo Video",
      description: language === "es"
        ? "Presentación rápida de la plataforma HITL"
        : "Quick introduction to the HITL platform",
      duration: "60s",
      badge: "PROMO",
    },
  ];

  const currentVideo = videos.find((v) => v.id === activeVideo) || videos[0];

  return (
    <section id="videos" className="py-24 relative bg-gradient-to-b from-surface to-primary">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section header */}
        <div className="text-center mb-12">
          <span className="inline-block px-4 py-2 rounded-full bg-accent/10 border border-accent/30 text-xs font-mono text-accent mb-4">
            {language === "es" ? "VIDEOS PROMOCIONALES" : "PROMOTIONAL VIDEOS"}
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black mb-4">
            <span className="text-text-primary">
              {language === "es" ? "Mira " : "Watch "}
            </span>
            <span className="bg-gradient-to-r from-accent to-secondary bg-clip-text text-transparent">
              HumanLoop
            </span>
            <span className="text-text-primary">
              {language === "es" ? " en acción" : " in action"}
            </span>
          </h2>
          <p className="text-text-secondary max-w-2xl mx-auto text-lg">
            {language === "es"
              ? "Videos explicativos sobre cómo funciona la plataforma HITL"
              : "Explainer videos about how the HITL platform works"}
          </p>
        </div>

        {/* Video Player */}
        <div className="max-w-4xl mx-auto mb-8">
          <div className="relative bg-surface-card rounded-2xl overflow-hidden border-2 border-secondary/20 shadow-2xl shadow-secondary/10">
            {/* Video Badge */}
            <div className="absolute top-4 left-4 z-10">
              <span className="px-3 py-1 bg-accent text-white text-xs font-bold rounded-full">
                {currentVideo.badge}
              </span>
            </div>

            {/* Video Duration */}
            <div className="absolute top-4 right-4 z-10">
              <span className="px-3 py-1 bg-black/60 text-white text-xs font-mono rounded-full backdrop-blur-sm">
                {currentVideo.duration}
              </span>
            </div>

            {/* Video Element */}
            <video
              key={currentVideo.src}
              className="w-full aspect-video"
              controls
              poster=""
              preload="metadata"
            >
              <source src={currentVideo.src} type="video/mp4" />
              {language === "es"
                ? "Tu navegador no soporta video HTML5."
                : "Your browser does not support HTML5 video."}
            </video>

            {/* Video Info */}
            <div className="p-6 border-t border-secondary/10">
              <h3 className="text-xl font-bold text-text-primary mb-2">
                {currentVideo.title}
              </h3>
              <p className="text-text-muted text-sm">
                {currentVideo.description}
              </p>
            </div>
          </div>
        </div>

        {/* Video Selector */}
        <div className="flex flex-wrap justify-center gap-4">
          {videos.map((video) => (
            <button
              key={video.id}
              onClick={() => setActiveVideo(video.id)}
              className={`group relative bg-surface-card rounded-xl overflow-hidden border-2 transition-all duration-300 ${
                activeVideo === video.id
                  ? "border-secondary shadow-lg shadow-secondary/20 scale-105"
                  : "border-secondary/10 hover:border-secondary/30"
              }`}
              style={{ width: 280 }}
            >
              <div className="p-4">
                <div className="flex items-center justify-between mb-2">
                  <span
                    className={`text-xs font-mono px-2 py-1 rounded ${
                      activeVideo === video.id
                        ? "bg-secondary/20 text-secondary"
                        : "bg-surface text-text-muted"
                    }`}
                  >
                    {video.badge}
                  </span>
                  <span className="text-xs text-text-muted font-mono">
                    {video.duration}
                  </span>
                </div>
                <h4
                  className={`font-bold text-sm mb-1 ${
                    activeVideo === video.id ? "text-secondary" : "text-text-primary"
                  }`}
                >
                  {video.title}
                </h4>
                <p className="text-xs text-text-muted line-clamp-2">
                  {video.description}
                </p>
              </div>

              {/* Play indicator */}
              {activeVideo === video.id && (
                <div className="absolute top-2 right-2">
                  <div className="w-6 h-6 rounded-full bg-secondary flex items-center justify-center">
                    <svg
                      className="w-3 h-3 text-white"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path d="M8 5v14l11-7z" />
                    </svg>
                  </div>
                </div>
              )}
            </button>
          ))}
        </div>

        {/* Download links */}
        <div className="mt-12 text-center">
          <p className="text-text-muted text-sm mb-4">
            {language === "es"
              ? "¿Quieres descargar los videos?"
              : "Want to download the videos?"}
          </p>
          <div className="flex flex-wrap justify-center gap-3">
            {videos.map((video) => (
              <a
                key={video.id}
                href={video.src}
                download
                className="inline-flex items-center gap-2 px-4 py-2 bg-surface-card border border-secondary/20 rounded-lg text-sm text-text-secondary hover:border-secondary/40 hover:text-secondary transition-all"
              >
                <svg
                  className="w-4 h-4"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4"
                  />
                </svg>
                {video.title}
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
