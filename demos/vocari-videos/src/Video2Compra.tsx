import { AbsoluteFill, interpolate, useCurrentFrame, spring } from "remotion";

const COLORS = {
  primary: "#0B1A33",
  accent: "#D4AF37",
  white: "#FFFFFF",
  gray: "#64748B",
  green: "#22C55E",
};

// Scene 1: Title
export const Scene1 = () => {
  return (
    <AbsoluteFill style={{ backgroundColor: COLORS.primary, justifyContent: "center", alignItems: "center" }}>
      <div style={{ textAlign: "center", padding: "40px" }}>
        <div style={{ fontSize: "80px", fontWeight: "bold", color: COLORS.white, marginBottom: "20px" }}>
          Vocari.cl
        </div>
        <div style={{ fontSize: "40px", color: COLORS.accent, marginBottom: "40px" }}>
          Compra tu Informe Vocacional
        </div>
        <div style={{ fontSize: "24px", color: COLORS.gray }}>
          Video 2: Flujo de Compra
        </div>
      </div>
    </AbsoluteFill>
  );
};

// Scene 2: Step 1
export const Scene2 = () => {
  return (
    <AbsoluteFill style={{ backgroundColor: COLORS.white }}>
      <div style={{ padding: "60px", height: "100%", display: "flex", flexDirection: "column", justifyContent: "center" }}>
        <div style={{ fontSize: "24px", color: COLORS.gray, marginBottom: "20px" }}>Paso 1</div>
        <div style={{ fontSize: "48px", fontWeight: "bold", color: COLORS.primary, marginBottom: "30px" }}>
          Realiza el Test Vocacional
        </div>
        <div style={{ background: "#F1F5F9", padding: "40px", borderRadius: "16px" }}>
          <div style={{ fontSize: "32px", marginBottom: "20px" }}>🧪 Test RIASEC</div>
          <div style={{ fontSize: "24px", color: COLORS.gray }}>60 preguntas · 10 minutos · Gratis</div>
        </div>
      </div>
    </AbsoluteFill>
  );
};

// Scene 3: Step 2
export const Scene3 = () => {
  return (
    <AbsoluteFill style={{ backgroundColor: COLORS.white }}>
      <div style={{ padding: "60px", height: "100%", display: "flex", flexDirection: "column", justifyContent: "center" }}>
        <div style={{ fontSize: "24px", color: COLORS.gray, marginBottom: "20px" }}>Paso 2</div>
        <div style={{ fontSize: "48px", fontWeight: "bold", color: COLORS.primary, marginBottom: "30px" }}>
          Elige tu Informe
        </div>
        <div style={{ display: "flex", gap: "30px" }}>
          <div style={{ flex: 1, background: "#FEF3C7", padding: "30px", borderRadius: "16px", border: "2px solid #F59E0B" }}>
            <div style={{ fontSize: "28px", fontWeight: "bold", color: COLORS.primary }}>Esencial</div>
            <div style={{ fontSize: "36px", color: COLORS.accent, margin: "10px 0" }}>$10.990</div>
            <div style={{ fontSize: "18px", color: COLORS.gray }}>PDF + RIASEC + Carreras</div>
          </div>
          <div style={{ flex: 1, background: "#EEF2FF", padding: "30px", borderRadius: "16px", border: "2px solid #4F46E5" }}>
            <div style={{ fontSize: "28px", fontWeight: "bold", color: COLORS.primary }}>Premium</div>
            <div style={{ fontSize: "36px", color: COLORS.accent, margin: "10px 0" }}>$14.990</div>
            <div style={{ fontSize: "18px", color: COLORS.gray }}>Todo + Video + Prioridad</div>
          </div>
        </div>
      </div>
    </AbsoluteFill>
  );
};

// Scene 4: Step 3 - Payment
export const Scene4 = () => {
  return (
    <AbsoluteFill style={{ backgroundColor: COLORS.white }}>
      <div style={{ padding: "60px", height: "100%", display: "flex", flexDirection: "column", justifyContent: "center" }}>
        <div style={{ fontSize: "24px", color: COLORS.gray, marginBottom: "20px" }}>Paso 3</div>
        <div style={{ fontSize: "48px", fontWeight: "bold", color: COLORS.primary, marginBottom: "30px" }}>
          Pago Seguro con PayPal
        </div>
        <div style={{ background: "#F1F5F9", padding: "40px", borderRadius: "16px", textAlign: "center" }}>
          <div style={{ fontSize: "64px", marginBottom: "20px" }}>🔒</div>
          <div style={{ fontSize: "28px", color: COLORS.primary }}>PayPal NCP</div>
          <div style={{ fontSize: "20px", color: COLORS.gray, marginTop: "10px" }}>Tu pago está protegido</div>
        </div>
      </div>
    </AbsoluteFill>
  );
};

// Scene 5: Step 4 - Receive
export const Scene5 = () => {
  return (
    <AbsoluteFill style={{ backgroundColor: COLORS.green, justifyContent: "center", alignItems: "center" }}>
      <div style={{ textAlign: "center", padding: "40px" }}>
        <div style={{ fontSize: "80px", marginBottom: "30px" }}>✅</div>
        <div style={{ fontSize: "48px", fontWeight: "bold", color: COLORS.white, marginBottom: "20px" }}>
          ¡Informe Listo!
        </div>
        <div style={{ fontSize: "28px", color: COLORS.white }}>
          Lo recibes por email y en tu dashboard
        </div>
      </div>
    </AbsoluteFill>
  );
};
