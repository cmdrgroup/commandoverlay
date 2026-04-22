// Final CTA + footer
function FinalCTA() {
  return (
    <section id="cta" style={{ position: 'relative', padding: '120px 32px 140px', borderBottom: '1px solid var(--gunmetal)', background: 'var(--command-black)', overflow: 'hidden' }}>
      <div className="topo-bg" style={{ opacity: 0.2 }} />
      <div className="grid-bg" />

      <div style={{ maxWidth: 900, margin: '0 auto', position: 'relative', textAlign: 'center' }}>
        <div className="reveal" style={{ display: 'inline-flex', alignItems: 'center', gap: 10, padding: '8px 14px', border: '1px solid var(--gunmetal)', background: 'hsla(43 49% 54% / 0.06)', marginBottom: 32 }}>
          <span style={{ width: 6, height: 6, borderRadius: '50%', background: 'var(--command-gold)', animation: 'pulse-dot 1.8s infinite' }} />
          <span style={{ fontFamily: 'var(--font-mono)', fontSize: 10, textTransform: 'uppercase', letterSpacing: '.3em', color: 'var(--command-gold)' }}>
            Standing By · Ready to Deploy
          </span>
        </div>

        <h2 className="reveal sec-h" style={{
          fontFamily: 'var(--font-heading)', fontSize: 56, fontWeight: 700,
          textTransform: 'uppercase', letterSpacing: '.06em', color: 'var(--steel-white)',
          margin: '0 0 20px', lineHeight: 1.05,
        }}>
          Ready to see<br/>your business <span style={{ color: 'var(--command-gold)' }}>clearly?</span>
        </h2>

        <p className="reveal" style={{
          fontSize: 17, color: 'var(--steel-white)', opacity: 0.7, maxWidth: 560,
          margin: '0 auto 40px', lineHeight: 1.55,
        }}>
          Book a call. I'll show you exactly what Command Overlay looks like for your business.
        </p>

        <div className="reveal">
          <a href="#" style={{ textDecoration: 'none' }}>
            <ButtonBase variant="primary" size="lg" style={{ padding: '22px 56px', fontSize: 16 }}>
              Book a Call →
            </ButtonBase>
          </a>
        </div>

        <div className="reveal" style={{
          marginTop: 64, paddingTop: 32, borderTop: '1px solid var(--gunmetal)',
          display: 'flex', justifyContent: 'center', gap: 40, flexWrap: 'wrap',
          fontFamily: 'var(--font-mono)', fontSize: 10, textTransform: 'uppercase', letterSpacing: '.3em', color: 'var(--slate-grey)',
        }}>
          <span>◉ Grid · Brisbane · AUS</span>
          <span>● Response · &lt; 24 hours</span>
          <span>▸ Straight answer · Always</span>
        </div>
      </div>
    </section>
  );
}

Object.assign(window, { FinalCTA });
