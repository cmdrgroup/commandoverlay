// About Curtis + CMDR ecosystem badges
function About() {
  return (
    <section id="about" style={{ position: 'relative', padding: '100px 32px 120px', borderBottom: '1px solid var(--gunmetal)' }}>
      <div style={{ maxWidth: 1100, margin: '0 auto' }}>
        <div className="reveal">
          <SectionHeader
            eyebrow="Command Profile · Dossier"
            title={<>Built by a fractional chief of staff,<br/><span style={{ color: 'var(--command-gold)' }}>not a software company.</span></>}
          />
        </div>

        <div className="reveal" style={{
          display: 'grid', gridTemplateColumns: 'minmax(0, 260px) minmax(0, 1fr)', gap: 48,
          alignItems: 'flex-start',
        }}>
          {/* Profile block */}
          <div style={{
            border: '1px solid var(--gunmetal)',
            background: 'var(--tactical-steel)',
            padding: 24,
            position: 'relative',
          }}>
            <CornerMarks color="var(--command-gold)" inset={6} length={10} width={1} />
            <div style={{
              width: '100%', aspectRatio: '1 / 1',
              background: 'var(--command-black)',
              border: '1px solid var(--gunmetal)',
              display: 'grid', placeItems: 'center',
              marginBottom: 16,
              position: 'relative', overflow: 'hidden',
            }}>
              <img src="assets/cmdr-logo.png" alt="CMDR" style={{ width: '60%', height: '60%', objectFit: 'contain', filter: 'invert(1)', opacity: 0.9 }} />
              <div style={{ position: 'absolute', bottom: 8, left: 10, fontFamily: 'var(--font-mono)', fontSize: 9, color: 'var(--slate-grey)', letterSpacing: '.25em', textTransform: 'uppercase' }}>
                OP-001
              </div>
            </div>
            <div style={{ fontFamily: 'var(--font-mono)', fontSize: 9, textTransform: 'uppercase', letterSpacing: '.3em', color: 'var(--command-gold)', marginBottom: 6 }}>
              ◆ Command Profile
            </div>
            <div style={{ fontFamily: 'var(--font-heading)', fontSize: 22, textTransform: 'uppercase', letterSpacing: '.08em', color: 'var(--steel-white)', marginBottom: 4 }}>
              Curtis Tofa
            </div>
            <div style={{ fontFamily: 'var(--font-mono)', fontSize: 10, textTransform: 'uppercase', letterSpacing: '.2em', color: 'var(--slate-grey)', lineHeight: 1.6 }}>
              Fractional Chief of Staff<br/>
              Founder · CMDR Group
            </div>
            <div style={{ marginTop: 18, paddingTop: 16, borderTop: '1px solid var(--gunmetal)' }}>
              {[
                ['Email', 'curtis@cmdr.group'],
                ['Practice', 'cmdr.group'],
                ['Platform', 'commandoverlay.com'],
              ].map(([k, v]) => (
                <div key={k} style={{ display: 'flex', justifyContent: 'space-between', padding: '6px 0', fontFamily: 'var(--font-mono)', fontSize: 10, textTransform: 'uppercase', letterSpacing: '.15em' }}>
                  <span style={{ color: 'var(--slate-grey)' }}>{k}</span>
                  <span style={{ color: 'var(--steel-white)' }}>{v}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Bio */}
          <div>
            <p style={{ fontSize: 17, color: 'var(--steel-white)', opacity: 0.88, lineHeight: 1.7, marginTop: 0 }}>
              I'm Curtis Tofa. I run CMDR Group — a fractional Chief of Staff practice for business owners who know their company has outgrown the way it operates.
            </p>
            <p style={{ fontSize: 16, color: 'var(--steel-white)', opacity: 0.7, lineHeight: 1.7 }}>
              I don't deliver reports. I build systems, document knowledge, create accountability, and hand back a business that runs without everything living in the founder's head. Command Overlay is the platform I built to make that work persist — for every client, at every level of engagement.
            </p>

            <div style={{ marginTop: 32 }}>
              <MonoLabel size={10} color="var(--command-gold)">⬛ CMDR Ecosystem</MonoLabel>
              <div style={{
                marginTop: 14,
                display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(180px, 1fr))', gap: 10,
              }}>
                {[
                  ['CMDR Group', 'The practice', 'cmdr.group'],
                  ["Commander's Rebellion", 'The movement', ''],
                  ["Captain's Table", '1:1 coaching', 'OPCON'],
                  ['Command Room', 'Group mastermind', 'TACON'],
                  ['Command Overlay', 'The platform', 'commandoverlay.com'],
                ].map(([name, role, tag]) => (
                  <div key={name} style={{
                    padding: '12px 14px', border: '1px solid var(--gunmetal)',
                    background: 'var(--tactical-steel)',
                    display: 'flex', flexDirection: 'column', gap: 4,
                  }}>
                    <div style={{ fontFamily: 'var(--font-heading)', fontSize: 13, textTransform: 'uppercase', letterSpacing: '.12em', color: 'var(--steel-white)' }}>
                      {name}
                    </div>
                    <div style={{ display: 'flex', justifyContent: 'space-between', gap: 8 }}>
                      <span style={{ fontFamily: 'var(--font-mono)', fontSize: 9, textTransform: 'uppercase', letterSpacing: '.2em', color: 'var(--slate-grey)' }}>{role}</span>
                      {tag && <span style={{ fontFamily: 'var(--font-mono)', fontSize: 9, textTransform: 'uppercase', letterSpacing: '.2em', color: 'var(--command-gold)' }}>{tag}</span>}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

Object.assign(window, { About });
