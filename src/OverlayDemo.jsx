// OverlayDemo — the live animated demo showing systems + overlay layer
function OverlayDemo() {
  const [frame, setFrame] = React.useState(0);

  // Animate the overlay building itself over time
  React.useEffect(() => {
    let raf;
    let start;
    const tick = (t) => {
      if (!start) start = t;
      const elapsed = (t - start) / 1000;
      setFrame(elapsed);
      raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, []);

  return (
    <section id="overlay" style={{ position: 'relative', padding: '100px 32px 120px', borderBottom: '1px solid var(--gunmetal)', background: 'hsl(240 3% 6%)' }}>
      <div className="topo-bg" style={{ opacity: 0.08 }} />
      <div style={{ maxWidth: 1280, margin: '0 auto', position: 'relative' }}>
        <div className="reveal">
          <SectionHeader
            eyebrow="Course of Action · The Overlay"
            title={<>We don't replace your systems.<br/><span style={{ color: 'var(--command-gold)' }}>We layer command on top.</span></>}
            subtitle="Your existing tools are the base map. Command Overlay is the transparent layer that shows progress, accountability, and ownership across everything."
          />
        </div>

        <div className="reveal" style={{ display: 'grid', gridTemplateColumns: 'minmax(0, 1.1fr) minmax(0, 0.9fr)', gap: 40, alignItems: 'stretch' }}>
          <OverlayVisual frame={frame} />
          <FeatureList />
        </div>
      </div>
    </section>
  );
}

function OverlayVisual({ frame }) {
  // Progress pulses every 12s cycle
  const cycle = (frame % 12) / 12; // 0..1
  // Four stages: base systems appear, overlay slides in, dots light up, lines connect
  const baseOpacity = Math.min(1, Math.max(0, (cycle - 0.0) * 6));
  const overlayProgress = Math.min(1, Math.max(0, (cycle - 0.2) * 4));
  const dotsLit = Math.min(1, Math.max(0, (cycle - 0.45) * 6));
  const linesDrawn = Math.min(1, Math.max(0, (cycle - 0.62) * 4));

  return (
    <div style={{
      position: 'relative', background: 'var(--command-black)',
      border: '1px solid var(--gunmetal)', borderRadius: 4, overflow: 'hidden',
      minHeight: 480,
    }}>
      <CornerMarks color="var(--command-gold)" inset={10} length={14} />

      {/* Top bar */}
      <div style={{
        padding: '10px 16px', borderBottom: '1px solid var(--gunmetal)',
        display: 'flex', justifyContent: 'space-between', alignItems: 'center',
        background: 'var(--tactical-steel)',
      }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
          <span style={{ width: 6, height: 6, borderRadius: '50%', background: 'var(--command-gold)', animation: 'pulse-dot 1.6s infinite' }} />
          <span style={{ fontFamily: 'var(--font-mono)', fontSize: 10, textTransform: 'uppercase', letterSpacing: '.25em', color: 'var(--slate-grey)' }}>
            Overlay Instance · acme-co.commandoverlay.com
          </span>
        </div>
        <span style={{ fontFamily: 'var(--font-mono)', fontSize: 9, textTransform: 'uppercase', letterSpacing: '.3em', color: 'var(--command-gold)' }}>
          ● LIVE
        </span>
      </div>

      {/* Main map area */}
      <div style={{ position: 'relative', padding: '32px', minHeight: 420 }}>
        {/* Base systems layer */}
        <div style={{ opacity: baseOpacity, transition: 'opacity 400ms' }}>
          <MonoLabel size={9} color="var(--slate-grey)">◉ Layer 01 · Base Systems</MonoLabel>
          <div style={{
            marginTop: 12,
            display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 12,
          }}>
            <BaseSystem name="SharePoint" icon="S" />
            <BaseSystem name="Google Drive" icon="G" />
            <BaseSystem name="Field App" icon="F" />
            <BaseSystem name="Xero" icon="X" />
            <BaseSystem name="Email" icon="@" />
            <BaseSystem name="Dropbox" icon="D" />
          </div>
        </div>

        {/* Overlay layer sliding in from right */}
        <div style={{
          marginTop: 24,
          opacity: overlayProgress,
          transform: `translateX(${(1 - overlayProgress) * 20}px)`,
          transition: 'opacity 400ms, transform 400ms',
        }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: 10, marginBottom: 12 }}>
            <MonoLabel size={9} color="var(--command-gold)">◆ Layer 02 · Command Overlay</MonoLabel>
            <div style={{ flex: 1, height: 1, background: 'var(--command-gold)', opacity: 0.4 }} />
          </div>

          <div style={{
            border: '1px solid var(--command-gold)',
            background: 'hsla(43 49% 54% / 0.06)',
            padding: 16,
            position: 'relative',
          }}>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: 10 }}>
              <OverlayDot label="Playbook · 84%" lit={dotsLit > 0.2} color="var(--command-gold)" />
              <OverlayDot label="Actions · 12 open" lit={dotsLit > 0.4} color="var(--steel-white)" />
              <OverlayDot label="Coaching · 3 sessions" lit={dotsLit > 0.6} color="var(--steel-white)" />
              <OverlayDot label="Governance · Reviewed" lit={dotsLit > 0.8} color="var(--command-gold)" />
            </div>

            {/* SVG connection lines — down to base systems */}
            <svg width="100%" height="40" style={{ display: 'block', marginTop: 8 }} viewBox="0 0 400 40" preserveAspectRatio="none">
              {[60, 150, 240, 330].map((x, i) => (
                <line key={i} x1={x} y1="0" x2={x + (i - 1.5) * 12} y2="40"
                  stroke="var(--command-gold)" strokeWidth="0.8"
                  strokeDasharray="3 3"
                  opacity={linesDrawn > i / 4 ? 0.6 : 0} />
              ))}
            </svg>
          </div>
        </div>

        {/* Scan line */}
        <div style={{
          position: 'absolute', left: 0, right: 0, height: 2,
          top: `${(cycle * 100)}%`,
          background: 'linear-gradient(90deg, transparent, var(--command-gold), transparent)',
          opacity: 0.35, pointerEvents: 'none',
        }} />
      </div>

      {/* Bottom status bar */}
      <div style={{
        padding: '8px 16px', borderTop: '1px solid var(--gunmetal)',
        display: 'flex', justifyContent: 'space-between',
        fontFamily: 'var(--font-mono)', fontSize: 9, textTransform: 'uppercase', letterSpacing: '.25em', color: 'var(--slate-grey)',
        background: 'var(--tactical-steel)',
      }}>
        <span>Sync · {Math.floor(cycle * 100)}%</span>
        <span style={{ color: 'var(--command-gold)' }}>Status · Nominal</span>
      </div>
    </div>
  );
}

function BaseSystem({ name, icon }) {
  return (
    <div style={{
      border: '1px solid var(--gunmetal)',
      padding: '10px 12px',
      display: 'flex', alignItems: 'center', gap: 10,
      background: 'var(--command-black)',
    }}>
      <div style={{
        width: 22, height: 22, display: 'grid', placeItems: 'center',
        fontFamily: 'var(--font-mono)', fontSize: 12, fontWeight: 700,
        color: 'var(--slate-grey)', border: '1px solid var(--gunmetal)',
      }}>{icon}</div>
      <span style={{ fontFamily: 'var(--font-mono)', fontSize: 10, textTransform: 'uppercase', letterSpacing: '.15em', color: 'var(--slate-grey)' }}>
        {name}
      </span>
    </div>
  );
}

function OverlayDot({ label, lit, color }) {
  return (
    <div style={{
      display: 'flex', alignItems: 'center', gap: 10,
      padding: '8px 10px', border: '1px solid var(--gunmetal)',
      background: 'var(--command-black)',
      opacity: lit ? 1 : 0.35,
      transition: 'opacity 300ms',
    }}>
      <span style={{
        width: 7, height: 7, borderRadius: '50%', background: color,
        boxShadow: lit ? `0 0 8px ${color}` : 'none',
        transition: 'box-shadow 300ms',
      }} />
      <span style={{ fontFamily: 'var(--font-mono)', fontSize: 10, textTransform: 'uppercase', letterSpacing: '.12em', color: 'var(--steel-white)' }}>
        {label}
      </span>
    </div>
  );
}

function FeatureList() {
  const features = [
    { code: '01', accent: 'hsl(101 52% 35%)', title: 'Playbook & SOP Tracking', body: 'Every procedure documented, version-controlled, and tracked from draft to approved. Your entire company playbook — visible at a glance.' },
    { code: '02', accent: 'hsl(207 70% 53%)', title: 'Coaching Session Logs', body: 'Every conversation between you and your fractional COS captured — decisions, actions, owners, due dates. Nothing falls through the cracks.' },
    { code: '03', accent: 'var(--command-gold)', title: 'Action Item Accountability', body: 'Real tracking with real owners. Not a shared spreadsheet — a system that shows what\'s done, what\'s overdue, and who\'s responsible.' },
    { code: '04', accent: 'hsl(283 39% 53%)', title: 'Governance & Compliance', body: 'Delegation of authority, approval workflows, compliance requirements — all visible, all tracked, all in one place.' },
  ];
  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 14 }}>
      {features.map((f, i) => <FeatureCard key={f.code} {...f} delay={i * 60} />)}
    </div>
  );
}

function FeatureCard({ code, accent, title, body, delay }) {
  return (
    <div className="reveal" style={{
      border: '1px solid var(--gunmetal)',
      borderTop: `3px solid ${accent}`,
      background: 'var(--tactical-steel)',
      padding: '20px 22px',
      transitionDelay: `${delay}ms`,
    }}>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 10 }}>
        <span style={{ fontFamily: 'var(--font-mono)', fontSize: 9, textTransform: 'uppercase', letterSpacing: '.3em', color: accent }}>
          ▸ Capability · {code}
        </span>
      </div>
      <h4 style={{ fontFamily: 'var(--font-heading)', fontSize: 17, textTransform: 'uppercase', letterSpacing: '.1em', color: 'var(--steel-white)', margin: '0 0 8px' }}>
        {title}
      </h4>
      <p style={{ fontSize: 13, color: 'var(--steel-white)', opacity: 0.65, margin: 0, lineHeight: 1.5 }}>
        {body}
      </p>
    </div>
  );
}

Object.assign(window, { OverlayDemo, OverlayVisual, BaseSystem, OverlayDot, FeatureList, FeatureCard });
