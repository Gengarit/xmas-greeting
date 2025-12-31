import BackgroundAnimation from './components/BackgroundAnimation/BackgroundAnimation';
import Typewriter from './components/Typewriter';

function App() {
  // images reset — gallery removed

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
          <Typewriter
            text="Happy new year everyone"
            speed={70}
            delay={300}
          />
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
      </div>

      {/* Gallery at the bottom */}
      {/* Circular gallery removed as requested */}
    </div>
  );
}

export default App;
