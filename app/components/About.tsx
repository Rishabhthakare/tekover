'use client';

const values = [
  { icon: '⚡', title: 'Fast Turnaround', desc: 'Most projects delivered in 1–4 weeks, not quarters.' },
  { icon: '🎯', title: 'Outcome-First', desc: 'We tie every deliverable to a business metric, not a methodology.' },
  { icon: '🔒', title: 'Data Security', desc: 'NDA-ready, secure handling, no third-party data sharing.' },
  { icon: '🤝', title: 'Transparent Process', desc: 'Weekly updates, shared repos, no black-box consulting.' },
];

const stack = ['Python', 'SQL', 'Power BI', 'Tableau', 'TensorFlow', 'PyTorch', 'LangChain', 'OpenAI', 'FastAPI', 'Docker', 'GCP', 'AWS'];

export default function About() {
  return (
    <section
      id="about"
      style={{
        padding: 'clamp(5rem, 10vw, 9rem) 2rem',
        background: '#0a0a0f',
        position: 'relative',
        overflow: 'hidden',
      }}
    >
      {/* Accent blob */}
      <div style={{
        position: 'absolute', top: '-100px', right: '-100px',
        width: '500px', height: '500px',
        background: 'radial-gradient(circle, rgba(249,115,22,0.07) 0%, transparent 70%)',
        borderRadius: '50%', filter: 'blur(40px)',
        pointerEvents: 'none',
      }} />

      <div style={{ maxWidth: '1100px', margin: '0 auto', position: 'relative' }}>
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
          gap: '4rem',
          alignItems: 'start',
        }}>
          {/* Left: text */}
          <div>
            <p style={{
              fontSize: '0.8rem', color: '#f97316', fontWeight: 700,
              letterSpacing: '0.12em', textTransform: 'uppercase', marginBottom: '0.75rem',
            }}>
              Who We Are
            </p>
            <h2 style={{
              fontSize: 'clamp(1.9rem, 4.5vw, 3rem)',
              fontWeight: 900,
              color: '#f0f0f5',
              letterSpacing: '-0.02em',
              lineHeight: 1.1,
              marginBottom: '1.5rem',
            }}>
              A lean studio obsessed with{' '}
              <span style={{
                background: 'linear-gradient(135deg, #f97316, #ec4899)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                backgroundClip: 'text',
              }}>
                data craft
              </span>
            </h2>

            <p style={{
              color: 'rgba(240,240,245,0.6)',
              fontSize: '1rem',
              lineHeight: 1.75,
              marginBottom: '1.25rem',
            }}>
              Tekover is a freelance data and AI studio based in Pune, India. We partner with early-stage startups, growth companies, and enterprise teams who need serious data work done — without the overhead of a large agency.
            </p>
            <p style={{
              color: 'rgba(240,240,245,0.6)',
              fontSize: '1rem',
              lineHeight: 1.75,
              marginBottom: '2rem',
            }}>
              Our team brings together backgrounds in analytics engineering, applied machine learning, and production AI systems. We&apos;ve built pipelines that process millions of rows, models that run in production, and Gen AI tools that people actually use.
            </p>

            <a
              href="#contact"
              style={{
                display: 'inline-flex', alignItems: 'center', gap: '8px',
                color: '#f97316',
                textDecoration: 'none',
                fontWeight: 700,
                fontSize: '0.95rem',
                borderBottom: '1px solid rgba(249,115,22,0.4)',
                paddingBottom: '2px',
                transition: 'gap 0.2s ease',
              }}
              onMouseEnter={e => e.currentTarget.style.gap = '14px'}
              onMouseLeave={e => e.currentTarget.style.gap = '8px'}
            >
              Start a project with us →
            </a>

            {/* Tech stack pills */}
            <div style={{ marginTop: '2.5rem' }}>
              <p style={{ fontSize: '0.75rem', color: 'rgba(240,240,245,0.35)', fontWeight: 600, letterSpacing: '0.08em', textTransform: 'uppercase', marginBottom: '0.75rem' }}>
                Tech Stack
              </p>
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px' }}>
                {stack.map(t => (
                  <span key={t} style={{
                    background: 'rgba(249,115,22,0.08)',
                    border: '1px solid rgba(249,115,22,0.2)',
                    borderRadius: '100px',
                    padding: '4px 12px',
                    fontSize: '0.78rem',
                    color: 'rgba(249,115,22,0.9)',
                    fontWeight: 500,
                  }}>{t}</span>
                ))}
              </div>
            </div>
          </div>

          {/* Right: values grid */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>
            {values.map(v => (
              <div key={v.title} style={{
                display: 'flex', gap: '1rem', alignItems: 'flex-start',
                background: 'rgba(255,255,255,0.03)',
                border: '1px solid rgba(255,255,255,0.07)',
                borderRadius: '12px',
                padding: '1.25rem 1.5rem',
                transition: 'border-color 0.2s ease',
              }}
                onMouseEnter={e => (e.currentTarget.style.borderColor = 'rgba(249,115,22,0.25)')}
                onMouseLeave={e => (e.currentTarget.style.borderColor = 'rgba(255,255,255,0.07)')}
              >
                <span style={{ fontSize: '1.4rem', lineHeight: 1 }}>{v.icon}</span>
                <div>
                  <h4 style={{ color: '#f0f0f5', fontWeight: 700, fontSize: '1rem', marginBottom: '4px' }}>{v.title}</h4>
                  <p style={{ color: 'rgba(240,240,245,0.5)', fontSize: '0.88rem', lineHeight: 1.55 }}>{v.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
