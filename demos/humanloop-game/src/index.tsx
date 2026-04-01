import { Player } from '@remotion/player';
import { HumanloopGameScene } from './HumanloopGame';

export default function Index() {
  return (
    <div style={{
      width: '100vw',
      height: '100vh',
      backgroundColor: '#0a0a0f',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      fontFamily: 'sans-serif',
    }}>
      {/* Header */}
      <div style={{
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
        padding: '20px 40px',
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        borderBottom: '1px solid #2d2d3f',
      }}>
        <div style={{
          fontSize: 20,
          color: '#ffffff',
          fontWeight: 700,
        }}>
          🎮 Humanloop Interactive Demo
        </div>
        <div style={{
          fontSize: 14,
          color: '#94a3b8',
        }}>
          humanloop.cl
        </div>
      </div>
      
      {/* Player */}
      <Player
        component={HumanloopGameScene}
        durationInFrames={150}
        fps={30}
        compositionWidth={1920}
        compositionHeight={1080}
        style={{
          width: '80%',
          height: '80%',
          borderRadius: 12,
          overflow: 'hidden',
          boxShadow: '0 0 60px rgba(99, 102, 241, 0.3)',
        }}
        controls={true}
        loop={true}
        showPoster={true}
      />
      
      {/* Instructions */}
      <div style={{
        position: 'absolute',
        bottom: 30,
        textAlign: 'center',
      }}>
        <div style={{
          fontSize: 14,
          color: '#94a3b8',
          marginBottom: 8,
        }}>
          ▶️ Click play to start the demo
        </div>
        <div style={{
          fontSize: 12,
          color: '#6366f1',
        }}>
          This animation shows how Humanloop connects real-world tasks with AI intelligence
        </div>
      </div>
    </div>
  );
}
