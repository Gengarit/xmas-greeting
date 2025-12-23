import CircularGallery from './components/CircularGallery';
import Typewriter from './components/Typewriter';

function App() {
  const items = [
    { image: '/xmas_pic1.jpg', text: 'Airport' },
    { image: '/xmas_pic2.jpg', text: 'Acienda' },
    { image: '/xmas_pic3.jpg', text: 'Tagaytay' },
    { image: '/xmas_pic4.jpg', text: 'Taal Volcano' },
    { image: '/xmas_pic5.jpg', text: 'SM' },
    { image: '/xmas_pic6.jpg', text: 'Ayala' },
  ];

  return (
    <div style={{ 
      height: '100vh', 
      display: 'flex', 
      flexDirection: 'column',
      backgroundColor: '#000'
    }}>
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
          fontSize: 'clamp(1.3rem, 5vw, 4rem)', 
          fontWeight: 'bold',
          marginBottom: '1rem',
          background: 'linear-gradient(135deg, #ff6b6b, #ffd93d, #6bcf63, #4ecdc4, #ff6b6b)',
          backgroundSize: '300% 300%',
          WebkitBackgroundClip: 'text',
          WebkitTextFillColor: 'transparent',
          animation: 'gradient 3s ease infinite',
          lineHeight: 1.3,
          padding: '0 1rem',
          maxWidth: '90vw'
        }}>
          <Typewriter 
            text="Merry Christmas, Tito Rom2!" 
            speed={80}
            delay={500}
          />
        </h1>
        <p style={{ 
          fontSize: 'clamp(0.75rem, 2.5vw, 1.25rem)', 
          opacity: 0.8,
          fontWeight: '300',
          padding: '0 1.5rem',
          marginTop: '0.5rem',
          maxWidth: '90vw'
        }}>
          Wishing you joy, peace, and happiness this holiday season
        </p>
      </div>

      {/* Gallery at the bottom */}
      <div style={{ 
        height: 'clamp(250px, 50vh, 400px)', 
        position: 'relative',
        minHeight: '250px'
      }}>
        <CircularGallery 
          items={items}
          bend={0} 
          textColor="#ffffff" 
          borderRadius={0.05} 
          scrollEase={0.02}
        />
      </div>
    </div>
  );
}

export default App;
