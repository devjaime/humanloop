"use client";

import { useState, useEffect } from "react";
import { useLanguage } from "@/context/LanguageContext";

export default function TechArchitecture() {
  const { t } = useLanguage();
  const [activeTab, setActiveTab] = useState<"pwa" | "websocket" | "comparison">("comparison");
  const [wsMessages, setWsMessages] = useState<string[]>([]);
  const [isConnected, setIsConnected] = useState(false);

  // Simulate WebSocket messages for demo
  useEffect(() => {
    if (activeTab === "websocket") {
      setIsConnected(true);
      const messages = [
        "🔌 WebSocket connected to ws://humanloop.cl/operator",
        "📡 Listening for task assignments...",
        "📥 New task: #TASK-2024-1234 - Instalación cámaras Las Condes",
        "✅ Task accepted by operator",
        "📍 GPS tracking enabled",
        "🔄 Status update: En camino",
        "📸 Photo evidence uploaded",
        "✅ Task completed - Client rating: 5/5",
      ];

      let index = 0;
      const interval = setInterval(() => {
        if (index < messages.length) {
          setWsMessages((prev) => [...prev, messages[index]]);
          index++;
        } else {
          clearInterval(interval);
        }
      }, 1200);

      return () => clearInterval(interval);
    } else {
      setWsMessages([]);
      setIsConnected(false);
    }
  }, [activeTab]);

  return (
    <section id="tech-architecture" className="py-24 relative bg-surface">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section header */}
        <div className="text-center mb-16">
          <span className="inline-block px-4 py-2 rounded-full bg-electric/10 border border-electric/30 text-xs font-mono text-electric mb-4">
            {t.techArch.badge}
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black mb-4">
            <span className="text-text-primary">{t.techArch.title1} </span>
            <span className="bg-gradient-to-r from-electric to-secondary bg-clip-text text-transparent">
              {t.techArch.titleHighlight}
            </span>
          </h2>
          <p className="text-text-secondary max-w-2xl mx-auto text-lg">
            {t.techArch.subtitle}
          </p>
        </div>

        {/* Tab Navigation */}
        <div className="flex justify-center mb-12">
          <div className="inline-flex bg-surface-card rounded-xl p-1 border border-secondary/20">
            {[
              { id: "comparison", label: t.techArch.tabs.comparison, icon: "⚖️" },
              { id: "pwa", label: t.techArch.tabs.pwa, icon: "📱" },
              { id: "websocket", label: t.techArch.tabs.websocket, icon: "🔌" },
            ].map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id as typeof activeTab)}
                className={`px-6 py-3 rounded-lg font-medium transition-all flex items-center gap-2 ${
                  activeTab === tab.id
                    ? "bg-electric text-white"
                    : "text-text-muted hover:text-text-secondary"
                }`}
              >
                <span>{tab.icon}</span>
                {tab.label}
              </button>
            ))}
          </div>
        </div>

        {/* Tab Content */}
        <div className="max-w-5xl mx-auto">
          {/* Comparison Tab */}
          {activeTab === "comparison" && (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {/* PWA Option */}
              <div className="bg-surface-card border-2 border-success/30 rounded-2xl p-6">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-12 h-12 rounded-xl bg-success/20 flex items-center justify-center">
                    <span className="text-2xl">📱</span>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-text-primary">PWA</h3>
                    <span className="text-xs text-success font-mono">{t.techArch.pwa.recommended}</span>
                  </div>
                </div>

                <ul className="space-y-3 mb-6">
                  {t.techArch.pwa.pros.map((pro, i) => (
                    <li key={i} className="flex items-start gap-2 text-sm text-text-secondary">
                      <span className="text-success mt-0.5">✓</span>
                      {pro}
                    </li>
                  ))}
                </ul>

                <div className="bg-success/10 rounded-xl p-4 border border-success/20">
                  <div className="text-xs text-success font-mono mb-2">{t.techArch.pwa.techStack}</div>
                  <div className="flex flex-wrap gap-2">
                    {["Next.js", "React", "Workbox", "Push API", "IndexedDB"].map((tech) => (
                      <span key={tech} className="text-xs px-2 py-1 bg-success/20 rounded text-success">
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              {/* Native App Option */}
              <div className="bg-surface-card border border-secondary/20 rounded-2xl p-6">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-12 h-12 rounded-xl bg-secondary/20 flex items-center justify-center">
                    <span className="text-2xl">📲</span>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-text-primary">Native App</h3>
                    <span className="text-xs text-text-muted font-mono">{t.techArch.native.alternative}</span>
                  </div>
                </div>

                <ul className="space-y-3 mb-6">
                  {t.techArch.native.cons.map((con, i) => (
                    <li key={i} className="flex items-start gap-2 text-sm text-text-secondary">
                      <span className="text-accent mt-0.5">△</span>
                      {con}
                    </li>
                  ))}
                </ul>

                <div className="bg-secondary/10 rounded-xl p-4 border border-secondary/20">
                  <div className="text-xs text-secondary font-mono mb-2">{t.techArch.native.techStack}</div>
                  <div className="flex flex-wrap gap-2">
                    {["React Native", "Flutter", "Swift", "Kotlin"].map((tech) => (
                      <span key={tech} className="text-xs px-2 py-1 bg-secondary/20 rounded text-secondary">
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* PWA Tab */}
          {activeTab === "pwa" && (
            <div className="bg-surface-card border border-secondary/20 rounded-2xl p-8">
              <h3 className="text-2xl font-bold text-text-primary mb-6">{t.techArch.pwa.title}</h3>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
                {t.techArch.pwa.features.map((feature, i) => (
                  <div key={i} className="bg-surface rounded-xl p-5 border border-success/10">
                    <div className="text-3xl mb-3">{feature.icon}</div>
                    <h4 className="font-bold text-text-primary mb-2">{feature.title}</h4>
                    <p className="text-sm text-text-muted">{feature.description}</p>
                  </div>
                ))}
              </div>

              {/* Service Worker Demo */}
              <div className="bg-primary rounded-xl p-6 border border-secondary/10">
                <div className="flex items-center gap-2 mb-4">
                  <div className="w-3 h-3 rounded-full bg-success animate-pulse" />
                  <span className="text-sm font-mono text-text-muted">service-worker.js</span>
                </div>
                <pre className="text-sm font-mono text-text-secondary overflow-x-auto">
                  <code>{`// Offline-first caching strategy
self.addEventListener('fetch', (event) => {
  event.respondWith(
    caches.match(event.request)
      .then(cached => cached || fetch(event.request))
  );
});

// Push notifications for new tasks
self.addEventListener('push', (event) => {
  const task = event.data.json();
  self.registration.showNotification(
    '🎯 Nueva tarea asignada',
    { body: task.title, icon: '/icon.png' }
  );
});`}</code>
                </pre>
              </div>
            </div>
          )}

          {/* WebSocket Tab */}
          {activeTab === "websocket" && (
            <div className="bg-surface-card border border-secondary/20 rounded-2xl p-8">
              <div className="flex items-center justify-between mb-6">
                <h3 className="text-2xl font-bold text-text-primary">{t.techArch.websocket.title}</h3>
                <div className="flex items-center gap-2">
                  <div className={`w-3 h-3 rounded-full ${isConnected ? "bg-success animate-pulse" : "bg-red-500"}`} />
                  <span className="text-sm font-mono text-text-muted">
                    {isConnected ? "Connected" : "Disconnected"}
                  </span>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                {/* Live Demo */}
                <div className="bg-primary rounded-xl overflow-hidden border border-secondary/10">
                  <div className="flex items-center gap-2 px-4 py-3 bg-surface/50 border-b border-secondary/10">
                    <div className="w-3 h-3 rounded-full bg-red-500" />
                    <div className="w-3 h-3 rounded-full bg-yellow-500" />
                    <div className="w-3 h-3 rounded-full bg-green-500" />
                    <span className="text-xs text-text-muted ml-2 font-mono">WebSocket Demo</span>
                  </div>
                  <div className="p-4 h-72 overflow-y-auto font-mono text-sm space-y-2">
                    {wsMessages.map((msg, i) => (
                      <div
                        key={i}
                        className="text-text-secondary animate-fade-in-up"
                        style={{ animationDelay: `${i * 0.1}s` }}
                      >
                        <span className="text-text-muted text-xs">[{new Date().toLocaleTimeString()}]</span>{" "}
                        {msg}
                      </div>
                    ))}
                    {isConnected && wsMessages.length < 8 && (
                      <div className="text-secondary animate-pulse">▌</div>
                    )}
                  </div>
                </div>

                {/* Features */}
                <div className="space-y-4">
                  {t.techArch.websocket.features.map((feature, i) => (
                    <div key={i} className="bg-surface rounded-xl p-4 border border-electric/10">
                      <div className="flex items-center gap-3">
                        <span className="text-2xl">{feature.icon}</span>
                        <div>
                          <h4 className="font-bold text-text-primary">{feature.title}</h4>
                          <p className="text-sm text-text-muted">{feature.description}</p>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Code Example */}
              <div className="bg-primary rounded-xl p-6 border border-secondary/10">
                <div className="text-sm font-mono text-text-muted mb-3">// Client-side WebSocket connection</div>
                <pre className="text-sm font-mono text-text-secondary overflow-x-auto">
                  <code>{`const ws = new WebSocket('wss://humanloop.cl/operator');

ws.onmessage = (event) => {
  const task = JSON.parse(event.data);

  if (task.type === 'NEW_TASK') {
    showNotification(task);
    updateTaskList(task);
  }

  if (task.type === 'STATUS_UPDATE') {
    syncWithServer(task.id, task.status);
  }
};

// Send location updates
navigator.geolocation.watchPosition((pos) => {
  ws.send(JSON.stringify({
    type: 'LOCATION_UPDATE',
    lat: pos.coords.latitude,
    lng: pos.coords.longitude
  }));
});`}</code>
                </pre>
              </div>
            </div>
          )}
        </div>

        {/* Recommendation */}
        <div className="mt-12 text-center">
          <div className="inline-block bg-success/10 border border-success/30 rounded-xl p-6 max-w-2xl">
            <div className="flex items-center justify-center gap-2 mb-3">
              <span className="text-2xl">💡</span>
              <span className="font-bold text-success">{t.techArch.recommendation.title}</span>
            </div>
            <p className="text-text-secondary text-sm">
              {t.techArch.recommendation.description}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
