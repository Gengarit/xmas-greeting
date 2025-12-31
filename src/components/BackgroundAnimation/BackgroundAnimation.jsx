import { useEffect, useRef } from 'react';
import './BackgroundAnimation.css';

export default function BackgroundAnimation() {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');
    let animationId;
    let particles = [];

    function resize() {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    }

    function createParticles(count = 80) {
      particles = [];
      const colors = ['#FF6B6B', '#FFD93D', '#6BCF63', '#4ECDC4', '#8A79FF', '#FF9F1C'];
      for (let i = 0; i < count; i++) {
        particles.push({
          x: Math.random() * canvas.width,
          y: Math.random() * canvas.height - canvas.height,
          w: 6 + Math.random() * 12,
          h: 6 + Math.random() * 18,
          vx: -0.5 + Math.random() * 1,
          vy: 1 + Math.random() * 3,
          r: Math.random() * Math.PI * 2,
          vr: -0.02 + Math.random() * 0.04,
          color: colors[Math.floor(Math.random() * colors.length)],
          opacity: 0.8 * Math.random() + 0.2
        });
      }
    }

    function drawGradient() {
      const g = ctx.createLinearGradient(0, 0, canvas.width, canvas.height);
      g.addColorStop(0, '#0f0c29');
      g.addColorStop(0.25, '#302b63');
      g.addColorStop(0.5, '#24243e');
      g.addColorStop(0.75, '#0f0c29');
      ctx.fillStyle = g;
      ctx.fillRect(0, 0, canvas.width, canvas.height);
    }

    function render() {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      drawGradient();

      for (let p of particles) {
        ctx.save();
        ctx.globalAlpha = p.opacity;
        ctx.translate(p.x, p.y);
        ctx.rotate(p.r);
        ctx.fillStyle = p.color;
        ctx.fillRect(-p.w / 2, -p.h / 2, p.w, p.h);
        ctx.restore();

        p.x += p.vx;
        p.y += p.vy;
        p.r += p.vr;

        if (p.y - p.h > canvas.height || p.x < -50 || p.x > canvas.width + 50) {
          p.x = Math.random() * canvas.width;
          p.y = -20 - Math.random() * 200;
        }
      }

      animationId = requestAnimationFrame(render);
    }

    resize();
    createParticles(100);
    window.addEventListener('resize', resize);
    animationId = requestAnimationFrame(render);

    return () => {
      window.removeEventListener('resize', resize);
      cancelAnimationFrame(animationId);
    };
  }, []);

  return (
    <div className="bg-anim-wrapper" aria-hidden>
      <canvas ref={canvasRef} className="bg-anim-canvas" />
    </div>
  );
}
