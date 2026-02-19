import { useCurrentFrame, useVideoConfig, interpolate, spring } from "remotion";
import { FC } from "react";

export const Scene1Checkout: FC = () => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();

  const scale = spring({
    frame,
    fps,
    config: { damping: 15 },
  });

  const opacity = interpolate(frame, [0, 15], [0, 1]);

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
      {/* Background gradient */}
      <div
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          background:
            "radial-gradient(circle at 50% 50%, rgba(139, 92, 246, 0.1) 0%, transparent 70%)",
        }}
      />

      {/* Map pin */}
      <div
        style={{
          transform: `scale(${scale})`,
          opacity,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <div style={{ fontSize: 80, marginBottom: 20 }}>📍</div>
        <div
          style={{
            color: "#8b5cf6",
            fontSize: 24,
            fontWeight: 600,
            marginBottom: 10,
          }}
        >
          Las Condes, Santiago
        </div>
        <div
          style={{
            color: "#6366f1",
            fontSize: 18,
            fontFamily: "monospace",
          }}
        >
          Property: SR-CZ-57
        </div>
      </div>

      {/* Status text */}
      <div
        style={{
          position: "absolute",
          bottom: 100,
          color: "#10b981",
          fontSize: 28,
          fontWeight: 700,
          opacity,
        }}
      >
        ✓ CHECKOUT DETECTED
      </div>

      {/* Timestamp */}
      <div
        style={{
          position: "absolute",
          bottom: 50,
          color: "#6b7280",
          fontSize: 14,
          fontFamily: "monospace",
        }}
      >
        {new Date().toISOString().slice(0, 19).replace("T", " ")} UTC
      </div>
    </div>
  );
};
