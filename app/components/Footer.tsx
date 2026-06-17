export default function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer style={{
      background: '#07070d',
      borderTop: '1px solid rgba(255,255,255,0.06)',
      padding: '2.5rem 2rem',
    }}>
      <div style={{
        maxWidth: '1100px', margin: '0 auto',
        display: 'flex', justifyContent: 'space-between', alignItems: 'center',
        flexWrap: 'wrap', gap: '1rem',
      }}>
        <div>
          <span style={{
            fontSize: '1.2rem', fontWeight: 800,
            background: 'linear-gradient(135deg, #f97316, #ec4899)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
            backgroundClip: 'text',
          }}>tekover.</span>
          <p style={{ color: 'rgba(240,240,245,0.3)', fontSize: '0.78rem', marginTop: '4px' }}>
            Data • ML • AI
          </p>
        </div>
        <p style={{ color: 'rgba(240,240,245,0.25)', fontSize: '0.78rem' }}>
          © {year} Tekover. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
