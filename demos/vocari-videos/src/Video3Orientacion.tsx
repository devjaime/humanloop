import { AbsoluteFill } from "remotion";

const COLORS = {
  primary: "#0B1A33",
  accent: "#D4AF37",
  white: "#FFFFFF",
  gray: "#64748B",
  green: "#22C55E",
  purple: "#8B5CF6",
};

// Scene 1: Title
export const Scene1 = () => (
  <AbsoluteFill style={{ backgroundColor: COLORS.primary, justifyContent: "center", alignItems: "center" }}>
    <div style={{ textAlign: "center", padding: "40px" }}>
      <div style={{ fontSize: "80px", fontWeight: "bold", color: COLORS.white, marginBottom: "20px" }}>
        Vocari.cl
      </div>
      <div style={{ fontSize: "40px", color: COLORS.accent, marginBottom: "40px" }}>
        Flujo de Orientación con IA
      </div>
      <div style={{ fontSize: "24px", color: COLORS.gray }}>
        Video 3: Orientación Vocacional
      </div>
    </div>
  </AbsoluteFill>
);

// Scene 2: Test RIASEC
export const Scene2 = () => (
  <AbsoluteFill style={{ backgroundColor: COLORS.white, justifyContent: "center", alignItems: "center" }}>
    <div style={{ textAlign: "center", padding: "60px" }}>
      <div style={{ fontSize: "80px", marginBottom: "30px" }}>🧪</div>
      <div style={{ fontSize: "48px", fontWeight: "bold", color: COLORS.primary, marginBottom: "20px" }}>
        Paso 1: Test RIASEC
      </div>
      <div style={{ fontSize: "28px", color: COLORS.gray }}>
        60 preguntas basadas en el modelo de John Holland
      </div>
      <div style={{ fontSize: "24px", color: COLORS.green, marginTop: "20px" }}>
        Duración: ~10 minutos
      </div>
    </div>
  </AbsoluteFill>
);

// Scene 3: Results
export const Scene3 = () => (
  <AbsoluteFill style={{ backgroundColor: COLORS.purple, justifyContent: "center", alignItems: "center" }}>
    <div style={{ textAlign: "center", padding: "60px" }}>
      <div style={{ fontSize: "80px", marginBottom: "30px" }}>📊</div>
      <div style={{ fontSize: "48px", fontWeight: "bold", color: COLORS.white, marginBottom: "20px" }}>
        Paso 2: Tu Perfil Vocacional
      </div>
      <div style={{ fontSize: "28px", color: COLORS.white }}>
        R - Realista · I - Investigativo · A - Artístico
      </div>
      <div style={{ fontSize: "36px", color: COLORS.accent, marginTop: "30px", fontWeight: "bold" }}>
        Perfil:RIA
      </div>
    </div>
  </AbsoluteFill>
);

// Scene 4: Career Recommendations
export const Scene4 = () => (
  <AbsoluteFill style={{ backgroundColor: COLORS.white }}>
    <div style={{ padding: "60px", height: "100%", display: "flex", flexDirection: "column", justifyContent: "center" }}>
      <div style={{ fontSize: "48px", fontWeight: "bold", color: COLORS.primary, marginBottom: "30px" }}>
        Paso 3: Carreras Recomendadas
      </div>
      <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
        {["🏗️ Ingeniería Civil", "🔬 Ciencias Biológicas", "💻 Ingeniería en Sistemas", "⚙️ Ingeniería Mecánica"].map((career, i) => (
          <div key={i} style={{ fontSize: "28px", padding: "20px", background: "#F1F5F9", borderRadius: "12px" }}>
            {career}
          </div>
        ))}
      </div>
      <div style={{ fontSize: "20px", color: COLORS.gray, marginTop: "20px" }}>
        📈 Datos en tiempo real del MINEDUC
      </div>
    </div>
  </AbsoluteFill>
);

// Scene 5: AI Chat
export const Scene5 = () => (
  <AbsoluteFill style={{ backgroundColor: COLORS.primary }}>
    <div style={{ padding: "60px", height: "100%", display: "flex", flexDirection: "column", justifyContent: "center" }}>
      <div style={{ fontSize: "48px", fontWeight: "bold", color: COLORS.white, marginBottom: "30px" }}>
        Paso 4: Chat con IA
      </div>
      <div style={{ background: "#1E293B", padding: "30px", borderRadius: "16px" }}>
        <div style={{ fontSize: "24px", color: COLORS.green, marginBottom: "10px" }}>🤖 Vocari AI</div>
        <div style={{ fontSize: "20px", color: COLORS.white, marginBottom: "20px" }}>
          "Basado en tu perfil Investigativo, te recomiendo explorar carreras en el área de ciencias..."
        </div>
        <div style={{ fontSize: "20px", color: COLORS.white, background: "#334155", padding: "15px", borderRadius: "8px" }}>
          💬 ¿Cuánto gana un Ingeniero Civil?
        </div>
      </div>
    </div>
  </AbsoluteFill>
);

// Scene 6: Human Orientador
export const Scene6 = () => (
  <AbsoluteFill style={{ backgroundColor: COLORS.accent, justifyContent: "center", alignItems: "center" }}>
    <div style={{ textAlign: "center", padding: "60px" }}>
      <div style={{ fontSize: "80px", marginBottom: "30px" }}>👨‍🏫</div>
      <div style={{ fontSize: "48px", fontWeight: "bold", color: COLORS.primary, marginBottom: "20px" }}>
        Revisión con Orientador
      </div>
      <div style={{ fontSize: "28px", color: COLORS.primary }}>
        Un orientador certificado revisa tu informe
      </div>
      <div style={{ fontSize: "24px", color: COLORS.primary, marginTop: "20px", opacity: 0.8 }}>
        y agrega recomendaciones personalizadas
      </div>
    </div>
  </AbsoluteFill>
);
