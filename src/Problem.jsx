// Problem section — 5 pain cards
function Problem() {
  const pains = [
    {
      code: 'PN-01',
      title: 'SOPs live in people\'s heads',
      body: 'If your ops manager is away, nobody knows how they run the process. Tribal knowledge isn\'t a system — it\'s a single point of failure.',
    },
    {
      code: 'PN-02',
      title: 'Documents are scattered everywhere',
      body: 'Google Docs, emails, personal folders, Dropbox. No single source of truth. Nobody knows which version is the right one.',
    },
    {
      code: 'PN-03',
      title: 'Reporting lines are unclear',
      body: 'People aren\'t sure who approves what or who reports to whom. Decisions stall because nobody owns them.',
    },
    {
      code: 'PN-04',
      title: 'No accountability system',
      body: 'Tasks get discussed but never tracked. Decisions happen in meetings but nobody follows up. The same issues come back month after month.',
    },
    {
      code: 'PN-05',
      title: 'The founder holds it all together',
      body: 'And it works… until it doesn\'t. The business is scaling, but the systems aren\'t scaling with it.',
    },
  ];

  return (
    <section id="problem" style={{ position: 'relative', padding: '100px 32px 120px', borderBottom: '1px solid var(--gunmetal)' }}>
      <div style={{ maxWidth: 1280, margin: '0 auto', position: 'relative' }}>
        <div className="reveal">
          <SectionHeader
            eyebrow="Situation Report · Before State"
            title={<>This is what <span style={{ color: 'var(--warning-red)' }}>we walk into.</span></>}
            subtitle="Five patterns we see in every business that's scaled past the founder's ability to hold it all in their head."
          />
        </div>

        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
          gap: 1,
          background: 'var(--gunmetal)',
          border: '1px solid var(--gunmetal)',
        }}>
          {pains.map((p, i) => (
            <PainCard key={p.code} index={i} {...p} />
          ))}
        </div>
      </div>
    </section>
  );
}

function PainCard({ code, title, body, index }) {
  const [hover, setHover] = React.useState(false);
  return (
    <div className="reveal"
      onMouseEnter={() => setHover(true)} onMouseLeave={() => setHover(false)}
      style={{
        background: hover ? 'hsl(4 63% 46% / 0.05)' : 'var(--tactical-steel)',
        padding: '28px 28px 32px',
        transition: 'background 200ms',
        position: 'relative',
        borderLeft: hover ? '3px solid var(--warning-red)' : '3px solid transparent',
        paddingLeft: hover ? 25 : 28,
        transitionDelay: `${index * 40}ms`,
        minHeight: 240,
      }}>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 20 }}>
        <span style={{ fontFamily: 'var(--font-mono)', fontSize: 10, textTransform: 'uppercase', letterSpacing: '.3em', color: 'var(--warning-red)' }}>
          ◆ {code}
        </span>
        <span style={{ fontFamily: 'var(--font-mono)', fontSize: 9, textTransform: 'uppercase', letterSpacing: '.25em', color: 'var(--slate-grey)' }}>
          Friction
        </span>
      </div>
      <h3 style={{
        fontFamily: 'var(--font-heading)', fontSize: 20, textTransform: 'uppercase',
        letterSpacing: '.08em', color: 'var(--steel-white)', margin: '0 0 14px', lineHeight: 1.2,
      }}>{title}</h3>
      <p style={{ fontSize: 14, color: 'var(--steel-white)', opacity: 0.65, lineHeight: 1.55, margin: 0 }}>
        {body}
      </p>
    </div>
  );
}

Object.assign(window, { Problem, PainCard });
