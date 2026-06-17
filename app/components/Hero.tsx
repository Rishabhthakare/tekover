'use client';
import { useEffect, useRef } from 'react';

export default function Hero() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    const particles: { x: number; y: number; vx: number; vy: number; size: number; color: string; alpha: number }[] = [];
    const colors = ['#f97316', '#ec4899', '#8b5cf6', '#06b6d4', '#3b82f6'];

    for (let i = 0; i < 80; i++) {
      particles.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        vx: (Math.random() - 0.5) * 0.4,
        vy: (Math.random() - 0.5) * 0.4,
        size: Math.random() * 2 + 0.5,
        color: colors[Math.floor(Math.random() * colors.length)],
        alpha: Math.random() * 0.6 + 0.2,
      });
    }

    let animId: number;
    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      particles.forEach(p => {
        p.x += p.vx;
        p.y += p.vy;
        if (p.x < 0 || p.x > canvas.width) p.vx *= -1;
        if (p.y < 0 || p.y > canvas.height) p.vy *= -1;
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
        ctx.fillStyle = p.color;
        ctx.globalAlpha = p.alpha;
        ctx.fill();
      });

      // Draw connecting lines
      ctx.globalAlpha = 1;
      particles.forEach((p, i) => {
        particles.slice(i + 1).forEach(q => {
          const dist = Math.hypot(p.x - q.x, p.y - q.y);
          if (dist < 120) {
            ctx.beginPath();
            ctx.moveTo(p.x, p.y);
            ctx.lineTo(q.x, q.y);
            ctx.strokeStyle = `rgba(139,92,246,${0.1 * (1 - dist / 120)})`;
            ctx.lineWidth = 0.5;
            ctx.stroke();
          }
        });
      });

      animId = requestAnimationFrame(animate);
    };
    animate();

    const onResize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    window.addEventListener('resize', onResize);

    return () => {
      cancelAnimationFrame(animId);
      window.removeEventListener('resize', onResize);
    };
  }, []);

  return (
    <section
      id="hero"
      style={{
        position: 'relative',
        minHeight: '100vh',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        overflow: 'hidden',
        background: 'radial-gradient(ellipse at 20% 50%, rgba(139,92,246,0.12) 0%, transparent 60%), radial-gradient(ellipse at 80% 20%, rgba(249,115,22,0.1) 0%, transparent 60%), #0a0a0f',
      }}
    >
      <canvas
        ref={canvasRef}
        style={{ position: 'absolute', inset: 0, zIndex: 0 }}
      />

      {/* Glowing orbs */}
      <div style={{
        position: 'absolute', top: '15%', left: '10%',
        width: '300px', height: '300px',
        background: 'radial-gradient(circle, rgba(249,115,22,0.15) 0%, transparent 70%)',
        borderRadius: '50%', filter: 'blur(40px)',
        animation: 'pulse-glow 4s ease-in-out infinite',
      }} />
      <div style={{
        position: 'absolute', bottom: '20%', right: '8%',
        width: '400px', height: '400px',
        background: 'radial-gradient(circle, rgba(139,92,246,0.15) 0%, transparent 70%)',
        borderRadius: '50%', filter: 'blur(50px)',
        animation: 'pulse-glow 5s ease-in-out infinite 1s',
      }} />

      {/* Content */}
      <div style={{
        position: 'relative', zIndex: 2,
        textAlign: 'center',
        padding: '2rem',
        maxWidth: '900px',
      }}>
        {/* Badge */}
        <div style={{
          display: 'inline-flex', alignItems: 'center', gap: '8px',
          background: 'rgba(249,115,22,0.1)',
          border: '1px solid rgba(249,115,22,0.3)',
          borderRadius: '100px',
          padding: '6px 16px',
          marginBottom: '2rem',
          fontSize: '0.82rem',
          color: '#f97316',
          fontWeight: 600,
          letterSpacing: '0.06em',
          textTransform: 'uppercase',
        }}>
          <span style={{ width: '6px', height: '6px', borderRadius: '50%', background: '#f97316', animation: 'pulse-glow 2s infinite' }} />
          Freelance Data & AI Studio
        </div>

        <h1 style={{
          fontSize: 'clamp(2.8rem, 7vw, 5.5rem)',
          fontWeight: 900,
          lineHeight: 1.05,
          letterSpacing: '-0.03em',
          marginBottom: '1.5rem',
          color: '#f0f0f5',
        }}>
          Turn Your Data Into{' '}
          <span style={{
            background: 'linear-gradient(135deg, #f97316, #ec4899, #8b5cf6)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
            backgroundClip: 'text',
          }}>
            Decisions
          </span>
        </h1>

        <p style={{
          fontSize: 'clamp(1rem, 2.2vw, 1.25rem)',
          color: 'rgba(240,240,245,0.65)',
          maxWidth: '620px',
          margin: '0 auto 2.5rem',
          lineHeight: 1.7,
          fontWeight: 400,
        }}>
          Tekover builds data pipelines, ML models, dashboards, and Gen AI solutions for startups and enterprises — fast, rigorous, and results-driven.
        </p>

        <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap' }}>
          <a
            href="#services"
            style={{
              background: 'linear-gradient(135deg, #f97316, #ec4899)',
              color: '#fff',
              padding: '0.9rem 2rem',
              borderRadius: '10px',
              textDecoration: 'none',
              fontWeight: 700,
              fontSize: '1rem',
              transition: 'transform 0.2s ease, box-shadow 0.2s ease',
              boxShadow: '0 4px 30px rgba(249,115,22,0.35)',
            }}
            onMouseEnter={e => {
              e.currentTarget.style.transform = 'translateY(-2px)';
              e.currentTarget.style.boxShadow = '0 8px 40px rgba(249,115,22,0.5)';
            }}
            onMouseLeave={e => {
              e.currentTarget.style.transform = 'translateY(0)';
              e.currentTarget.style.boxShadow = '0 4px 30px rgba(249,115,22,0.35)';
            }}
          >
            Explore Services
          </a>
          <a
            href="#contact"
            style={{
              background: 'rgba(240,240,245,0.06)',
              border: '1px solid rgba(240,240,245,0.15)',
              color: '#f0f0f5',
              padding: '0.9rem 2rem',
              borderRadius: '10px',
              textDecoration: 'none',
              fontWeight: 600,
              fontSize: '1rem',
              transition: 'background 0.2s ease, border-color 0.2s ease',
              backdropFilter: 'blur(10px)',
            }}
            onMouseEnter={e => {
              e.currentTarget.style.background = 'rgba(240,240,245,0.12)';
              e.currentTarget.style.borderColor = 'rgba(249,115,22,0.4)';
            }}
            onMouseLeave={e => {
              e.currentTarget.style.background = 'rgba(240,240,245,0.06)';
              e.currentTarget.style.borderColor = 'rgba(240,240,245,0.15)';
            }}
          >
            Talk to Us →
          </a>
        </div>

        {/* Stats Row */}
        <div style={{
          display: 'flex', justifyContent: 'center', gap: 'clamp(1.5rem, 5vw, 4rem)',
          marginTop: '4rem',
          flexWrap: 'wrap',
        }}>
          {[
            { val: '50+', label: 'Projects Delivered' },
            { val: '4', label: 'Service Pillars' },
            { val: '100%', label: 'Client Satisfaction' },
          ].map(({ val, label }) => (
            <div key={label} style={{ textAlign: 'center' }}>
              <div style={{
                fontSize: 'clamp(1.8rem, 4vw, 2.5rem)',
                fontWeight: 800,
                background: 'linear-gradient(135deg, #f97316, #ec4899)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                backgroundClip: 'text',
              }}>{val}</div>
              <div style={{ fontSize: '0.8rem', color: 'rgba(240,240,245,0.45)', fontWeight: 500, marginTop: '4px', letterSpacing: '0.04em' }}>{label}</div>
            </div>
          ))}
        </div>
      </div>

      {/* Scroll indicator */}
      <div style={{
        position: 'absolute', bottom: '2rem', left: '50%',
        transform: 'translateX(-50%)',
        display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '8px',
        animation: 'float 3s ease-in-out infinite',
      }}>
        <span style={{ fontSize: '0.7rem', color: 'rgba(240,240,245,0.35)', letterSpacing: '0.1em', textTransform: 'uppercase' }}>Scroll</span>
        <div style={{
          width: '1px', height: '40px',
          background: 'linear-gradient(to bottom, rgba(249,115,22,0.6), transparent)',
        }} />
      </div>
    </section>
  );
}
