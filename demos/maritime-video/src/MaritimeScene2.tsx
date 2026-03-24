import { AbsoluteFill } from "remotion";
import React from "react";

export const Scene2: React.FC = () => {
  const problemStyle: React.CSSProperties = {
    fontFamily: "system-ui, -apple-system, sans-serif",
    fontSize: "48px",
    fontWeight: 700,
    color: "#ef4444",
    textAlign: "center",
    position: "absolute",
    top: "15%",
    left: 0,
    right: 0,
  };

  const textStyle: React.CSSProperties = {
    fontFamily: "system-ui, -apple-system, sans-serif",
    fontSize: "32px",
    color: "#94a3b8",
    textAlign: "center",
    position: "absolute",
    top: "35%",
    left: "10%",
    right: "10%",
    lineHeight: 1.6,
  };

  const iconRowStyle: React.CSSProperties = {
    display: "flex",
    justifyContent: "center",
    gap: "40px",
    position: "absolute",
    top: "60%",
    left: 0,
    right: 0,
  };

  const badgeStyle = (color: string): React.CSSProperties => ({
    padding: "16px 24px",
    backgroundColor: `${color}20`,
    border: `2px solid ${color}`,
    borderRadius: "12px",
    color,
    fontSize: "20px",
    fontWeight: 600,
  });

  return (
    <AbsoluteFill style={{ backgroundColor: "#0a1628" }}>
      <div style={problemStyle}>⚠️ El Problema</div>
      <div style={textStyle}>
        Equipos críticos como radares Furuno, sistemas GMDSS, AIS y GPS
        requieren técnicos certificados. Pero encontrar uno es <strong style={{ color: "white" }}>lento, opaco</strong> y depende de redes informales.
      </div>
      <div style={iconRowStyle}>
        <span style={badgeStyle("#ef4444")}>📡 RADAR</span>
        <span style={badgeStyle("#f97316")}>📻 GMDSS</span>
        <span style={badgeStyle("#eab308")}>🧭 GPS</span>
        <span style={badgeStyle("#22c55e")}>🔊 SONAR</span>
      </div>
    </AbsoluteFill>
  );
};
