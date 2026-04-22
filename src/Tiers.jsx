// Tiers — comparison table, TACON / OPCON / TACOM / OPCOM
function Tiers() {
  const tiers = [
    { key: 'TACON', name: 'Tactical Control', sub: 'Command Room', fill: 0, price: 'Frameworks only', blurb: 'You get the frameworks, the templates, and the playbook structure — then you run your own ops.' },
    { key: 'OPCON', name: 'Operational Control', sub: "Captain's Table", fill: 1, price: 'Weekly coaching', blurb: 'Weekly oversight sessions — you execute, I guide. We review progress, remove blockers, and keep you accountable.' },
    { key: 'TACOM', name: 'Tactical Command', sub: 'Hands-on direction', fill: 2, price: 'Direct build', blurb: "I'm in the detail with you — telling you what to do, how to do it, and building the systems alongside your team." },
    { key: 'OPCOM', name: 'Operational Command', sub: 'Fractional COS', fill: 3, price: 'Full engagement', blurb: 'I run the operational system. You run the business. Playbook, SOPs, governance, platform, the lot.' },
  ];

  const rows = [
    { label: 'Command Overlay instance', values: ['✓', '✓', '✓', '✓'] },
    { label: 'Playbook templates', values: ['✓', '✓', '✓', '✓'] },
    { label: 'SOP Machine access', values: ['—', '✓', '✓', '✓'] },
    { label: 'Weekly coaching sessions', values: ['—', '✓', '✓', '✓'] },
    { label: 'Hands-on SOP build', values: ['—', '—', '✓', '✓'] },
    { label: 'Governance framework', values: ['—', '—', '✓', '✓'] },
    { label: 'Fractional COS engagement', values: ['—', '—', '—', '✓'] },
    { label: 'Org structure rebuild', values: ['—', '—', '—', '✓'] },
  ];

  return (
    <section id="tiers" style={{ position: 'relative', padding: '110px 32px 130px', borderBottom: '1px solid var(--gunmetal)', background: 'var(--command-black)' }}>
      <div className="topo-bg" style={{ opacity: 0.1 }} />
      <div style={{ maxWidth: 1280, margin: '0 auto', position: 'relative' }}>
        <div className="reveal">
          <SectionHeader
            eyebrow="The CMDR Framework · Four Levels of Command"
            title={<>Whether you need frameworks,<br/>coaching, direction, or a <span style={{ color: 'var(--command-gold)' }}>full chief of staff.</span></>}
            subtitle="Four tiers of engagement. Each earns the next. Every tier gets their own Command Overlay instance."
          />
        </div>

        {/* Tier header row */}
        <div className="reveal" style={{
          display: 'grid',
          gridTemplateColumns: 'minmax(180px, 1.3fr) repeat(4, minmax(0, 1fr))',
          gap: 1,
          background: 'var(--gunmetal)',
          border: '1px solid var(--gunmetal)',
        }}>
          <div style={{ background: 'var(--command-black)', padding: '24px 22px' }}>
            <MonoLabel size={10}>◆ Engagement Matrix</MonoLabel>
            <div style={{ marginTop: 8, fontFamily: 'var(--font-mono)', fontSize: 10, color: 'var(--slate-grey)', textTransform: 'uppercase', letterSpacing: '.2em' }}>
              Capability
            </div>
          </div>
          {tiers.map((t, i) => <TierHeader key={t.key} tier={t} />)}

          {/* Rows */}
          {rows.map((r, i) => (
            <React.Fragment key={r.label}>
              <div style={{
                background: 'var(--command-black)',
                padding: '16px 22px',
                fontSize: 13, color: 'var(--steel-white)', opacity: 0.88,
                fontFamily: 'var(--font-body)', fontWeight: 500,
                display: 'flex', alignItems: 'center',
              }}>{r.label}</div>
              {r.values.map((v, j) => (
                <div key={j} style={{
                  background: 'var(--command-black)',
                  padding: '16px 22px',
                  textAlign: 'center',
                  fontFamily: 'var(--font-mono)', fontSize: 14,
                  color: v === '✓' ? 'var(--command-gold)' : 'var(--slate-grey)',
                  opacity: v === '✓' ? 1 : 0.4,
                  fontWeight: 600,
                }}>{v}</div>
              ))}
            </React.Fragment>
          ))}
        </div>

        {/* Tier blurb row */}
        <div className="reveal" style={{
          marginTop: 32, display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))',
          gap: 12,
        }}>
          {tiers.map(t => (
            <div key={t.key} style={{
              padding: '14px 16px',
              background: 'var(--tactical-steel)',
              border: '1px solid var(--gunmetal)',
              borderTop: `2px solid ${t.fill === 3 ? 'var(--command-gold)' : 'var(--gunmetal)'}`,
            }}>
              <div style={{ fontFamily: 'var(--font-mono)', fontSize: 10, color: 'var(--command-gold)', textTransform: 'uppercase', letterSpacing: '.3em', marginBottom: 6 }}>
                {t.key}
              </div>
              <div style={{ fontSize: 12, color: 'var(--steel-white)', opacity: 0.7, lineHeight: 1.5 }}>
                {t.blurb}
              </div>
            </div>
          ))}
        </div>

        <div style={{ marginTop: 30, textAlign: 'center', fontFamily: 'var(--font-mono)', fontSize: 10, textTransform: 'uppercase', letterSpacing: '.25em', color: 'var(--slate-grey)' }}>
          ⬛ Every tier gets their own Command Overlay instance · Your operational picture · Your data · Your platform
        </div>
      </div>
    </section>
  );
}

function TierHeader({ tier }) {
  // Escalating fill: 0 = outline only, 3 = fully filled gold
  const fillLevels = [
    { bg: 'var(--command-black)', accent: 'var(--slate-grey)', dots: [1, 0, 0, 0] },
    { bg: 'hsla(43 49% 54% / 0.04)', accent: 'var(--command-gold)', dots: [1, 1, 0, 0] },
    { bg: 'hsla(43 49% 54% / 0.08)', accent: 'var(--command-gold)', dots: [1, 1, 1, 0] },
    { bg: 'hsla(43 49% 54% / 0.14)', accent: 'var(--command-gold)', dots: [1, 1, 1, 1] },
  ];
  const f = fillLevels[tier.fill];

  return (
    <div style={{
      background: f.bg,
      padding: '24px 22px',
      borderTop: tier.fill === 3 ? '3px solid var(--command-gold)' : '3px solid transparent',
      display: 'flex', flexDirection: 'column', gap: 10,
    }}>
      <div style={{ display: 'flex', gap: 3 }}>
        {f.dots.map((d, i) => (
          <span key={i} style={{
            width: 18, height: 3,
            background: d ? 'var(--command-gold)' : 'var(--gunmetal)',
          }} />
        ))}
      </div>
      <div style={{
        fontFamily: 'var(--font-heading)', fontSize: 22, fontWeight: 700,
        textTransform: 'uppercase', letterSpacing: '.1em',
        color: f.accent,
      }}>{tier.key}</div>
      <div style={{
        fontFamily: 'var(--font-body)', fontSize: 11,
        color: 'var(--steel-white)', opacity: 0.82,
        textTransform: 'uppercase', letterSpacing: '.15em',
      }}>{tier.name}</div>
      <div style={{
        fontFamily: 'var(--font-mono)', fontSize: 9,
        color: 'var(--slate-grey)',
        textTransform: 'uppercase', letterSpacing: '.2em',
      }}>{tier.sub} · {tier.price}</div>
    </div>
  );
}

Object.assign(window, { Tiers, TierHeader });
