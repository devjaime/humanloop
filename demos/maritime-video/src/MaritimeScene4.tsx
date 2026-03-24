import { AbsoluteFill } from "remotion";
import React from "react";

export const Scene4: React.FC = () => {
  const titleStyle: React.CSSProperties = {
    fontFamily: "system-ui, -apple-system, sans-serif",
    fontSize: "42px",
    fontWeight: 700,
    color: "white",
    textAlign: "center",
    position: "absolute",
    top: "5%",
    left: 0,
    right: 0,
  };

  const gridStyle: React.CSSProperties = {
    position: "absolute",
    top: "20%",
    left: "5%",
    right: "5%",
    display: "grid",
    gridTemplateColumns: "repeat(2, 1fr)",
    gap: "20px",
  };

  const cardStyle = (color: string, bg: string): React.CSSProperties => ({
    backgroundColor: bg,
    borderRadius: "16px",
    padding: "24px",
    border: `2px solid ${color}40`,
  });

  const cardTitleStyle: React.CSSProperties = {
    fontFamily: "system-ui, -apple-system, sans-serif",
    fontSize: "22px",
    fontWeight: 700,
    color: "white",
    marginBottom: "8px",
  };

  const cardDescStyle: React.CSSProperties = {
    fontFamily: "system-ui, -apple-system, sans-serif",
    fontSize: "16px",
    color: "#94a3b8",
    marginBottom: "12px",
  };

  const tagsStyle: React.CSSProperties = {
    display: "flex",
    flexWrap: "wrap",
    gap: "8px",
  };

  const tagStyle = (color: string): React.CSSProperties => ({
    padding: "4px 12px",
    backgroundColor: `${color}30`,
    color,
    borderRadius: "20px",
    fontSize: "14px",
    fontWeight: 600,
  });

  return (
    <AbsoluteFill style={{ backgroundColor: "#0a1628" }}>
      <div style={titleStyle}>🛠️ Servicios Técnicos</div>

      <div style={gridStyle}>
        <div style={cardStyle("#3b82f6", "#1e3a5f40")}>
          <div style={cardTitleStyle}>📡 Radar Systems</div>
          <div style={cardDescStyle}>Instalación, calibración y mantenimiento</div>
          <div style={tagsStyle}>
            {["FAR-1523", "FAR-1518", "FAR-2127", "ACE"].map(t => (
              <span key={t} style={tagStyle("#3b82f6")}>{t}</span>
            ))}
          </div>
        </div>

        <div style={cardStyle("#06b6d4", "#164e6340")}>
          <div style={cardTitleStyle}>📻 GMDSS & VHF/HF</div>
          <div style={cardDescStyle}>Sistemas de comunicación marítima</div>
          <div style={tagsStyle}>
            {["EPIRB", "SART", "VHF", "HF"].map(t => (
              <span key={t} style={tagStyle("#06b6d4")}>{t}</span>
            ))}
          </div>
        </div>

        <div style={cardStyle("#10b981", "#064e3940")}>
          <div style={cardTitleStyle}>🧭 Navigation & AIS</div>
          <div style={cardDescStyle}>GPS, navegación, transponders AIS</div>
          <div style={tagsStyle}>
            {["GP-170", "AIS", "GPS"].map(t => (
              <span key={t} style={tagStyle("#10b981")}>{t}</span>
            ))}
          </div>
        </div>

        <div style={cardStyle("#a855f7", "#581c8740")}>
          <div style={cardTitleStyle}>🔊 Sonar & EchoSounders</div>
          <div style={cardDescStyle}>Diagnóstico y calibración</div>
          <div style={tagsStyle}>
            {["DFF3D", "FCV-628", "Transducer"].map(t => (
              <span key={t} style={tagStyle("#a855f7")}>{t}</span>
            ))}
          </div>
        </div>
      </div>
    </AbsoluteFill>
  );
};
