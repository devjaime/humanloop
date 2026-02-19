import { useCurrentFrame, useVideoConfig, interpolate, spring } from "remotion";
import { FC } from "react";

export const Scene2LicensePlate: FC = () => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();

  const plateOpacity = interpolate(frame, [10, 30], [0, 1]);
  const glowIntensity = interpolate(frame, [30, 50], [0, 1]);

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
      {/* Camera frame */}
      <div
        style={{
          width: 600,
          height: 350,
          borderRadius: 16,
          border: "3px solid #374151",
          overflow: "hidden",
          position: "relative",
          backgroundColor: "#111827",
        }}
      >
        {/* Camera feed simulation */}
        <div
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            background:
              "linear-gradient(180deg, #1f2937 0%, #111827 100%)",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <div style={{ fontSize: 60, opacity: 0.3 }}>🚗</div>
        </div>

        {/* Scanning line */}
        <div
          style={{
            position: "absolute",
            top: interpolate(frame, [0, 40], [0, 100]) + "%",
            left: 0,
            right: 0,
            height: 2,
            backgroundColor: "#8b5cf6",
            boxShadow: "0 0 20px rgba(139, 92, 246, 0.8)",
          }}
        />

        {/* LPR detected badge */}
        <div
          style={{
            position: "absolute",
            top: 20,
            left: 20,
            backgroundColor: "#10b981",
            color: "white",
            padding: "4px 12px",
            borderRadius: 4,
            fontSize: 12,
            fontWeight: 600,
          }}
        >
          LPR ACTIVE
        </div>
      </div>

      {/* License plate */}
      <div
        style={{
          marginTop: 40,
          padding: "16px 40px",
          backgroundColor: "#fbbf24",
          borderRadius: 8,
          boxShadow: `0 0 ${30 * glowIntensity}px rgba(251, 191, 36, ${glowIntensity * 0.5})`,
          opacity: plateOpacity,
        }}
      >
        <div
          style={{
            fontSize: 48,
            fontWeight: 800,
            color: "#1f2937",
            fontFamily: "monospace",
            letterSpacing: 4,
          }}
        >
          SR-CZ-57
        </div>
      </div>

      {/* Status */}
      <div
        style={{
          marginTop: 30,
          color: "#10b981",
          fontSize: 20,
          fontWeight: 600,
          opacity: plateOpacity,
        }}
      >
        ✓ License Plate Detected - Vehicle Leaving
      </div>
    </div>
  );
};
