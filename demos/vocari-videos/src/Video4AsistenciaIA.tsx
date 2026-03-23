import { AbsoluteFill } from "remotion";

const COLORS = {
  primary: "#0B1A33",
  accent: "#D4AF37",
  white: "#FFFFFF",
  gray: "#64748B",
  green: "#22C55E",
  blue: "#3B82F6",
  purple: "#8B5CF6",
};

// Scene 1: Title
export const Scene1 = () => (
  <AbsoluteFill style={{ backgroundColor: COLORS.primary, justifyContent: "center", alignItems: "center" }}>
    <div style={{ textAlign: "center", padding: "40px" }}>
      <div style={{ fontSize: "80px", fontWeight: "bold", color: COLORS.white, marginBottom: "20px" }}>
        🤖 Vocari AI
      </div>
      <div style={{ fontSize: "40px", color: COLORS.accent, marginBottom: "40px" }}>
        Tu Asistente de Orientación
      </div>
      <div style={{ fontSize: "24px", color: COLORS.gray }}>
        Video 4: Asistencia con Inteligencia Artificial
      </div>
    </div>
  </AbsoluteFill>
);

// Scene 2: Perfil Analysis
export const Scene2 = () => (
  <AbsoluteFill style={{ backgroundColor: COLORS.blue, justifyContent: "center", alignItems: "center" }}>
    <div style={{ textAlign: "center", padding: "60px" }}>
      <div style={{ fontSize: "80px", marginBottom: "30px" }}>🧠</div>
      <div style={{ fontSize: "48px", fontWeight: "bold", color: COLORS.white, marginBottom: "20px" }}>
        Análisis de Perfil
      </div>
      <div style={{ fontSize: "28px", color: COLORS.white }}>
        La IA analiza tus respuestas y determina tu tipo RIASEC
      </div>
    </div>
  </AbsoluteFill>
);

// Scene 3: Personalized Recommendations
export const Scene3 = () => (
  <AbsoluteFill style={{ backgroundColor: COLORS.purple, justifyContent: "center", alignItems: "center" }}>
    <div style={{ textAlign: "center", padding: "60px" }}>
      <div style={{ fontSize: "80px", marginBottom: "30px" }}>💡</div>
      <div style={{ fontSize: "48px", fontWeight: "bold", color: COLORS.white, marginBottom: "20px" }}>
        Recomendaciones Personalizadas
      </div>
      <div style={{ fontSize: "28px", color: COLORS.white }}>
        "Basado en tu perfil Realista, estas carreras pueden interesarte..."
      </div>
    </div>
  </AbsoluteFill>
);

// Scene 4: Interactive Chat
export const Scene4 = () => (
  <AbsoluteFill style={{ backgroundColor: COLORS.primary }}>
    <div style={{ padding: "60px", height: "100%", display: "flex", flexDirection: "column", justifyContent: "center" }}>
      <div style={{ fontSize: "48px", fontWeight: "bold", color: COLORS.white, marginBottom: "30px" }}>
        💬 Chat Interactivo
      </div>
      <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
        <div style={{ background: "#1E293B", padding: "20px", borderRadius: "12px", alignSelf: "flex-start", maxWidth: "70%" }}>
          <div style={{ fontSize: "20px", color: COLORS.white }}>¿Qué hace un Ingeniero Civil?</div>
        </div>
        <div style={{ background: COLORS.green, padding: "20px", borderRadius: "12px", alignSelf: "flex-end", maxWidth: "70%" }}>
          <div style={{ fontSize: "20px", color: COLORS.white }}>
            Un Ingeniero Civil diseña y construye infraestructura como puentes, edificios y carreteras...
          </div>
        </div>
        <div style={{ background: "#1E293B", padding: "20px", borderRadius: "12px", alignSelf: "flex-start", maxWidth: "70%" }}>
          <div style={{ fontSize: "20px", color: COLORS.white }}>¿Cuánto gana?</div>
        </div>
      </div>
    </div>
  </AbsoluteFill>
);

// Scene 5: Report Generation
export const Scene5 = () => (
  <AbsoluteFill style={{ backgroundColor: COLORS.accent, justifyContent: "center", alignItems: "center" }}>
    <div style={{ textAlign: "center", padding: "60px" }}>
      <div style={{ fontSize: "80px", marginBottom: "30px" }}>📄</div>
      <div style={{ fontSize: "48px", fontWeight: "bold", color: COLORS.primary, marginBottom: "20px" }}>
        Generación de Informe
      </div>
      <div style={{ fontSize: "28px", color: COLORS.primary }}>
        La IA redacta tu informe completo en segundos
      </div>
    </div>
  </AbsoluteFill>
);

// Scene 6: Smart Handoff
export const Scene6 = () => (
  <AbsoluteFill style={{ backgroundColor: COLORS.green, justifyContent: "center", alignItems: "center" }}>
    <div style={{ textAlign: "center", padding: "60px" }}>
      <div style={{ fontSize: "80px", marginBottom: "30px" }}>🔄</div>
      <div style={{ fontSize: "48px", fontWeight: "bold", color: COLORS.white, marginBottom: "20px" }}>
        Derivación Inteligente
      </div>
      <div style={{ fontSize: "28px", color: COLORS.white }}>
        Cuando detecta incertidumbre, deriva a un orientador humano
      </div>
    </div>
  </AbsoluteFill>
);

// Scene 7: Follow-up
export const Scene7 = () => (
  <AbsoluteFill style={{ backgroundColor: COLORS.primary, justifyContent: "center", alignItems: "center" }}>
    <div style={{ textAlign: "center", padding: "60px" }}>
      <div style={{ fontSize: "80px", marginBottom: "30px" }}>📅</div>
      <div style={{ fontSize: "48px", fontWeight: "bold", color: COLORS.white, marginBottom: "20px" }}>
        Seguimiento Continuo
      </div>
      <div style={{ fontSize: "28px", color: COLORS.gray }}>
        Recordatorios personalizados y sugerencias de siguiente paso
      </div>
    </div>
  </AbsoluteFill>
);
