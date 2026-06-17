'use client';
import { useState } from 'react';

const services = [
  {
    icon: '📊',
    title: 'Data Analytics',
    subtitle: 'Clarity from complexity',
    description: 'We transform raw, messy data into clean dashboards and reports that answer the questions your business actually needs. From KPI tracking to cohort analysis, we build the visibility layer your team will use every day.',
    tags: ['Power BI', 'Tableau', 'Python', 'SQL', 'Excel'],
    accent: 'linear-gradient(135deg, #f97316, #fb923c)',
    glow: 'rgba(249,115,22,0.25)',
  },
  {
    icon: '🤖',
    title: 'Machine Learning',
    subtitle: 'Models that move the needle',
    description: 'Predictive models, fraud detection, customer churn, recommendation engines — we scope, build, and deploy ML solutions that are production-ready, not just notebook demos.',
    tags: ['Scikit-learn', 'XGBoost', 'TensorFlow', 'FastAPI', 'MLflow'],
    accent: 'linear-gradient(135deg, #ec4899, #a855f7)',
    glow: 'rgba(236,72,153,0.25)',
  },
  {
    icon: '🧠',
    title: 'Gen AI Solutions',
    subtitle: 'LLMs built for real workflows',
    description: 'RAG pipelines, custom chatbots, document intelligence, AI copilots for internal tools — we build Gen AI products grounded in your data, not hallucinations.',
    tags: ['OpenAI', 'LangChain', 'Pinecone', 'RAG', 'Fine-tuning'],
    accent: 'linear-gradient(135deg, #8b5cf6, #06b6d4)',
    glow: 'rgba(139,92,246,0.25)',
  },
  {
    icon: '🔬',
    title: 'Data Science',
    subtitle: 'Research-grade, business-ready',
    description: 'EDA, statistical modelling, A/B testing, and experiment design. We work with your data scientists or act as the whole team — from hypothesis to stakeholder presentation.',
    tags: ['Pandas', 'NumPy', 'Statsmodels', 'R', 'Jupyter'],
    accent: 'linear-gradient(135deg, #06b6d4, #3b82f6)',
    glow: 'rgba(6,182,212,0.25)',
  },
];

export default function Services() {
  const [hovered, setHovered] = useState<number | null>(null);

  return (
    <section
      id="services"
      style={{
        padding: 'clamp(5rem, 10vw, 9rem) 2rem',
        background: 'linear-gradient(180deg, #0a0a0f 0%, #0e0e1a 50%, #0a0a0f 100%)',
        position: 'relative',
      }}
    >
      {/* Background grid */}
      <div style={{
        position: 'absolute', inset: 0,
        backgroundImage: 'linear-gradient(rgba(139,92,246,0.04) 1px, transparent 1px), linear-gradient(90deg, rgba(139,92,246,0.04) 1px, transparent 1px)',
        backgroundSize: '60px 60px',
        pointerEvents: 'none',
      }} />

      <div style={{ maxWidth: '1100px', margin: '0 auto', position: 'relative' }}>
        {/* Section header */}
        <div style={{ textAlign: 'center', marginBottom: '4rem' }}>
          <p style={{
            fontSize: '0.8rem',
            color: '#f97316',
            fontWeight: 700,
            letterSpacing: '0.12em',
            textTransform: 'uppercase',
            marginBottom: '0.75rem',
          }}>
            What We Build
          </p>
          <h2 style={{
            fontSize: 'clamp(2rem, 5vw, 3.2rem)',
            fontWeight: 900,
            letterSpacing: '-0.02em',
            color: '#f0f0f5',
            lineHeight: 1.1,
          }}>
            Our Service{' '}
            <span style={{
              background: 'linear-gradient(135deg, #f97316, #ec4899, #8b5cf6)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              backgroundClip: 'text',
            }}>Pillars</span>
          </h2>
          <p style={{
            marginTop: '1rem',
            color: 'rgba(240,240,245,0.5)',
            fontSize: '1.05rem',
            maxWidth: '520px',
            margin: '1rem auto 0',
            lineHeight: 1.6,
          }}>
            End-to-end delivery across the data and AI stack — strategy, build, and handoff.
          </p>
        </div>

        {/* Service cards */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
          gap: '1.5rem',
        }}>
          {services.map((svc, i) => (
            <div
              key={svc.title}
              onMouseEnter={() => setHovered(i)}
              onMouseLeave={() => setHovered(null)}
              style={{
                position: 'relative',
                background: hovered === i
                  ? 'rgba(20,20,30,0.95)'
                  : 'rgba(15,15,22,0.8)',
                border: `1px solid ${hovered === i ? 'rgba(249,115,22,0.3)' : 'rgba(255,255,255,0.07)'}`,
                borderRadius: '16px',
                padding: '2rem',
                cursor: 'default',
                transition: 'all 0.3s ease',
                transform: hovered === i ? 'translateY(-4px)' : 'none',
                boxShadow: hovered === i ? `0 20px 60px ${svc.glow}` : 'none',
                backdropFilter: 'blur(10px)',
              }}
            >
              {/* Icon */}
              <div style={{
                width: '52px', height: '52px',
                background: svc.accent,
                borderRadius: '12px',
                display: 'flex', alignItems: 'center', justifyContent: 'center',
                fontSize: '1.5rem',
                marginBottom: '1.25rem',
                boxShadow: `0 4px 20px ${svc.glow}`,
              }}>
                {svc.icon}
              </div>

              <p style={{ fontSize: '0.72rem', color: 'rgba(240,240,245,0.4)', fontWeight: 600, letterSpacing: '0.08em', textTransform: 'uppercase', marginBottom: '4px' }}>
                {svc.subtitle}
              </p>

              <h3 style={{
                fontSize: '1.3rem',
                fontWeight: 800,
                color: '#f0f0f5',
                marginBottom: '0.75rem',
                letterSpacing: '-0.01em',
              }}>
                {svc.title}
              </h3>

              <p style={{
                fontSize: '0.9rem',
                color: 'rgba(240,240,245,0.55)',
                lineHeight: 1.65,
                marginBottom: '1.5rem',
              }}>
                {svc.description}
              </p>

              {/* Tags */}
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '6px' }}>
                {svc.tags.map(tag => (
                  <span key={tag} style={{
                    background: 'rgba(255,255,255,0.05)',
                    border: '1px solid rgba(255,255,255,0.08)',
                    borderRadius: '6px',
                    padding: '3px 10px',
                    fontSize: '0.72rem',
                    color: 'rgba(240,240,245,0.5)',
                    fontWeight: 500,
                  }}>{tag}</span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
