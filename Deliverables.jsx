// Deliverables — what you get at end of engagement
function Deliverables() {
  const items = [
    {
      code: 'DEL-01',
      title: 'A complete company playbook',
      body: 'Structured by department, covering every role, every process, every approval chain. One source of truth for the entire business.',
    },
    {
      code: 'DEL-02',
      title: 'Standardised SOPs with visual flowcharts',
      body: 'Every procedure documented the same way, with decision-point flowcharts that make complex processes simple to follow.',
    },
    {
      code: 'DEL-03',
      title: 'A clear organisational structure',
      body: 'Reporting lines, delegation of authority, and governance frameworks so everyone knows who owns what.',
    },
    {
      code: 'DEL-04',
      title: 'Systems architecture that connects',
      body: 'Every document has a home, every system has a role, and everything connects back to the playbook. No more hunting for files.',
    },
    {
      code: 'DEL-05',
      title: 'A live Command Overlay instance',
      body: 'Your own operational dashboard tracking playbook progress, coaching sessions, action items, and governance — accessible anytime at yourcompany.commandoverlay.com.',
      highlight: true,
    },
  ];

  return (
    <section id="deliverables" style={{ position: 'relative', padding: '100px 32px 120px', borderBottom: '1px solid var(--gunmetal)', background: 'hsl(240 3% 6%)' }}>
      <div style={{ maxWidth: 1280, margin: '0 auto' }}>
        <div className="reveal">
          <SectionHeader
            eyebrow="Operations Order · Deliverables"
            title={<>What you get<br/><span style={{ color: 'var(--command-gold)' }}>when we're done.</span></>}
            subtitle="Tangible outcomes, not vague promises. The actual systems we leave behind."
          />
        </div>

        <div className="reveal" style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(340px, 1fr))',
          gap: 16,
        }}>
          {items.map((it, i) => (
            <DeliverableCard key={it.code} {...it} index={i} />
          ))}
        </div>

        <div className="reveal" style={{
          marginTop: 48, paddingTop: 32, borderTop: '1px solid var(--gunmetal)',
          textAlign: 'center',
        }}>
          <p style={{
            fontFamily: 'var(--font-heading)', fontSize: 24, textTransform: 'uppercase',
            letterSpacing: '.08em', color: 'var(--steel-white)', margin: 0, maxWidth: 780,
            marginLeft: 'auto', marginRight: 'auto', lineHeight: 1.3,
          }}>
            When we hand it back, your business runs without everything<br/>living in the <span style={{ color: 'var(--command-gold)' }}>founder's head.</span>
          </p>
        </div>
      </div>
    </section>
  );
}

function DeliverableCard({ code, title, body, highlight, index }) {
  return (
    <div className="reveal" style={{
      background: highlight ? 'hsla(43 49% 54% / 0.06)' : 'var(--tactical-steel)',
      border: '1px solid var(--gunmetal)',
      borderLeft: highlight ? '3px solid var(--command-gold)' : '1px solid var(--gunmetal)',
      padding: '24px 26px 28px',
      display: 'flex', flexDirection: 'column', gap: 10,
      transitionDelay: `${index * 50}ms`,
      minHeight: 200,
    }}>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 4 }}>
        <span style={{ fontFamily: 'var(--font-mono)', fontSize: 10, textTransform: 'uppercase', letterSpacing: '.3em', color: highlight ? 'var(--command-gold)' : 'var(--slate-grey)' }}>
          ▸ {code}
        </span>
        {highlight && (
          <span style={{ fontFamily: 'var(--font-mono)', fontSize: 9, textTransform: 'uppercase', letterSpacing: '.25em', color: 'var(--command-gold)' }}>
            ● Platform
          </span>
        )}
      </div>
      <h4 style={{
        fontFamily: 'var(--font-heading)', fontSize: 20, textTransform: 'uppercase',
        letterSpacing: '.08em', color: 'var(--steel-white)', margin: 0, lineHeight: 1.2,
      }}>{title}</h4>
      <p style={{ fontSize: 14, color: 'var(--steel-white)', opacity: 0.68, margin: 0, lineHeight: 1.55 }}>
        {body}
      </p>
    </div>
  );
}

Object.assign(window, { Deliverables, DeliverableCard });
