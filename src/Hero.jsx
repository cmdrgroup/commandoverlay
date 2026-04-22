// Hero — two-column: content left, tactical video display right
function Hero({ onScrollTo }) {
  return (
    <section id="top" style={{ position: 'relative', minHeight: 'calc(100vh - 40px)', overflow: 'hidden', borderBottom: '1px solid var(--gunmetal)' }}>
      <div className="topo-bg" />
      <div className="grid-bg" />

      {/* Corner data strips */}
      <div style={{ position: 'absolute', top: 24, left: 32, right: 32, display: 'flex', justifyContent: 'space-between', zIndex: 2, pointerEvents: 'none' }}>
        <MonoLabel size={9}>◉ GRID 54S · WE · 2208 · 5510</MonoLabel>
        <MonoLabel size={9} color="var(--command-gold)">● LIVE · 2026.04.22 · 14:32Z</MonoLabel>
      </div>

      <div style={{
        position: 'relative', zIndex: 2,
        maxWidth: 1320, margin: '0 auto', padding: '120px 32px 100px',
        display: 'grid', gridTemplateColumns: 'minmax(0, 1.05fr) minmax(0, 0.95fr)',
        gap: 56, alignItems: 'center',
      }} className="hero-grid">

        {/* Left column — content */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: 28, alignItems: 'flex-start' }}>
          <div style={{
            display: 'inline-flex', alignItems: 'center', gap: 12,
            padding: '8px 14px', border: '1px solid var(--gunmetal)',
            background: 'hsla(43 49% 54% / 0.06)', borderRadius: 2,
          }}>
            <span style={{ width: 6, height: 6, borderRadius: '50%', background: 'var(--command-gold)', animation: 'pulse-dot 1.8s ease-in-out infinite' }} />
            <span style={{ fontFamily: 'var(--font-mono)', fontSize: 10, textTransform: 'uppercase', letterSpacing: '.3em', color: 'var(--command-gold)' }}>
              Tactical Operations Platform · Built by CMDR Group
            </span>
          </div>

          <h1 className="hero-h1" style={{
            fontFamily: 'var(--font-heading)', fontSize: 64, fontWeight: 700,
            textTransform: 'uppercase', letterSpacing: '.04em', color: 'var(--steel-white)',
            margin: 0, lineHeight: 0.98,
          }}>
            Your business<br />
            has outgrown<br />
            your ability to <span style={{ color: 'var(--command-gold)' }}>hold it together.</span>
          </h1>

          <p style={{
            fontSize: 17, lineHeight: 1.55, maxWidth: 560,
            color: 'var(--steel-white)', opacity: 0.72, margin: 0,
            fontFamily: 'var(--font-body)',
          }}>
            Command Overlay is the operational platform that makes invisible knowledge visible —
            <span style={{ color: 'var(--steel-white)', opacity: 1 }}> playbooks, SOPs, accountability, and coaching,</span>
            {' '}layered on top of your existing systems.
          </p>

          <div style={{ display: 'flex', gap: 14, flexWrap: 'wrap', marginTop: 4 }}>
            <ButtonBase variant="primary" size="lg" onClick={() => onScrollTo('sop')}>See How It Works →</ButtonBase>
            <ButtonBase variant="ghost" size="lg" onClick={() => onScrollTo('cta')}>Talk to Curtis</ButtonBase>
          </div>

          <div style={{
            marginTop: 32, paddingTop: 20, borderTop: '1px solid var(--gunmetal)', width: '100%',
            maxWidth: 560, display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 20,
          }}>
            <HeroStat label="Layer" value="Operational" />
            <HeroStat label="Replaces" value="Nothing" />
            <HeroStat label="Engagement" value="Fractional COS" />
          </div>
        </div>

        {/* Right column — video display */}
        <div className="hide-mobile">
          <HeroVideo />
        </div>
      </div>
    </section>
  );
}

function HeroVideo() {
  const [playing, setPlaying] = React.useState(false);

  return (
    <div style={{
      position: 'relative',
      background: 'var(--command-black)',
      border: '1px solid var(--gunmetal)',
      aspectRatio: '16 / 10',
    }}>
      <CornerMarks color="var(--command-gold)" inset={8} length={14} width={1.2} />

      {/* Top data strip */}
      <div style={{
        padding: '8px 14px', borderBottom: '1px solid var(--gunmetal)',
        display: 'flex', justifyContent: 'space-between', alignItems: 'center',
        background: 'var(--tactical-steel)',
      }}>
        <div style={{ display: 'flex', gap: 12, alignItems: 'center' }}>
          <span style={{ width: 5, height: 5, borderRadius: '50%', background: 'var(--warning-red)', animation: 'pulse-dot 1.4s infinite' }} />
          <span style={{ fontFamily: 'var(--font-mono)', fontSize: 9, textTransform: 'uppercase', letterSpacing: '.25em', color: 'var(--slate-grey)' }}>
            REC · BRIEF-001 · PRODUCT WALKTHROUGH
          </span>
        </div>
        <span style={{ fontFamily: 'var(--font-mono)', fontSize: 9, textTransform: 'uppercase', letterSpacing: '.25em', color: 'var(--command-gold)' }}>
          02:14
        </span>
      </div>

      {/* Video body */}
      <div
        onClick={() => setPlaying(!playing)}
        style={{
          position: 'relative', width: '100%', height: 'calc(100% - 64px)',
          background: `
            linear-gradient(135deg, transparent 48%, var(--gunmetal) 48%, var(--gunmetal) 52%, transparent 52%) 0 0/40px 40px,
            var(--command-black)
          `,
          display: 'grid', placeItems: 'center', cursor: 'pointer', overflow: 'hidden',
        }}
      >
        {/* ======================================================== */}
        {/* VIDEO PLACEHOLDER — swap this div for a <video> or <iframe> */}
        {/* e.g.  <video src="your-video.mp4" autoPlay loop muted />  */}
        {/* ======================================================== */}

        {/* Faux footage scanlines */}
        <div style={{
          position: 'absolute', inset: 0,
          background: 'repeating-linear-gradient(180deg, transparent 0, transparent 3px, hsla(240 6% 90% / 0.02) 3px, hsla(240 6% 90% / 0.02) 4px)',
          pointerEvents: 'none',
        }} />

        {/* Play button */}
        <div style={{
          position: 'relative',
          width: 72, height: 72,
          border: '1.5px solid var(--command-gold)',
          borderRadius: '50%',
          display: 'grid', placeItems: 'center',
          background: 'hsla(43 49% 54% / 0.08)',
          transition: 'transform 200ms',
          transform: playing ? 'scale(0.92)' : 'scale(1)',
        }}>
          {/* Triangle */}
          <div style={{
            width: 0, height: 0,
            borderLeft: '18px solid var(--command-gold)',
            borderTop: '12px solid transparent',
            borderBottom: '12px solid transparent',
            marginLeft: 4,
          }} />
          {/* Outer ring */}
          <div style={{
            position: 'absolute', inset: -10,
            border: '1px solid var(--command-gold)',
            borderRadius: '50%',
            opacity: 0.25,
          }} />
        </div>

        {/* Caption overlay */}
        <div style={{
          position: 'absolute', bottom: 16, left: 16, right: 16,
          display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', gap: 16,
        }}>
          <div>
            <div style={{ fontFamily: 'var(--font-mono)', fontSize: 9, textTransform: 'uppercase', letterSpacing: '.3em', color: 'var(--command-gold)', marginBottom: 6 }}>
              ◆ Watch the brief
            </div>
            <div style={{ fontFamily: 'var(--font-heading)', fontSize: 18, textTransform: 'uppercase', letterSpacing: '.08em', color: 'var(--steel-white)', lineHeight: 1.2, maxWidth: 260 }}>
              What Command Overlay actually looks like.
            </div>
          </div>
          <div style={{
            padding: '6px 10px', border: '1px solid var(--gunmetal)',
            fontFamily: 'var(--font-mono)', fontSize: 9, textTransform: 'uppercase', letterSpacing: '.25em', color: 'var(--slate-grey)',
            background: 'hsla(0 0% 0% / 0.5)',
          }}>
            HD · 16:9
          </div>
        </div>
      </div>

      {/* Bottom status strip */}
      <div style={{
        padding: '7px 14px', borderTop: '1px solid var(--gunmetal)',
        display: 'flex', justifyContent: 'space-between',
        fontFamily: 'var(--font-mono)', fontSize: 9, textTransform: 'uppercase', letterSpacing: '.25em', color: 'var(--slate-grey)',
        background: 'var(--tactical-steel)',
      }}>
        <span>◉ Curtis Tofa · Cmdr Group</span>
        <span style={{ color: 'var(--command-gold)' }}>▸ Play</span>
      </div>
    </div>
  );
}

function HeroStat({ label, value }) {
  return (
    <div>
      <div style={{ fontFamily: 'var(--font-mono)', fontSize: 9, textTransform: 'uppercase', letterSpacing: '.3em', color: 'var(--slate-grey)', marginBottom: 6 }}>{label}</div>
      <div style={{ fontFamily: 'var(--font-heading)', fontSize: 18, textTransform: 'uppercase', letterSpacing: '.1em', color: 'var(--steel-white)', fontWeight: 700 }}>{value}</div>
    </div>
  );
}

Object.assign(window, { Hero, HeroVideo, HeroStat });
