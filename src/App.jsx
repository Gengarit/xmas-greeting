import BackgroundAnimation from './components/BackgroundAnimation/BackgroundAnimation';
import ScrambledText from './components/ScrambledText/ScrambledText';
import Typewriter from './components/Typewriter';

function App() {
  // images reset — gallery removed

  // update document title at runtime
  if (typeof document !== 'undefined') {
    document.title = 'Happy New Year! 🎉';
  }

  return (
    <div style={{
      height: '100vh',
      display: 'flex',
      flexDirection: 'column'
    }}>
      <BackgroundAnimation />
      {/* Merry Christmas Greeting */}
      <div style={{ 
        flex: 1, 
        display: 'flex', 
        flexDirection: 'column',
        alignItems: 'center', 
        justifyContent: 'center',
        color: '#ffffff',
        textAlign: 'center',
        padding: '1rem',
        minHeight: '200px'
      }}>
        <h1 style={{
          fontSize: 'clamp(1.3rem, 7vw, 5rem)',
          fontWeight: '800',
          marginBottom: '1rem',
          background: 'linear-gradient(90deg, #ffd93d, #ff6b6b, #6bcf63)',
          backgroundSize: '200% 200%',
          WebkitBackgroundClip: 'text',
          WebkitTextFillColor: 'transparent',
          animation: 'gradient 4s ease infinite',
          lineHeight: 1.05,
          padding: '0 1rem',
          maxWidth: '95vw'
        }}>
          <ScrambledText text="Happy new year everyone" speed={45} revealDelay={600} />
        </h1>
        <p style={{
          fontSize: 'clamp(0.75rem, 2.5vw, 1.25rem)',
          opacity: 0.9,
          fontWeight: '400',
          padding: '0 1.5rem',
          marginTop: '0.5rem',
          maxWidth: '90vw'
        }}>
          Wishing you a bright and joyful year ahead
        </p>
        <p className="greeting-signature">from john eric bayer</p>
      </div>

      {/* Gallery at the bottom */}
      {/* Circular gallery removed as requested */}
    </div>
  );
}

export default App;
