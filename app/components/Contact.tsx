'use client';
import { useState } from 'react';

export default function Contact() {
  const [form, setForm] = useState({ name: '', email: '', service: '', message: '' });
  const [status, setStatus] = useState<'idle' | 'sending' | 'sent'>('idle');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setForm(prev => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e: React.MouseEvent) => {
    e.preventDefault();
    setStatus('sending');
    // Simulate send — replace with real API/email handler
    await new Promise(r => setTimeout(r, 1200));
    setStatus('sent');
  };

  const inputStyle = {
    width: '100%',
    background: 'rgba(255,255,255,0.04)',
    border: '1px solid rgba(255,255,255,0.1)',
    borderRadius: '10px',
    padding: '0.85rem 1.1rem',
    color: '#f0f0f5',
    fontSize: '0.95rem',
    outline: 'none',
    transition: 'border-color 0.2s ease',
    fontFamily: 'inherit',
    boxSizing: 'border-box' as const,
  };

  return (
    <section
      id="contact"
      style={{
        padding: 'clamp(5rem, 10vw, 9rem) 2rem',
        background: 'linear-gradient(180deg, #0a0a0f 0%, #0c0c17 100%)',
        position: 'relative',
        overflow: 'hidden',
      }}
    >
      {/* Glow blob */}
      <div style={{
        position: 'absolute', bottom: '-100px', left: '30%',
        width: '600px', height: '400px',
        background: 'radial-gradient(circle, rgba(139,92,246,0.09) 0%, transparent 70%)',
        filter: 'blur(50px)',
        pointerEvents: 'none',
      }} />

      <div style={{ maxWidth: '760px', margin: '0 auto', position: 'relative' }}>
        {/* Header */}
        <div style={{ textAlign: 'center', marginBottom: '3.5rem' }}>
          <p style={{
            fontSize: '0.8rem', color: '#f97316', fontWeight: 700,
            letterSpacing: '0.12em', textTransform: 'uppercase', marginBottom: '0.75rem',
          }}>
            Get In Touch
          </p>
          <h2 style={{
            fontSize: 'clamp(1.9rem, 4.5vw, 3rem)',
            fontWeight: 900,
            color: '#f0f0f5',
            letterSpacing: '-0.02em',
            lineHeight: 1.1,
            marginBottom: '1rem',
          }}>
            Ready to build something{' '}
            <span style={{
              background: 'linear-gradient(135deg, #f97316, #ec4899)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              backgroundClip: 'text',
            }}>real?</span>
          </h2>
          <p style={{ color: 'rgba(240,240,245,0.5)', fontSize: '1rem', lineHeight: 1.6 }}>
            Tell us what you need and we&apos;ll get back to you within 24 hours.
          </p>
        </div>

        {status === 'sent' ? (
          <div style={{
            textAlign: 'center',
            padding: '3rem',
            background: 'rgba(249,115,22,0.08)',
            border: '1px solid rgba(249,115,22,0.25)',
            borderRadius: '16px',
          }}>
            <div style={{ fontSize: '3rem', marginBottom: '1rem' }}>✅</div>
            <h3 style={{ color: '#f0f0f5', fontSize: '1.4rem', fontWeight: 700, marginBottom: '0.5rem' }}>
              Message received!
            </h3>
            <p style={{ color: 'rgba(240,240,245,0.55)', fontSize: '0.95rem' }}>
              We&apos;ll review your project and get back to you within 24 hours.
            </p>
          </div>
        ) : (
          <div style={{
            background: 'rgba(15,15,22,0.85)',
            border: '1px solid rgba(255,255,255,0.08)',
            borderRadius: '20px',
            padding: 'clamp(1.5rem, 5vw, 2.5rem)',
            backdropFilter: 'blur(20px)',
          }}>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))', gap: '1rem', marginBottom: '1rem' }}>
              <div>
                <label style={{ display: 'block', fontSize: '0.8rem', color: 'rgba(240,240,245,0.5)', fontWeight: 600, marginBottom: '6px', letterSpacing: '0.04em' }}>
                  Your Name
                </label>
                <input
                  name="name"
                  value={form.name}
                  onChange={handleChange}
                  placeholder="Rish Kumar"
                  style={inputStyle}
                  onFocus={e => e.target.style.borderColor = 'rgba(249,115,22,0.5)'}
                  onBlur={e => e.target.style.borderColor = 'rgba(255,255,255,0.1)'}
                />
              </div>
              <div>
                <label style={{ display: 'block', fontSize: '0.8rem', color: 'rgba(240,240,245,0.5)', fontWeight: 600, marginBottom: '6px', letterSpacing: '0.04em' }}>
                  Email Address
                </label>
                <input
                  name="email"
                  type="email"
                  value={form.email}
                  onChange={handleChange}
                  placeholder="you@company.com"
                  style={inputStyle}
                  onFocus={e => e.target.style.borderColor = 'rgba(249,115,22,0.5)'}
                  onBlur={e => e.target.style.borderColor = 'rgba(255,255,255,0.1)'}
                />
              </div>
            </div>

            <div style={{ marginBottom: '1rem' }}>
              <label style={{ display: 'block', fontSize: '0.8rem', color: 'rgba(240,240,245,0.5)', fontWeight: 600, marginBottom: '6px', letterSpacing: '0.04em' }}>
                Service Needed
              </label>
              <select
                name="service"
                value={form.service}
                onChange={handleChange}
                style={{ ...inputStyle, appearance: 'none', cursor: 'pointer' }}
                onFocus={e => e.target.style.borderColor = 'rgba(249,115,22,0.5)'}
                onBlur={e => e.target.style.borderColor = 'rgba(255,255,255,0.1)'}
              >
                <option value="" style={{ background: '#12121a' }}>Select a service...</option>
                <option value="analytics" style={{ background: '#12121a' }}>Data Analytics & BI</option>
                <option value="ml" style={{ background: '#12121a' }}>Machine Learning</option>
                <option value="genai" style={{ background: '#12121a' }}>Gen AI Solutions</option>
                <option value="datascience" style={{ background: '#12121a' }}>Data Science</option>
                <option value="other" style={{ background: '#12121a' }}>Not sure yet</option>
              </select>
            </div>

            <div style={{ marginBottom: '1.5rem' }}>
              <label style={{ display: 'block', fontSize: '0.8rem', color: 'rgba(240,240,245,0.5)', fontWeight: 600, marginBottom: '6px', letterSpacing: '0.04em' }}>
                Tell us about your project
              </label>
              <textarea
                name="message"
                value={form.message}
                onChange={handleChange}
                rows={5}
                placeholder="Describe your data challenge, goals, and timeline..."
                style={{ ...inputStyle, resize: 'vertical', lineHeight: 1.6 }}
                onFocus={e => e.target.style.borderColor = 'rgba(249,115,22,0.5)'}
                onBlur={e => e.target.style.borderColor = 'rgba(255,255,255,0.1)'}
              />
            </div>

            <button
              onClick={handleSubmit}
              disabled={status === 'sending'}
              style={{
                width: '100%',
                background: status === 'sending'
                  ? 'rgba(249,115,22,0.5)'
                  : 'linear-gradient(135deg, #f97316, #ec4899)',
                color: '#fff',
                border: 'none',
                borderRadius: '10px',
                padding: '1rem',
                fontSize: '1rem',
                fontWeight: 700,
                cursor: status === 'sending' ? 'not-allowed' : 'pointer',
                transition: 'opacity 0.2s ease, transform 0.2s ease',
                boxShadow: '0 4px 30px rgba(249,115,22,0.3)',
                fontFamily: 'inherit',
              }}
              onMouseEnter={e => {
                if (status !== 'sending') {
                  e.currentTarget.style.transform = 'translateY(-1px)';
                  e.currentTarget.style.boxShadow = '0 8px 40px rgba(249,115,22,0.45)';
                }
              }}
              onMouseLeave={e => {
                e.currentTarget.style.transform = 'translateY(0)';
                e.currentTarget.style.boxShadow = '0 4px 30px rgba(249,115,22,0.3)';
              }}
            >
              {status === 'sending' ? 'Sending...' : 'Send Message →'}
            </button>
          </div>
        )}
      </div>
    </section>
  );
}
