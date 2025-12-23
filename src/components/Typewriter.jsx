import { useState, useEffect } from 'react';

const Typewriter = ({ 
  text, 
  speed = 100, 
  delay = 0,
  className = '',
  style = {},
  onComplete = () => {}
}) => {
  const [displayedText, setDisplayedText] = useState('');
  const [currentIndex, setCurrentIndex] = useState(0);
  const [started, setStarted] = useState(false);

  useEffect(() => {
    const startTimer = setTimeout(() => {
      setStarted(true);
    }, delay);

    return () => clearTimeout(startTimer);
  }, [delay]);

  useEffect(() => {
    if (!started) return;

    if (currentIndex < text.length) {
      const timer = setTimeout(() => {
        setDisplayedText(prev => prev + text[currentIndex]);
        setCurrentIndex(prev => prev + 1);
      }, speed);

      return () => clearTimeout(timer);
    } else {
      onComplete();
    }
  }, [currentIndex, text, speed, started, onComplete]);

  return (
    <span className={className} style={style}>
      {displayedText}
      <span 
        style={{ 
          opacity: currentIndex < text.length ? 1 : 0,
          animation: 'blink 1s step-end infinite',
          marginLeft: '2px'
        }}
      >
        |
      </span>
    </span>
  );
};

export default Typewriter;
