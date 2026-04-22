// Video Brief — full-width product walkthrough video section
function VideoBrief() {
  const [playing, setPlaying] = React.useState(false);

  return (
    <section id="brief" style={{ position: 'relative', padding: '100px 32px 120px', borderBottom: '1px solid var(--gunmetal)' }}>
      <div style={{ maxWidth: 1200, margin: '0 auto' }}>
        <div className="reveal" style={{ textAlign: 'center', marginBottom: 48 }}>
          <div style={{
            display: 'inline-flex', alignItems: 'center', gap: 10,
            fontFamily: 'var(--font-mono)', fontSize: 11, textTransform: 'uppercase',
            letterSpacing: '.3em', color: 'var(--command-gold)', marginBottom: 18,
          }}>
            <span style={{ width: 24, height: 2, background: 'var(--warning-red)' }} />
            Operational Brief · 60 Seconds
          </div>
          <h2 className="sec-h" style={{
            fontFamily: 'var(--font-heading)', fontSize: 42, fontWeight: 700,
            textTransform: 'uppercase', letterSpacing: '.06em', color: 'var(--steel-white)',
            margin: 0, lineHeight: 1.1, maxWidth: 780, marginLeft: 'auto', marginRight: 'auto',
          }}>
            See Command Overlay<br/><span style={{ color: 'var(--command-gold)' }}>in under a minute.</span>
          </h2>
        </div>

        <div className="reveal" style={{
          position: 'relative',
          background: 'var(--command-black)',
          border: '1px solid var(--gunmetal)',
          aspectRatio: '16 / 9',
        }}>
          <CornerMarks color="var(--command-gold)" inset={12} length={20} width={1.4} />

          {/* Top strip */}
          <div style={{
            padding: '10px 16px', borderBottom: '1px solid var(--gunmetal)',
            display: 'flex', justifyContent: 'space-between', alignItems: 'center',
            background: 'var(--tactical-steel)',
          }}>
            <div style={{ display: 'flex', gap: 12, alignItems: 'center' }}>
              <span style={{ width: 6, height: 6, borderRadius: '50%', background: 'var(--warning-red)', animation: 'pulse-dot 1.4s infinite' }} />
              <span style={{ fontFamily: 'var(--font-mono)', fontSize: 10, textTransform: 'uppercase', letterSpacing: '.25em', color: 'var(--slate-grey)' }}>
                ⬛ CLASSIFIED · BRIEF-002 · PRODUCT WALKTHROUGH
              </span>
            </div>
            <div style={{ display: 'flex', gap: 20, alignItems: 'center' }}>
              <span style={{ fontFamily: 'var(--font-mono)', fontSize: 10, color: 'var(--slate-grey)', letterSpacing: '.2em', textTransform: 'uppercase' }}>
                01:04
              </span>
              <span style={{ fontFamily: 'var(--font-mono)', fontSize: 10, color: 'var(--command-gold)', letterSpacing: '.3em', textTransform: 'uppercase' }}>
                ● LIVE
              </span>
            </div>
          </div>

          {/* Video body */}
          <div
            onClick={() => setPlaying(!playing)}
            style={{
              position: 'relative', width: '100%', height: 'calc(100% - 72px)',
              background: `
                linear-gradient(135deg, transparent 48%, var(--gunmetal) 48%, var(--gunmetal) 52%, transparent 52%) 0 0/48px 48px,
                var(--command-black)
              `,
              display: 'grid', placeItems: 'center', cursor: 'pointer', overflow: 'hidden',
            }}
          >
            {/* ============================================================ */}
            {/* VIDEO PLACEHOLDER — replace this block with real <video>     */}
            {/*                                                              */}
            {/*   <video src="/path/to/video.mp4" controls                   */}
            {/*          poster="/path/to/poster.jpg"                        */}
            {/*          style={{ width: '100%', height: '100%',            */}
            {/*                   objectFit: 'cover' }} />                   */}
            {/*                                                              */}
            {/* Or <iframe src="https://player.vimeo.com/video/..." />       */}
            {/* ============================================================ */}

            <div style={{
              position: 'absolute', inset: 0,
              background: 'repeating-linear-gradient(180deg, transparent 0, transparent 4px, hsla(240 6% 90% / 0.02) 4px, hsla(240 6% 90% / 0.02) 5px)',
              pointerEvents: 'none',
            }} />

            {/* Topographic accent */}
            <div className="topo-bg" style={{ opacity: 0.14, mixBlendMode: 'screen' }} />

            {/* Play button */}
            <div style={{
              position: 'relative', zIndex: 2,
              width: 96, height: 96,
              border: '2px solid var(--command-gold)',
              borderRadius: '50%',
              display: 'grid', placeItems: 'center',
              background: 'hsla(43 49% 54% / 0.08)',
              transition: 'transform 200ms',
              transform: playing ? 'scale(0.92)' : 'scale(1)',
            }}>
              <div style={{
                width: 0, height: 0,
                borderLeft: '26px solid var(--command-gold)',
                borderTop: '16px solid transparent',
                borderBottom: '16px solid transparent',
                marginLeft: 6,
              }} />
              <div style={{
                position: 'absolute', inset: -14,
                border: '1px solid var(--command-gold)',
                borderRadius: '50%',
                opacity: 0.3,
              }} />
              <div style={{
                position: 'absolute', inset: -28,
                border: '1px solid var(--command-gold)',
                borderRadius: '50%',
                opacity: 0.12,
              }} />
            </div>

            {/* Lower-left caption */}
            <div style={{
              position: 'absolute', bottom: 20, left: 20, right: 20,
              display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', gap: 16, zIndex: 2,
            }}>
              <div>
                <div style={{ fontFamily: 'var(--font-mono)', fontSize: 10, textTransform: 'uppercase', letterSpacing: '.3em', color: 'var(--command-gold)', marginBottom: 8 }}>
                  ◆ Briefing
                </div>
                <div style={{ fontFamily: 'var(--font-heading)', fontSize: 24, textTransform: 'uppercase', letterSpacing: '.08em', color: 'var(--steel-white)', lineHeight: 1.2, maxWidth: 480 }}>
                  How Command Overlay<br/>turns chaos into command.
                </div>
              </div>
              <div style={{
                padding: '8px 12px', border: '1px solid var(--gunmetal)',
                fontFamily: 'var(--font-mono)', fontSize: 10, textTransform: 'uppercase', letterSpacing: '.25em', color: 'var(--slate-grey)',
                background: 'hsla(0 0% 0% / 0.6)',
              }}>
                HD · 16:9 · Poster.jpg
              </div>
            </div>
          </div>

          {/* Bottom strip */}
          <div style={{
            padding: '8px 16px', borderTop: '1px solid var(--gunmetal)',
            display: 'flex', justifyContent: 'space-between',
            fontFamily: 'var(--font-mono)', fontSize: 10, textTransform: 'uppercase', letterSpacing: '.25em', color: 'var(--slate-grey)',
            background: 'var(--tactical-steel)',
          }}>
            <span>◉ Presented by Curtis Tofa · CMDR Group</span>
            <span style={{ color: 'var(--command-gold)' }}>▸ Click to play</span>
          </div>
        </div>

        <div className="reveal" style={{
          marginTop: 24, textAlign: 'center',
          fontFamily: 'var(--font-mono)', fontSize: 10, textTransform: 'uppercase', letterSpacing: '.3em', color: 'var(--slate-grey)',
        }}>
          ⬛ Drop your video at <span style={{ color: 'var(--command-gold)' }}>assets/brief.mp4</span> to replace the placeholder
        </div>
      </div>
    </section>
  );
}

Object.assign(window, { VideoBrief });
