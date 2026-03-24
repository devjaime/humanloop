import { AbsoluteFill } from "remotion";
import React from "react";

export const Scene3: React.FC = () => {
  const titleStyle: React.CSSProperties = {
    fontFamily: "system-ui, -apple-system, sans-serif",
    fontSize: "48px",
    fontWeight: 700,
    color: "#38bdf8",
    textAlign: "center",
    position: "absolute",
    top: "10%",
    left: 0,
    right: 0,
  };

  const stepStyle = (color: string, top: string): React.CSSProperties => ({
    position: "absolute",
    top,
    left: "50%",
    transform: "translateX(-50%)",
    display: "flex",
    alignItems: "center",
    gap: "20px",
  });

  const numStyle = (color: string): React.CSSProperties => ({
    width: "60px",
    height: "60px",
    borderRadius: "50%",
    backgroundColor: color,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    fontSize: "28px",
    fontWeight: 800,
    color: "white",
  });

  const textStyle: React.CSSProperties = {
    fontFamily: "system-ui, -apple-system, sans-serif",
    fontSize: "24px",
    color: "white",
    fontWeight: 500,
  };

  return (
    <AbsoluteFill style={{ backgroundColor: "#0a1628" }}>
      <div style={titleStyle}>💡 La Solución HITL</div>

      <div style={stepStyle("#3b82f6", "30%")}>
        <div style={numStyle("#3b82f6")}>1</div>
        <div style={textStyle}>🤖 AI detecta y diagnostica problemas</div>
      </div>

      <div style={stepStyle("#06b6d4", "45%")}>
        <div style={numStyle("#06b6d4")}>2</div>
        <div style={textStyle}>🔗 Matching con técnicos certificados</div>
      </div>

      <div style={stepStyle("#10b981", "60%")}>
        <div style={numStyle("#10b981")}>3</div>
        <div style={textStyle}>📅 Scheduling inteligente</div>
      </div>

      <div style={stepStyle("#8b5cf6", "75%")}>
        <div style={numStyle("#8b5cf6")}>4</div>
        <div style={textStyle}>👨‍🔧 Humano ejecuta con criterio profesional</div>
      </div>
    </AbsoluteFill>
  );
};
