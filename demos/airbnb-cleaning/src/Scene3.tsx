import { useCurrentFrame, useVideoConfig, interpolate, spring } from "remotion";
import { FC } from "react";

export const Scene3Verification: FC = () => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();

  const checkOpacity = interpolate(frame, [5, 15], [0, 1]);
  const checkScale = spring({ frame, fps, config: { damping: 12 } });

  const serviceOpacity = interpolate(frame, [20, 35], [0, 1]);

  return (
    <div
      style={{
        width: "100%",
        height: "100%",
        backgroundColor: "#0a0a0f",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        fontFamily: "system-ui, sans-serif",
      }}
    >
      {/* Checkmark circle */}
      <div
        style={{
          width: 150,
          height: 150,
          borderRadius: "50%",
          backgroundColor: "#10b981",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          transform: `scale(${checkScale})`,
          opacity: checkOpacity,
          boxShadow: "0 0 60px rgba(16, 185, 129, 0.4)",
        }}
      >
        <div style={{ fontSize: 80, color: "white" }}>✓</div>
      </div>

      {/* Verification text */}
      <div
        style={{
          marginTop: 30,
          color: "#10b981",
          fontSize: 28,
          fontWeight: 700,
          opacity: checkOpacity,
        }}
      >
        SERVICE VERIFIED
      </div>

      {/* Service details card */}
      <div
        style={{
          marginTop: 30,
          padding: "24px 40px",
          backgroundColor: "#1f2937",
          borderRadius: 12,
          border: "1px solid #374151",
          opacity: serviceOpacity,
        }}
      >
        <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
          <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
            <span style={{ fontSize: 20 }}>🏠</span>
            <span style={{ color: "#d1d5db", fontSize: 18 }}>
              Property: Las Condes #1247
            </span>
          </div>
          <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
            <span style={{ fontSize: 20 }}>🧹</span>
            <span style={{ color: "#d1d5db", fontSize: 18 }}>
              Service: Deep Cleaning
            </span>
          </div>
          <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
            <span style={{ fontSize: 20 }}>⏱️</span>
            <span style={{ color: "#d1d5db", fontSize: 18 }}>
              ETA: 20 minutes
            </span>
          </div>
          <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
            <span style={{ fontSize: 20 }}>👷</span>
            <span style={{ color: "#d1d5db", fontSize: 18 }}>
              Team: CleaningTeam_Alpha
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};
