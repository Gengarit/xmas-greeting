import { useEffect, useRef, useState } from 'react';
import './ScrambledText.css';

const RANDOM_CHARS = '!<>-_\/[]{}—=+*^?#0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz';

export default function ScrambledText({ text = '', speed = 40, revealDelay = 800, className = '', style = {} }) {
  const [display, setDisplay] = useState('');
  const rafRef = useRef(null);
  const startRef = useRef(0);

  useEffect(() => {
    const chars = RANDOM_CHARS;
    const length = text.length;
    const startTime = performance.now();
    startRef.current = startTime;

    function update() {
      const now = performance.now();
      const elapsed = now - startRef.current;
      // compute how many chars should be revealed based on elapsed
      const revealCount = Math.max(0, Math.floor((elapsed - revealDelay) / speed));
      let out = '';
      for (let i = 0; i < length; i++) {
        if (i < revealCount) out += text[i];
        else out += chars[Math.floor(Math.random() * chars.length)];
      }
      setDisplay(out);
      if (revealCount < length) rafRef.current = requestAnimationFrame(update);
      else setDisplay(text);
    }

    rafRef.current = requestAnimationFrame(update);

    return () => {
      if (rafRef.current) cancelAnimationFrame(rafRef.current);
    };
  }, [text, speed, revealDelay]);

  return (
    <span className={`scrambled-text ${className}`} style={style} aria-label={text}>
      {display}
      <span className="scrambled-cursor">|</span>
    </span>
  );
}
