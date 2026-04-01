import { AbsoluteFill, Sequence, useCurrentFrame, interpolate, spring, useTransform } from 'remotion';
import { remotionFlex } from '@remotion/flex';

// Color palette
const COLORS = {
  darkBg: '#0a0a0f',
  primary: '#6366f1',    // Indigo
  secondary: '#22d3ee',  // Cyan
  accent: '#f472b6',     // Pink
  warning: '#fbbf24',    // Amber
  success: '#4ade80',    // Green
  text: '#ffffff',
  textMuted: '#94a3b8',
  cardBg: '#1e1e2e',
  border: '#2d2d3f',
};

// Character component - simple stick figure style
const Character: React.FC<{ x: number; y: number; scale?: number }> = ({ x, y, scale = 1 }) => {
  return (
    <div style={{
      position: 'absolute',
      left: x,
      top: y,
      transform: `scale(${scale})`,
    }}>
      {/* Head */}
      <div style={{
        width: 40,
        height: 40,
        borderRadius: '50%',
        backgroundColor: COLORS.text,
        position: 'absolute',
        top: 0,
        left: 20,
      }} />
      {/* Body */}
      <div style={{
        width: 8,
        height: 60,
        backgroundColor: COLORS.text,
        position: 'absolute',
        top: 40,
        left: 36,
        borderRadius: 4,
      }} />
      {/* Arms */}
      <div style={{
        width: 50,
        height: 8,
        backgroundColor: COLORS.text,
        position: 'absolute',
        top: 50,
        left: 15,
        borderRadius: 4,
      }} />
      {/* Legs */}
      <div style={{
        width: 8,
        height: 50,
        backgroundColor: COLORS.text,
        position: 'absolute',
        top: 95,
        left: 30,
        borderRadius: 4,
        transform: 'rotate(-15deg)',
      }} />
      <div style={{
        width: 8,
        height: 50,
        backgroundColor: COLORS.text,
        position: 'absolute',
        top: 95,
        left: 45,
        borderRadius: 4,
        transform: 'rotate(15deg)',
      }} />
    </div>
  );
};

// Camera component
const Camera: React.FC<{ x: number; y: number; installed?: boolean }> = ({ x, y, installed = false }) => {
  return (
    <div style={{
      position: 'absolute',
      left: x,
      top: y,
    }}>
      {/* Mount base */}
      <div style={{
        width: 30,
        height: 10,
        backgroundColor: installed ? COLORS.success : COLORS.textMuted,
        borderRadius: 2,
      }} />
      {/* Camera body */}
      <div style={{
        width: 40,
        height: 25,
        backgroundColor: installed ? COLORS.success : COLORS.textMuted,
        borderRadius: 4,
        marginTop: 2,
        position: 'relative',
      }}>
        {/* Lens */}
        <div style={{
          width: 12,
          height: 12,
          borderRadius: '50%',
          backgroundColor: installed ? COLORS.warning : '#555',
          position: 'absolute',
          right: 4,
          top: 6,
          boxShadow: installed ? `0 0 10px ${COLORS.warning}` : 'none',
        }} />
      </div>
    </div>
  );
};

// Message bubble component
const MessageBubble: React.FC<{ text: string; x: number; y: number; color?: string; delay?: number }> = ({
  text, x, y, color = COLORS.secondary, delay = 0
}) => {
  const frame = useCurrentFrame();
  const opacity = interpolate(frame, [delay, delay + 10], [0, 1], { extrapolateLeft: 'clamp', extrapolateRight: 'clamp' });
  const scale = interpolate(frame, [delay, delay + 10], [0.8, 1], { extrapolateLeft: 'clamp', extrapolateRight: 'clamp' });
  
  return (
    <div style={{
      position: 'absolute',
      left: x,
      top: y,
      opacity,
      transform: `scale(${scale})`,
    }}>
      <div style={{
        backgroundColor: color,
        padding: '8px 14px',
        borderRadius: 12,
        fontSize: 12,
        fontFamily: 'sans-serif',
        color: COLORS.darkBg,
        fontWeight: 600,
        maxWidth: 180,
        boxShadow: `0 4px 12px ${color}40`,
      }}>
        {text}
      </div>
    </div>
  );
};

// AI Icon component
const AIIcon: React.FC<{ x: number; y: number; size?: number; pulse?: boolean }> = ({ x, y, size = 80, pulse = false }) => {
  const frame = useCurrentFrame();
  const scale = pulse ? interpolate(frame % 60, [0, 30, 60], [1, 1.05, 1], { extrapolateLeft: 'clamp', extrapolateRight: 'clamp' }) : 1;
  
  return (
    <div style={{
      position: 'absolute',
      left: x,
      top: y,
      transform: `scale(${scale})`,
    }}>
      <div style={{
        width: size,
        height: size,
        borderRadius: '50%',
        background: `linear-gradient(135deg, ${COLORS.primary}, ${COLORS.secondary})`,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        boxShadow: `0 0 30px ${COLORS.primary}60`,
      }}>
        {/* Brain/AI symbol */}
        <svg width={size * 0.5} height={size * 0.5} viewBox="0 0 24 24" fill="none">
          <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8z" fill="white"/>
          <circle cx="12" cy="12" r="3" fill="white"/>
          <path d="M12 6v2M12 16v2M6 12h2M16 12h2" stroke="white" strokeWidth="2" strokeLinecap="round"/>
        </svg>
      </div>
    </div>
  );
};

// Scene indicator
const SceneLabel: React.FC<{ text: string; color?: string }> = ({ text, color = COLORS.primary }) => {
  const frame = useCurrentFrame();
  const opacity = interpolate(frame, [0, 15, 70, 85], [0, 1, 1, 0], { extrapolateLeft: 'clamp', extrapolateRight: 'clamp' });
  
  return (
    <div style={{
      position: 'absolute',
      top: 30,
      left: 0,
      right: 0,
      display: 'flex',
      justifyContent: 'center',
      opacity,
    }}>
      <div style={{
        backgroundColor: color + '30',
        border: `2px solid ${color}`,
        borderRadius: 20,
        padding: '8px 24px',
        fontSize: 14,
        fontFamily: 'sans-serif',
        color: color,
        fontWeight: 700,
        textTransform: 'uppercase',
        letterSpacing: 2,
      }}>
        {text}
      </div>
    </div>
  );
};

// Progress bar
const ProgressBar: React.FC<{ progress: number }> = ({ progress }) => {
  return (
    <div style={{
      position: 'absolute',
      bottom: 30,
      left: 50,
      transform: 'translateX(-50%)',
      width: 300,
      height: 6,
      backgroundColor: COLORS.border,
      borderRadius: 3,
      overflow: 'hidden',
    }}>
      <div style={{
        width: `${progress * 100}%`,
        height: '100%',
        background: `linear-gradient(90deg, ${COLORS.primary}, ${COLORS.secondary})`,
        borderRadius: 3,
        transition: 'width 0.3s ease',
      }} />
    </div>
  );
};

// MAIN COMPONENT
export const HumanloopGameScene: React.FC = () => {
  const frame = useCurrentFrame();
  
  // Timeline:
  // 0-30: Scene 1 - Character discovers problem
  // 30-60: Scene 2 - Character installs camera
  // 60-90: Scene 3 - AI receives signal
  // 90-120: Scene 4 - AI analyzes and responds
  // 120-150: Scene 5 - Humanloop concept explained
  
  const scene = frame < 30 ? 1 : frame < 60 ? 2 : frame < 90 ? 3 : frame < 120 ? 4 : 5;
  const progress = Math.min(frame / 150, 1);
  
  return (
    <AbsoluteFill style={{ backgroundColor: COLORS.darkBg }}>
      
      {/* Background grid effect */}
      <div style={{
        position: 'absolute',
        inset: 0,
        backgroundImage: `
          linear-gradient(${COLORS.border}20 1px, transparent 1px),
          linear-gradient(90deg, ${COLORS.border}20 1px, transparent 1px)
        `,
        backgroundSize: '40px 40px',
      }} />
      
      {/* Header */}
      <div style={{
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
        padding: '15px 30px',
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        borderBottom: `1px solid ${COLORS.border}`,
        backgroundColor: COLORS.darkBg + 'e0',
      }}>
        <div style={{
          fontSize: 18,
          fontFamily: 'sans-serif',
          color: COLORS.text,
          fontWeight: 700,
        }}>
          🎮 Humanloop Game Demo
        </div>
        <div style={{
          fontSize: 12,
          fontFamily: 'sans-serif',
          color: COLORS.textMuted,
        }}>
          AI + Human Collaboration
        </div>
      </div>
      
      {/* Main content area */}
      <div style={{
        position: 'absolute',
        top: 80,
        left: 0,
        right: 0,
        bottom: 80,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
      }}>
        
        {/* LEFT SIDE - Real World */}
        <div style={{
          width: '45%',
          height: '100%',
          position: 'relative',
          borderRight: `2px solid ${COLORS.border}`,
          paddingRight: 20,
        }}>
          {/* Real World Label */}
          <div style={{
            position: 'absolute',
            top: 10,
            left: 20,
            fontSize: 11,
            fontFamily: 'sans-serif',
            color: COLORS.textMuted,
            textTransform: 'uppercase',
            letterSpacing: 2,
          }}>
            🌍 REAL WORLD
          </div>
          
          {/* House/Building */}
          <div style={{
            position: 'absolute',
            bottom: 100,
            left: 50,
            width: 200,
            height: 150,
            backgroundColor: COLORS.cardBg,
            borderRadius: 8,
            border: `2px solid ${COLORS.border}`,
          }}>
            {/* Window */}
            <div style={{
              position: 'absolute',
              top: 20,
              left: 20,
              width: 60,
              height: 40,
              backgroundColor: COLORS.warning + '40',
              borderRadius: 4,
              border: `2px solid ${COLORS.warning}`,
            }} />
            {/* Door */}
            <div style={{
              position: 'absolute',
              bottom: 0,
              right: 30,
              width: 40,
              height: 60,
              backgroundColor: COLORS.primary + '60',
              borderRadius: '4px 4px 0 0',
            }} />
          </div>
          
          {/* Character - appears in scenes 1-2 */}
          {scene >= 1 && scene <= 2 && (
            <Character x={280} y={250} scale={1.2} />
          )}
          
          {/* Camera - appears after installation */}
          {scene >= 2 && (
            <Camera x={180} y={150} installed={scene >= 2} />
          )}
          
          {/* Signal waves when camera installed */}
          {scene >= 2 && (
            <div style={{
              position: 'absolute',
              left: 200,
              top: 160,
            }}>
              {[0, 1, 2].map(i => (
                <div key={i} style={{
                  position: 'absolute',
                  width: 20 + i * 15,
                  height: 20 + i * 15,
                  borderRadius: '50%',
                  border: `2px solid ${COLORS.secondary}`,
                  opacity: interpolate(frame, [30 + i * 5, 60 + i * 5], [0.8, 0], { extrapolateLeft: 'clamp', extrapolateRight: 'clamp' }),
                  animation: 'ping 1.5s ease-out infinite',
                }} />
              ))}
            </div>
          )}
          
          {/* Message bubbles */}
          {scene === 1 && (
            <MessageBubble 
              text="⚠️ Motion detected!" 
              x={300} 
              y={200} 
              color={COLORS.warning}
              delay={10}
            />
          )}
          
          {scene === 2 && (
            <>
              <MessageBubble 
                text="📹 Installing camera..." 
                x={50} 
                y={220} 
                color={COLORS.textMuted}
                delay={35}
              />
              <MessageBubble 
                text="✅ Camera connected!" 
                x={50} 
                y={260} 
                color={COLORS.success}
                delay={50}
              />
            </>
          )}
        </div>
        
        {/* CENTER - Connection */}
        <div style={{
          width: '10%',
          height: '100%',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          position: 'relative',
        }}>
          {/* Arrow/Connection indicator */}
          {scene >= 3 && (
            <div style={{
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              gap: 5,
            }}>
              <div style={{
                width: 60,
                height: 4,
                backgroundColor: COLORS.secondary,
                borderRadius: 2,
                opacity: interpolate(frame, [60, 75], [0, 1], { extrapolateLeft: 'clamp', extrapolateRight: 'clamp' }),
              }} />
              <div style={{
                fontSize: 20,
              }}>
                📡
              </div>
              <div style={{
                width: 60,
                height: 4,
                backgroundColor: COLORS.secondary,
                borderRadius: 2,
                opacity: interpolate(frame, [60, 75], [0, 1], { extrapolateLeft: 'clamp', extrapolateRight: 'clamp' }),
              }} />
            </div>
          )}
        </div>
        
        {/* RIGHT SIDE - AI World */}
        <div style={{
          width: '45%',
          height: '100%',
          position: 'relative',
          paddingLeft: 20,
        }}>
          {/* AI World Label */}
          <div style={{
            position: 'absolute',
            top: 10,
            right: 20,
            fontSize: 11,
            fontFamily: 'sans-serif',
            color: COLORS.textMuted,
            textTransform: 'uppercase',
            letterSpacing: 2,
          }}>
            🤖 AI WORLD
          </div>
          
          {/* AI Brain */}
          {scene >= 3 && (
            <AIIcon x={280} y={100} size={100} pulse={scene >= 4} />
          )}
          
          {/* Processing indicators */}
          {scene >= 4 && (
            <div style={{
              position: 'absolute',
              top: 220,
              left: 50,
              right: 50,
            }}>
              {/* Analysis lines */}
              {[0, 1, 2, 3].map(i => (
                <div key={i} style={{
                  height: 4,
                  backgroundColor: COLORS.cardBg,
                  marginBottom: 8,
                  borderRadius: 2,
                  overflow: 'hidden',
                }}>
                  <div style={{
                    height: '100%',
                    width: `${30 + i * 20}%`,
                    backgroundColor: i % 2 === 0 ? COLORS.primary : COLORS.secondary,
                    opacity: interpolate(frame, [90 + i * 5, 110 + i * 5], [0, 1], { extrapolateLeft: 'clamp', extrapolateRight: 'clamp' }),
                    borderRadius: 2,
                  }} />
                </div>
              ))}
            </div>
          )}
          
          {/* AI Response messages */}
          {scene === 4 && (
            <>
              <MessageBubble 
                text="🔍 Analyzing video..." 
                x={50} 
                y={280} 
                color={COLORS.primary}
                delay={95}
              />
              <MessageBubble 
                text="⚡ Action required!" 
                x={200} 
                y={320} 
                color={COLORS.accent}
                delay={110}
              />
            </>
          )}
        </div>
      </div>
      
      {/* Scene Labels */}
      {scene === 1 && <SceneLabel text="Scene 1: The Problem" color={COLORS.warning} />}
      {scene === 2 && <SceneLabel text="Scene 2: Human Action" color={COLORS.secondary} />}
      {scene === 3 && <SceneLabel text="Scene 3: Signal Sent" color={COLORS.primary} />}
      {scene === 4 && <SceneLabel text="Scene 4: AI Processing" color={COLORS.accent} />}
      {scene === 5 && <SceneLabel text="Scene 5: Humanloop Complete" color={COLORS.success} />}
      
      {/* Final explanation */}
      {scene === 5 && (
        <div style={{
          position: 'absolute',
          top: '50%',
          left: '50%',
          transform: 'translate(-50%, -50%)',
          backgroundColor: COLORS.cardBg,
          border: `2px solid ${COLORS.success}`,
          borderRadius: 16,
          padding: '30px 40px',
          maxWidth: 500,
          textAlign: 'center',
          boxShadow: `0 0 40px ${COLORS.success}40`,
        }}>
          <div style={{
            fontSize: 24,
            marginBottom: 15,
          }}>
            🔄 HUMANLOOP
          </div>
          <div style={{
            fontSize: 13,
            fontFamily: 'sans-serif',
            color: COLORS.textMuted,
            lineHeight: 1.6,
            marginBottom: 20,
          }}>
            Humans and AI working together in a continuous loop.<br/>
            The AI doesn't replace humans — it <span style={{ color: COLORS.secondary }}>empowers</span> them.
          </div>
          <div style={{
            display: 'flex',
            gap: 15,
            justifyContent: 'center',
            fontSize: 12,
            fontFamily: 'sans-serif',
          }}>
            <div style={{ color: COLORS.warning }}>👤 Human</div>
            <div style={{ color: COLORS.primary }}>→</div>
            <div style={{ color: COLORS.secondary }}>📹 Data</div>
            <div style={{ color: COLORS.primary }}>→</div>
            <div style={{ color: COLORS.accent }}>🤖 AI</div>
            <div style={{ color: COLORS.primary }}>→</div>
            <div style={{ color: COLORS.success }}>✅ Action</div>
          </div>
        </div>
      )}
      
      {/* Progress bar */}
      <ProgressBar progress={progress} />
      
      {/* Footer */}
      <div style={{
        position: 'absolute',
        bottom: 0,
        left: 0,
        right: 0,
        padding: '10px 30px',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        gap: 20,
        borderTop: `1px solid ${COLORS.border}`,
        backgroundColor: COLORS.darkBg + 'e0',
      }}>
        <div style={{
          fontSize: 11,
          fontFamily: 'sans-serif',
          color: COLORS.textMuted,
        }}>
          humanloop.cl
        </div>
        <div style={{
          width: 4,
          height: 4,
          borderRadius: '50%',
          backgroundColor: COLORS.primary,
        }} />
        <div style={{
          fontSize: 11,
          fontFamily: 'sans-serif',
          color: COLORS.textMuted,
        }}>
          AI Orchestration Platform
        </div>
      </div>
      
    </AbsoluteFill>
  );
};
