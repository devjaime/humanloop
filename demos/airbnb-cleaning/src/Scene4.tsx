import { useCurrentFrame, useVideoConfig, interpolate, spring } from "remotion";
import { FC } from "react";

export const Scene4TeamNotification: FC = () => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();

  const phoneOpacity = interpolate(frame, [5, 20], [0, 1]);
  const notifyOpacity = interpolate(frame, [25, 40], [0, 1]);

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
      {/* Phone frame */}
      <div
        style={{
          width: 280,
          height: 500,
          borderRadius: 40,
          border: "4px solid #374151",
          backgroundColor: "#111827",
          overflow: "hidden",
          position: "relative",
          transform: `scale(${spring({ frame, fps, config: { damping: 15 } })})`,
          opacity: phoneOpacity,
        }}
      >
        {/* Phone notch */}
        <div
          style={{
            position: "absolute",
            top: 0,
            left: "50%",
            transform: "translateX(-50%)",
            width: 100,
            height: 30,
            backgroundColor: "#000",
            borderBottomLeftRadius: 16,
            borderBottomRightRadius: 16,
            zIndex: 10,
          }}
        />

        {/* Notification */}
        <div
          style={{
            marginTop: 60,
            margin: "60px 16px 16px",
            padding: 16,
            backgroundColor: "#1f2937",
            borderRadius: 16,
            borderLeft: "4px solid #8b5cf6",
            opacity: notifyOpacity,
          }}
        >
          <div style={{ display: "flex", alignItems: "center", gap: 8, marginBottom: 8 }}>
            <span style={{ fontSize: 24 }}>🔔</span>
            <span style={{ color: "#8b5cf6", fontWeight: 700, fontSize: 14 }}>
              HUMANLOOP
            </span>
          </div>
          <div style={{ color: "white", fontWeight: 600, fontSize: 16, marginBottom: 8 }}>
            New Cleaning Assignment
          </div>
          <div style={{ color: "#9ca3af", fontSize: 14 }}>
            📍 Las Condes #1247<br />
            ⏱️ ETA: 20 min<br />
            🧹 Deep Cleaning
          </div>
          <div
            style={{
              marginTop: 12,
              padding: "8px 16px",
              backgroundColor: "#8b5cf6",
              borderRadius: 8,
              textAlign: "center",
              color: "white",
              fontWeight: 600,
            }}
          >
            ACCEPT
          </div>
        </div>

        {/* More notifications */}
        <div
          style={{
            margin: "16px",
            padding: 12,
            backgroundColor: "#1f2937",
            borderRadius: 12,
            opacity: notifyOpacity,
          }}
        >
          <div style={{ color: "#6b7280", fontSize: 12, marginBottom: 4 }}>
            Team "CleaningTeam_Alpha" notified
          </div>
          <div style={{ color: "#10b981", fontSize: 14, fontWeight: 600 }}>
            ✓ Assignment Accepted
          </div>
        </div>
      </div>

      {/* Status */}
      <div
        style={{
          marginTop: 40,
          color: "#8b5cf6",
          fontSize: 24,
          fontWeight: 700,
          opacity: notifyOpacity,
        }}
      >
        TEAM NOTIFIED
      </div>
    </div>
  );
};
