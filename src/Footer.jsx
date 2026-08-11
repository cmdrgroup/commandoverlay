// Footer
function SiteFooter() {
  return (
    <footer style={{ padding: '48px 32px 32px', background: 'hsl(240 3% 5%)', borderTop: '1px solid var(--gunmetal)' }}>
      <div style={{ maxWidth: 1280, margin: '0 auto' }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', gap: 32, flexWrap: 'wrap', marginBottom: 32 }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: 14 }}>
            <OverlayMark size={34} />
            <div>
              <div style={{ fontFamily: 'var(--font-heading)', fontSize: 14, textTransform: 'uppercase', letterSpacing: '.22em', color: 'var(--steel-white)' }}>
                Command <span style={{ color: 'var(--command-gold)' }}>Overlay</span>
              </div>
              <div style={{ fontFamily: 'var(--font-mono)', fontSize: 9, color: 'var(--slate-grey)', textTransform: 'uppercase', letterSpacing: '.25em', marginTop: 4 }}>
                The operational layer your business is missing
              </div>
            </div>
          </div>
          <div style={{ display: 'flex', gap: 40, flexWrap: 'wrap' }}>
            <FooterCol title="Platform" items={[['Overview', '#overlay'], ['SOP Machine', '#sop'], ['Tiers', '#tiers']]} />
            <FooterCol title="CMDR Group" items={[['Letter', 'https://cmdr.group'], ['Command Room', 'https://cmdrgroup.com'], ["Captain's Table", 'https://cmdrgroup.com']]} />
            <FooterCol title="Contact" items={[['Book a call', '#cta'], ['curtis@cmdr.group', 'mailto:curtis@cmdr.group']]} />
          </div>
        </div>
        <div style={{
          paddingTop: 24, borderTop: '1px solid var(--gunmetal)',
          display: 'flex', justifyContent: 'space-between', gap: 16, flexWrap: 'wrap',
          fontFamily: 'var(--font-mono)', fontSize: 9, textTransform: 'uppercase', letterSpacing: '.25em', color: 'var(--slate-grey)',
        }}>
          <span>© 2026 The Frontline Legacy Association · CMDR Group</span>
          <span>⬛ Forged Under Pressure · Built for Command</span>
        </div>
      </div>
    </footer>
  );
}

function FooterCol({ title, items }) {
  return (
    <div>
      <div style={{ fontFamily: 'var(--font-mono)', fontSize: 9, textTransform: 'uppercase', letterSpacing: '.3em', color: 'var(--command-gold)', marginBottom: 12 }}>
        {title}
      </div>
      <div style={{ display: 'flex', flexDirection: 'column', gap: 8 }}>
        {items.map(([label, href]) => (
          <a key={label} href={href} style={{
            fontFamily: 'var(--font-mono)', fontSize: 11, textTransform: 'uppercase', letterSpacing: '.15em',
            color: 'var(--steel-white)', opacity: 0.72, textDecoration: 'none',
          }}>{label}</a>
        ))}
      </div>
    </div>
  );
}

Object.assign(window, { SiteFooter, FooterCol });
