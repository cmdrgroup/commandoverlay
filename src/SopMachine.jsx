// SOP Machine — interactive 5-step flow, click to expand
function SopMachine() {
  const [active, setActive] = React.useState(0);

  const steps = [
    {
      code: 'STEP 01',
      title: 'Film',
      icon: '▶',
      oneLine: 'The expert records the real process.',
      detail: 'The person who does the job records the process. Not a consultant guessing — the actual expert, talking through how it really works. 15 minutes. Phone camera. Done.',
      meta: [['Tool', 'Loom · Phone'], ['Time', '~15 min'], ['Owner', 'Process expert']],
    },
    {
      code: 'STEP 02',
      title: 'Transcribe',
      icon: '▤',
      oneLine: 'AI turns recording into structured draft.',
      detail: 'AI-assisted transcription turns a 15-minute recording into a structured first draft in minutes, not days. Speaker labels, decision points, and sequence all captured.',
      meta: [['Tool', 'Whisper + LLM'], ['Time', '~5 min'], ['Output', 'Structured draft']],
    },
    {
      code: 'STEP 03',
      title: 'Template',
      icon: '▦',
      oneLine: 'Every SOP to one standardised format.',
      detail: 'Every SOP standardised to the same structure, naming convention, and format. Consistent across every department — finance, ops, safety, compliance, construction.',
      meta: [['Format', 'CMDR SOP v3'], ['Sections', '8 fixed'], ['Naming', 'DEPT-NN-TITLE']],
    },
    {
      code: 'STEP 04',
      title: 'Flowchart',
      icon: '◈',
      oneLine: 'Decision flowcharts with orange failure paths.',
      detail: 'Visual decision flowcharts with diamond decision points. "No" paths rendered in orange so you can see exactly what happens when something goes wrong.',
      meta: [['Decision pts', 'Diamond'], ['Failure paths', 'Orange'], ['Export', 'SVG · PDF']],
    },
    {
      code: 'STEP 05',
      title: 'Publish',
      icon: '◉',
      oneLine: 'Into the playbook. Version-controlled. Findable.',
      detail: 'Into the playbook. Findable, version-controlled, approved. A new starter can find it on day one — searchable by department, role, and keyword.',
      meta: [['Status', 'Approved'], ['Access', 'Role-gated'], ['Versioning', 'Git-backed']],
    },
  ];

  return (
    <section id="sop" style={{ position: 'relative', padding: '100px 32px 120px', borderBottom: '1px solid var(--gunmetal)' }}>
      <div style={{ maxWidth: 1280, margin: '0 auto' }}>
        <div className="reveal">
          <SectionHeader
            eyebrow="Standing Operating Procedure · The Machine"
            title={<>From tribal knowledge<br/>to documented systems in <span style={{ color: 'var(--command-gold)' }}>5 steps.</span></>}
            subtitle="A repeatable system for turning what lives in your team's heads into standardised, visual, version-controlled procedures."
          />
        </div>

        {/* Step row — click to expand */}
        <div className="reveal" style={{
          display: 'grid',
          gridTemplateColumns: `repeat(${steps.length}, 1fr)`,
          gap: 4,
          marginBottom: 32,
        }}>
          {steps.map((s, i) => (
            <StepBar key={s.code} step={s} index={i} isActive={active === i} onClick={() => setActive(i)} total={steps.length} />
          ))}
        </div>

        {/* Expanded detail panel */}
        <ExpandedStep step={steps[active]} key={active} />

        <div style={{
          marginTop: 40, padding: '18px 22px', border: '1px solid var(--gunmetal)',
          borderLeft: '3px solid var(--command-gold)',
          background: 'hsla(43 49% 54% / 0.04)',
          display: 'flex', gap: 16, alignItems: 'flex-start',
        }}>
          <span style={{ fontFamily: 'var(--font-mono)', fontSize: 11, color: 'var(--command-gold)', textTransform: 'uppercase', letterSpacing: '.3em' }}>NOTE</span>
          <p style={{ margin: 0, fontSize: 14, color: 'var(--steel-white)', opacity: 0.82, lineHeight: 1.55 }}>
            This system works across any department — operations, finance, safety, compliance, construction.
            <span style={{ color: 'var(--command-gold)' }}> We've used it to build 20+ SOPs in a single engagement.</span>
          </p>
        </div>
      </div>
    </section>
  );
}

function StepBar({ step, index, isActive, onClick, total }) {
  return (
    <button onClick={onClick} style={{
      all: 'unset', cursor: 'pointer',
      position: 'relative',
      padding: '20px 16px 22px',
      background: isActive ? 'var(--tactical-steel)' : 'hsl(240 3% 8%)',
      border: '1px solid var(--gunmetal)',
      borderTop: isActive ? '2px solid var(--command-gold)' : '2px solid transparent',
      transition: 'all 200ms',
      display: 'flex', flexDirection: 'column', gap: 10, alignItems: 'flex-start',
      minHeight: 120,
    }}>
      <div style={{ display: 'flex', justifyContent: 'space-between', width: '100%', alignItems: 'center' }}>
        <span style={{
          fontFamily: 'var(--font-mono)', fontSize: 9, textTransform: 'uppercase', letterSpacing: '.3em',
          color: isActive ? 'var(--command-gold)' : 'var(--slate-grey)',
        }}>
          {step.code}
        </span>
        <span style={{ fontFamily: 'var(--font-mono)', fontSize: 9, color: 'var(--slate-grey)' }}>
          {index + 1}/{total}
        </span>
      </div>
      <span style={{
        fontSize: 22, color: isActive ? 'var(--command-gold)' : 'var(--slate-grey)',
        fontFamily: 'var(--font-mono)',
      }}>{step.icon}</span>
      <h4 style={{
        fontFamily: 'var(--font-heading)', fontSize: 20, textTransform: 'uppercase', letterSpacing: '.1em',
        color: isActive ? 'var(--steel-white)' : 'var(--steel-white)', margin: 0,
      }}>{step.title}</h4>
      <span style={{ fontSize: 12, color: 'var(--steel-white)', opacity: 0.55, lineHeight: 1.4 }}>
        {step.oneLine}
      </span>
    </button>
  );
}

function ExpandedStep({ step }) {
  return (
    <div style={{
      background: 'var(--tactical-steel)',
      border: '1px solid var(--gunmetal)',
      borderLeft: '3px solid var(--command-gold)',
      padding: '28px 32px',
      display: 'grid', gridTemplateColumns: 'minmax(0, 1.6fr) minmax(0, 1fr)', gap: 40,
      animation: 'fadeIn 250ms ease-out',
    }}>
      <div>
        <div style={{ display: 'flex', alignItems: 'center', gap: 14, marginBottom: 14 }}>
          <span style={{ fontFamily: 'var(--font-mono)', fontSize: 10, color: 'var(--command-gold)', textTransform: 'uppercase', letterSpacing: '.3em' }}>
            ◆ {step.code} · Briefing
          </span>
        </div>
        <h3 style={{
          fontFamily: 'var(--font-heading)', fontSize: 30, textTransform: 'uppercase',
          letterSpacing: '.08em', color: 'var(--steel-white)', margin: '0 0 14px',
        }}>{step.title}</h3>
        <p style={{ fontSize: 15, color: 'var(--steel-white)', opacity: 0.82, lineHeight: 1.65, margin: 0 }}>
          {step.detail}
        </p>
      </div>
      <div style={{ borderLeft: '1px solid var(--gunmetal)', paddingLeft: 28 }}>
        <div style={{ fontFamily: 'var(--font-mono)', fontSize: 9, textTransform: 'uppercase', letterSpacing: '.3em', color: 'var(--slate-grey)', marginBottom: 14 }}>
          Dossier
        </div>
        {step.meta.map(([k, v], i) => (
          <div key={k} style={{
            display: 'flex', justifyContent: 'space-between',
            padding: '10px 0', borderTop: i === 0 ? 'none' : '1px solid var(--gunmetal)',
          }}>
            <span style={{ fontFamily: 'var(--font-mono)', fontSize: 10, textTransform: 'uppercase', letterSpacing: '.2em', color: 'var(--slate-grey)' }}>{k}</span>
            <span style={{ fontFamily: 'var(--font-mono)', fontSize: 10, textTransform: 'uppercase', letterSpacing: '.15em', color: 'var(--steel-white)' }}>{v}</span>
          </div>
        ))}
      </div>
    </div>
  );
}

Object.assign(window, { SopMachine, StepBar, ExpandedStep });
