// Transformation — before/after split
function Transformation() {
  const before = [
    'Processes live in people\'s heads',
    'Documents scattered across systems',
    'No single source of truth',
    'Unclear accountability and governance',
    "The business can't scale without the founder",
  ];
  const after = [
    'Every process documented and standardised',
    'A company playbook structured by department',
    'One source of truth, accessible to everyone',
    'Clear governance with tracked ownership',
    'A business that runs on systems, not memory',
  ];

  return (
    <section id="transformation" style={{ position: 'relative', padding: '100px 32px 120px', borderBottom: '1px solid var(--gunmetal)', background: 'hsl(240 3% 6%)' }}>
      <div style={{ maxWidth: 1200, margin: '0 auto' }}>
        <div className="reveal">
          <SectionHeader
            eyebrow="After Action Review · The Transformation"
            title={<>From tribal knowledge<br/><span style={{ color: 'var(--command-gold)' }}>to commanded operations.</span></>}
          />
        </div>

        <div className="reveal" style={{
          display: 'grid',
          gridTemplateColumns: 'minmax(0, 1fr) 64px minmax(0, 1fr)',
          gap: 0, alignItems: 'stretch',
          border: '1px solid var(--gunmetal)',
          background: 'var(--gunmetal)',
        }}>
          {/* Before */}
          <div style={{ background: 'var(--tactical-steel)', padding: '32px 32px 36px', borderLeft: '3px solid var(--warning-red)' }}>
            <div style={{ fontFamily: 'var(--font-mono)', fontSize: 10, textTransform: 'uppercase', letterSpacing: '.3em', color: 'var(--warning-red)', marginBottom: 10 }}>
              ◆ BEFORE · PRE-DEPLOYMENT
            </div>
            <h4 style={{ fontFamily: 'var(--font-heading)', fontSize: 24, textTransform: 'uppercase', letterSpacing: '.08em', color: 'var(--steel-white)', margin: '0 0 22px' }}>
              Current state
            </h4>
            {before.map((b, i) => (
              <div key={i} style={{
                padding: '12px 0',
                borderTop: i === 0 ? 'none' : '1px solid var(--gunmetal)',
                display: 'flex', alignItems: 'flex-start', gap: 12,
              }}>
                <span style={{ color: 'var(--warning-red)', fontFamily: 'var(--font-mono)', fontSize: 12, marginTop: 2 }}>✕</span>
                <span style={{ fontSize: 14, color: 'var(--steel-white)', opacity: 0.7, lineHeight: 1.5 }}>{b}</span>
              </div>
            ))}
          </div>

          {/* Divider with arrow */}
          <div style={{
            background: 'var(--command-black)',
            display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center',
            position: 'relative',
          }}>
            <div style={{ fontFamily: 'var(--font-mono)', fontSize: 9, textTransform: 'uppercase', letterSpacing: '.3em', color: 'var(--slate-grey)', transform: 'rotate(-90deg)', whiteSpace: 'nowrap', marginBottom: 32 }}>
              Engagement
            </div>
            <div style={{
              width: 2, height: 80, background: 'linear-gradient(var(--warning-red), var(--command-gold))',
            }} />
            <div style={{
              width: 0, height: 0,
              borderLeft: '10px solid transparent',
              borderRight: '10px solid transparent',
              borderTop: '14px solid var(--command-gold)',
              marginTop: -2,
            }} />
            <div style={{ fontFamily: 'var(--font-mono)', fontSize: 9, textTransform: 'uppercase', letterSpacing: '.3em', color: 'var(--command-gold)', transform: 'rotate(-90deg)', whiteSpace: 'nowrap', marginTop: 32 }}>
              CMDR
            </div>
          </div>

          {/* After */}
          <div style={{ background: 'var(--tactical-steel)', padding: '32px 32px 36px', borderRight: '3px solid var(--command-gold)' }}>
            <div style={{ fontFamily: 'var(--font-mono)', fontSize: 10, textTransform: 'uppercase', letterSpacing: '.3em', color: 'var(--command-gold)', marginBottom: 10 }}>
              ◆ AFTER · POST-DEPLOYMENT
            </div>
            <h4 style={{ fontFamily: 'var(--font-heading)', fontSize: 24, textTransform: 'uppercase', letterSpacing: '.08em', color: 'var(--steel-white)', margin: '0 0 22px' }}>
              Commanded state
            </h4>
            {after.map((a, i) => (
              <div key={i} style={{
                padding: '12px 0',
                borderTop: i === 0 ? 'none' : '1px solid var(--gunmetal)',
                display: 'flex', alignItems: 'flex-start', gap: 12,
              }}>
                <span style={{ color: 'var(--command-gold)', fontFamily: 'var(--font-mono)', fontSize: 12, marginTop: 2 }}>✓</span>
                <span style={{ fontSize: 14, color: 'var(--steel-white)', opacity: 0.88, lineHeight: 1.5 }}>{a}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Pull quote */}
        <div className="reveal" style={{
          marginTop: 56, padding: '40px 48px',
          borderLeft: '3px solid var(--command-gold)',
          background: 'hsla(43 49% 54% / 0.04)',
          maxWidth: 960, marginLeft: 'auto', marginRight: 'auto',
        }}>
          <div style={{ fontFamily: 'var(--font-mono)', fontSize: 10, textTransform: 'uppercase', letterSpacing: '.3em', color: 'var(--command-gold)', marginBottom: 14 }}>
            ⬛ Operating Doctrine
          </div>
          <p style={{
            fontFamily: 'var(--font-heading)', fontSize: 22, textTransform: 'uppercase',
            letterSpacing: '.04em', color: 'var(--steel-white)', lineHeight: 1.4, margin: 0,
          }}>
            They don't need a bigger team. They don't need a 200-page consulting report that sits in a drawer. They need someone to build the systems, document the knowledge, connect the dots, and <span style={{ color: 'var(--command-gold)' }}>hand it back better than they found it.</span> That's what we do.
          </p>
        </div>
      </div>
    </section>
  );
}

Object.assign(window, { Transformation });
