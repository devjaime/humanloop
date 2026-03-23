import { AbsoluteFill, interpolate, useCurrentFrame, useVideoConfig, spring, staticFile, Sequence, Audio } from "remotion";
import { useState, useEffect } from "react";

// Colors
const COLORS = {
  primary: "#0B1A33",      // Dark blue - Vocari
  accent: "#D4AF37",       // Gold
  white: "#FFFFFF",
  gray: "#64748B",
  lightGray: "#F1F5F9",
  green: "#22C55E",
};

// Scene 1: Title Card
export const Scene1 = () => {
  const frame = useCurrentFrame();
  const opacity = interpolate(frame, [0, 30], [0, 1]);
  const scale = interpolate(frame, [0, 30], [0.8, 1]);
  
  return (
    <AbsoluteFill style={{ backgroundColor: COLORS.primary, justifyContent: "center", alignItems: "center" }}>
      <div style={{ 
        opacity, 
        transform: `scale(${scale})`,
        textAlign: "center",
        padding: "40px"
      }}>
        <div style={{ 
          fontSize: "80px", 
          fontWeight: "bold", 
          color: COLORS.white,
          marginBottom: "20px"
        }}>
          Vocari.cl
        </div>
        <div style={{ 
          fontSize: "40px", 
          color: COLORS.accent,
          marginBottom: "40px"
        }}>
          Orientación Vocacional con IA
        </div>
        <div style={{ 
          fontSize: "24px", 
          color: COLORS.gray 
        }}>
          Video 1: Flujo de Colegios
        </div>
      </div>
    </AbsoluteFill>
  );
};

// Scene 2: Dashboard Introduction
export const Scene2 = () => {
  const frame = useCurrentFrame();
  const translateY = interpolate(frame, [0, 60], [100, 0]);
  
  return (
    <AbsoluteFill style={{ backgroundColor: COLORS.lightGray }}>
      <div style={{ 
        transform: `translateY(${translateY}px)`,
        padding: "60px",
        height: "100%",
        display: "flex",
        flexDirection: "column"
      }}>
        <div style={{ fontSize: "48px", fontWeight: "bold", color: COLORS.primary, marginBottom: "30px" }}>
          🎓 Dashboard para Colegios
        </div>
        
        {/* Mock Dashboard UI */}
        <div style={{ 
          backgroundColor: COLORS.white, 
          borderRadius: "16px", 
          padding: "30px",
          boxShadow: "0 4px 20px rgba(0,0,0,0.1)",
          flex: 1
        }}>
          <div style={{ display: "flex", gap: "20px", marginBottom: "30px" }}>
            <div style={{ background: "#EEF2FF", padding: "20px", borderRadius: "12px", flex: 1 }}>
              <div style={{ fontSize: "36px", fontWeight: "bold", color: COLORS.primary }}>245</div>
              <div style={{ color: COLORS.gray }}>Estudiantes</div>
            </div>
            <div style={{ background: "#FEF3C7", padding: "20px", borderRadius: "12px", flex: 1 }}>
              <div style={{ fontSize: "36px", fontWeight: "bold", color: COLORS.accent }}>18</div>
              <div style={{ color: COLORS.gray }}>Informes</div>
            </div>
            <div style={{ background: "#DCFCE7", padding: "20px", borderRadius: "12px", flex: 1 }}>
              <div style={{ fontSize: "36px", fontWeight: "bold", color: COLORS.green }}>92%</div>
              <div style={{ color: COLORS.gray }}>Satisfacción</div>
            </div>
          </div>
          
          <div style={{ height: "200px", background: "#F8FAFC", borderRadius: "8px", display: "flex", alignItems: "center", justifyContent: "center", color: COLORS.gray }}>
            📊 Gráfico de Resultados por Curso
          </div>
        </div>
      </div>
    </AbsoluteFill>
  );
};

// Scene 3: Features List
export const Scene3 = () => {
  const frame = useCurrentFrame();
  
  const features = [
    "📝 Registro masivo de estudiantes",
    "👨‍🏫 Asignación de orientadores",
    "📈 Reportes estadísticos",
    "🔒 Datos anonimizados",
    "💾 Historial completo"
  ];
  
  return (
    <AbsoluteFill style={{ backgroundColor: COLORS.primary }}>
      <div style={{ padding: "60px" }}>
        <div style={{ fontSize: "48px", fontWeight: "bold", color: COLORS.white, marginBottom: "40px" }}>
          Características del Dashboard
        </div>
        
        <div style={{ display: "flex", flexDirection: "column", gap: "20px" }}>
          {features.map((feature, i) => {
            const delay = i * 20;
            const opacity = interpolate(frame, [delay, delay + 30], [0, 1]);
            const translateX = interpolate(frame, [delay, delay + 30], [50, 0]);
            
            return (
              <div key={i} style={{ 
                opacity, 
                transform: `translateX(${translateX}px)`,
                fontSize: "32px", 
                color: COLORS.white,
                display: "flex",
                alignItems: "center",
                gap: "16px"
              }}>
                <span style={{ color: COLORS.green }}>✓</span>
                {feature}
              </div>
            );
          })}
        </div>
      </div>
    </AbsoluteFill>
  );
};

// Scene 4: CTA
export const Scene4 = () => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();
  const scale = spring({ frame, fps, from: 0.5, to: 1 });
  
  return (
    <AbsoluteFill style={{ backgroundColor: COLORS.accent, justifyContent: "center", alignItems: "center" }}>
      <div style={{ 
        transform: `scale(${scale})`,
        textAlign: "center"
      }}>
        <div style={{ fontSize: "48px", fontWeight: "bold", color: COLORS.primary, marginBottom: "20px" }}>
          ¡Integra Vocari.cl en tu colegio!
        </div>
        <div style={{ fontSize: "28px", color: COLORS.primary }}>
          Contactanos: hola@vocari.cl
        </div>
      </div>
    </AbsoluteFill>
  );
};
