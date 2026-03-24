import { AbsoluteFill } from "remotion";
import React from "react";

export const Scene5: React.FC = () => {
  const titleStyle: React.CSSProperties = {
    fontFamily: "system-ui, -apple-system, sans-serif",
    fontSize: "64px",
    fontWeight: 800,
    color: "white",
    textAlign: "center",
    position: "absolute",
    top: "25%",
    left: 0,
    right: 0,
  };

  const priceStyle: React.CSSProperties = {
    fontFamily: "system-ui, -apple-system, sans-serif",
    fontSize: "32px",
    color: "#38bdf8",
    textAlign: "center",
    position: "absolute",
    top: "45%",
    left: 0,
    right: 0,
  };

  const ctaStyle: React.CSSProperties = {
    fontFamily: "system-ui, -apple-system, sans-serif",
    fontSize: "28px",
    fontWeight: 700,
    color: "#0a1628",
    backgroundColor: "#38bdf8",
    textAlign: "center",
    position: "absolute",
    top: "60%",
    left: "25%",
    right: "25%",
    padding: "20px 40px",
    borderRadius: "12px",
  };

  const footerStyle: React.CSSProperties = {
    fontFamily: "system-ui, -apple-system, sans-serif",
    fontSize: "20px",
    color: "#64748b",
    textAlign: "center",
    position: "absolute",
    bottom: "10%",
    left: 0,
    right: 0,
  };

  return (
    <AbsoluteFill style={{ backgroundColor: "#0a1628" }}>
      <div style={titleStyle}>🚀 Únete como Técnico Naval</div>
      <div style={priceStyle}>Pro: US$29/mes • Enterprise: US$99/mes<br/>Solo 15% comisión • 85% para ti</div>
      <div style={ctaStyle}>contacto@humanloop.cl</div>
      <div style={footerStyle}>humanloop.cl • AI Orchestration Platform</div>
    </AbsoluteFill>
  );
};
