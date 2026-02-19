import { useCurrentFrame, useVideoConfig, interpolate, spring } from "remotion";
import { FC } from "react";

export const Scene5Completion: FC = () => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();

  const badgeOpacity = interpolate(frame, [5, 20], [0, 1]);
  const badgeScale = spring({ frame, fps, config: { damping: 10 } });

  const photosOpacity = interpolate(frame, [20, 35], [0, 1]);
  const notifyOpacity = interpolate(frame, [35, 50], [0, 1]);

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
      {/* Ready badge */}
      <div
        style={{
          transform: `scale(${badgeScale})`,
          opacity: badgeOpacity,
          padding: "20px 50px",
          backgroundColor: "#10b981",
          borderRadius: 50,
          boxShadow: "0 0 40px rgba(16, 185, 129, 0.5)",
        }}
      >
        <div style={{ fontSize: 32, color: "white", fontWeight: 800 }}>
          ✓ PROPERTY READY
        </div>
      </div>

      {/* Photos grid */}
      <div
        style={{
          display: "flex",
          gap: 20,
          marginTop: 40,
          opacity: photosOpacity,
        }}
      >
        {/* Before photo */}
        <div
          style={{
            width: 200,
            height: 150,
            borderRadius: 12,
            backgroundColor: "#374151",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            border: "2px solid #ef4444",
          }}
        >
          <span style={{ fontSize: 40, marginBottom: 8 }}>🧹</span>
          <span style={{ color: "#ef4444", fontWeight: 600 }}>BEFORE</span>
        </div>

        {/* Arrow */}
        <div style={{ display: "flex", alignItems: "center", fontSize: 30, color: "#6b7280" }}>
          →
        </div>

        {/* After photo */}
        <div
          style={{
            width: 200,
            height: 150,
            borderRadius: 12,
            backgroundColor: "#1f2937",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            border: "2px solid #10b981",
          }}
        >
          <span style={{ fontSize: 40, marginBottom: 8 }}>✨</span>
          <span style={{ color: "#10b981", fontWeight: 600 }}>AFTER</span>
        </div>
      </div>

      {/* PM Notification */}
      <div
        style={{
          marginTop: 30,
          padding: "16px 32px",
          backgroundColor: "#1f2937",
          borderRadius: 12,
          border: "1px solid #374151",
          opacity: notifyOpacity,
          display: "flex",
          alignItems: "center",
          gap: 12,
        }}
      >
        <span style={{ fontSize: 24 }}>📱</span>
        <div>
          <div style={{ color: "#9ca3af", fontSize: 14 }}>Property Manager Notified</div>
          <div style={{ color: "#10b981", fontWeight: 600 }}>Status: Ready for next guest</div>
        </div>
      </div>

      {/* HumanLoop branding */}
      <div
        style={{
          position: "absolute",
          bottom: 30,
          color: "#6b7280",
          fontSize: 14,
        }}
      >
        Powered by <span style={{ color: "#8b5cf6" }}>HumanLoop.cl</span>
      </div>
    </div>
  );
};
