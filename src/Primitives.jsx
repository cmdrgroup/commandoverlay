// Shared primitives — nav, section header, mono label
function MonoLabel({ children, color = 'var(--slate-grey)', size = 11 }) {
  return (
    <div style={{
      fontFamily: 'var(--font-mono)', fontSize: size, textTransform: 'uppercase',
      letterSpacing: '.3em', color
    }}>{children}</div>
  );
}

function SectionHeader({ eyebrow, title, subtitle, accent = 'var(--warning-red)', align = 'left' }) {
  return (
    <div style={{ textAlign: align, marginBottom: 48 }}>
      {eyebrow && (
        <div style={{
          fontFamily: 'var(--font-mono)', fontSize: 11, textTransform: 'uppercase',
          letterSpacing: '.3em', color: 'var(--command-gold)', marginBottom: 14,
          display: 'flex', alignItems: 'center', gap: 10, justifyContent: align === 'center' ? 'center' : 'flex-start'
        }}>
          <span style={{ width: 24, height: 2, background: accent, display: 'inline-block' }} />
          {eyebrow}
        </div>
      )}
      <h2 className="sec-h" style={{
        fontFamily: 'var(--font-heading)', fontSize: 42, fontWeight: 700,
        textTransform: 'uppercase', letterSpacing: '.08em', color: 'var(--steel-white)',
        margin: 0, lineHeight: 1.08, maxWidth: 900,
        marginLeft: align === 'center' ? 'auto' : 0, marginRight: align === 'center' ? 'auto' : 0,
      }}>{title}</h2>
      {subtitle && (
        <p style={{
          fontSize: 16, color: 'var(--steel-white)', opacity: 0.65, lineHeight: 1.55,
          maxWidth: 640, marginTop: 18, fontFamily: 'var(--font-body)',
          marginLeft: align === 'center' ? 'auto' : 0, marginRight: align === 'center' ? 'auto' : 0,
        }}>{subtitle}</p>
      )}
    </div>
  );
}

function SiteNav({ onScrollTo }) {
  const items = [
    { key: 'problem', label: 'Problem' },
    { key: 'overlay', label: 'Overlay' },
    { key: 'sop', label: 'SOP Machine' },
    { key: 'tiers', label: 'Tiers' },
    { key: 'about', label: 'About' },
  ];
  return (
    <header style={{
      borderBottom: '1px solid var(--gunmetal)',
      background: 'hsla(0 0% 4% / 0.85)',
      backdropFilter: 'blur(6px)',
      WebkitBackdropFilter: 'blur(6px)',
      position: 'sticky', top: 0, zIndex: 30,
    }}>
      <div style={{
        maxWidth: 1280, margin: '0 auto', padding: '14px 32px',
        display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: 24,
      }}>
        <a href="#top" onClick={(e) => { e.preventDefault(); window.scrollTo({ top: 0, behavior: 'smooth' }); }} style={{
          display: 'flex', alignItems: 'center', gap: 12, cursor: 'pointer', textDecoration: 'none',
        }}>
          <OverlayMark size={28} />
          <div style={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
            <span style={{ fontFamily: 'var(--font-heading)', fontSize: 13, fontWeight: 700, textTransform: 'uppercase', letterSpacing: '.22em', color: 'var(--steel-white)', whiteSpace: 'nowrap' }}>
              Command <span style={{ color: 'var(--command-gold)' }}>Overlay</span>
            </span>
            <span style={{ fontFamily: 'var(--font-mono)', fontSize: 8, textTransform: 'uppercase', letterSpacing: '.3em', color: 'var(--slate-grey)' }}>
              by CMDR Group
            </span>
          </div>
        </a>
        <nav style={{ display: 'flex', gap: 4, alignItems: 'center' }}>
          <div className="hide-mobile" style={{ display: 'flex', gap: 4, alignItems: 'center' }}>
            {items.map(it => (
              <NavLink key={it.key} label={it.label} onClick={() => onScrollTo(it.key)} />
            ))}
          </div>
          <div style={{ width: 1, height: 20, background: 'var(--gunmetal)', margin: '0 10px' }} className="hide-mobile" />
          <ButtonBase variant="primary" size="sm" onClick={() => onScrollTo('cta')}>Book a Call →</ButtonBase>
        </nav>
      </div>
    </header>
  );
}

function NavLink({ label, onClick }) {
  const [hover, setHover] = React.useState(false);
  return (
    <button onClick={onClick}
      onMouseEnter={() => setHover(true)} onMouseLeave={() => setHover(false)}
      style={{
        fontFamily: 'var(--font-mono)', fontSize: 10, textTransform: 'uppercase', letterSpacing: '.25em',
        background: 'transparent', border: 0, padding: '10px 14px', cursor: 'pointer',
        color: hover ? 'var(--command-gold)' : 'var(--slate-grey)',
        transition: 'color 150ms',
      }}>{label}</button>
  );
}

// The Command Overlay mark — two offset squares, evoking a map + overlay
function OverlayMark({ size = 32, stroke = 1.6 }) {
  return (
    <svg width={size} height={size} viewBox="0 0 32 32" fill="none" style={{ display: 'block' }}>
      {/* Base map square */}
      <rect x="4" y="4" width="18" height="18" stroke="var(--slate-grey)" strokeWidth={stroke} />
      <path d="M 4 10 L 22 10 M 4 16 L 22 16 M 10 4 L 10 22 M 16 4 L 16 22" stroke="var(--slate-grey)" strokeWidth="0.6" opacity="0.6" />
      {/* Overlay square */}
      <rect x="10" y="10" width="18" height="18" stroke="var(--command-gold)" strokeWidth={stroke} fill="hsla(43 49% 54% / 0.08)" />
      <circle cx="19" cy="19" r="1.2" fill="var(--command-gold)" />
    </svg>
  );
}

// Crosshair corner marks — tactical map brackets
function CornerMarks({ color = 'var(--command-gold)', inset = 12, length = 18, width = 1.4 }) {
  const s = { position: 'absolute', pointerEvents: 'none' };
  const h = { height: width, width: length, background: color };
  const v = { width: width, height: length, background: color };
  return (
    <>
      <div style={{ ...s, top: inset, left: inset }}><div style={h} /><div style={{ ...v, marginTop: -width }} /></div>
      <div style={{ ...s, top: inset, right: inset }}><div style={h} /><div style={{ ...v, marginTop: -width, marginLeft: length - width }} /></div>
      <div style={{ ...s, bottom: inset, left: inset }}><div style={{ ...v, marginBottom: -width }} /><div style={h} /></div>
      <div style={{ ...s, bottom: inset, right: inset }}><div style={{ ...v, marginBottom: -width, marginLeft: length - width }} /><div style={h} /></div>
    </>
  );
}

Object.assign(window, { MonoLabel, SectionHeader, SiteNav, NavLink, OverlayMark, CornerMarks });
