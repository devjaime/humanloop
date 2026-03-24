import { AbsoluteFill, interpolate, spring, useVideoConfig } from "remotion";
import React from "react";

export const Scene1: React.FC = () => {
  const { fps } = useVideoConfig();

  const titleStyle: React.CSSProperties = {
    fontFamily: "system-ui, -apple-system, sans-serif",
    fontSize: "96px",
    fontWeight: 800,
    color: "white",
    textAlign: "center",
    position: "absolute",
    top: "40%",
    left: 0,
    right: 0,
  };

  const subStyle: React.CSSProperties = {
    fontFamily: "system-ui, -apple-system, sans-serif",
    fontSize: "36px",
    color: "#38bdf8",
    textAlign: "center",
    position: "absolute",
    top: "55%",
    left: 0,
    right: 0,
  };

  const waveStyle: React.CSSProperties = {
    position: "absolute",
    bottom: 0,
    left: 0,
    right: 0,
    height: "30%",
    background: "linear-gradient(180deg, #0a1628 0%, #1e3a5f 100%)",
  };

  return (
    <AbsoluteFill style={{ backgroundColor: "#0a1628" }}>
      <div style={waveStyle} />
      <div style={titleStyle}>🚢 Humanloop Maritime</div>
      <div style={subStyle}>Técnicos navieros certificados cuando los necesitas</div>
    </AbsoluteFill>
  );
};
