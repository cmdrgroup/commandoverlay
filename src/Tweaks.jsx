// Tweaks panel — floating bottom-right
function TweaksPanel({ tweaks, onChange }) {
  return (
    <div style={{
      position: 'fixed', bottom: 20, right: 20, zIndex: 100,
      width: 280, background: 'var(--tactical-steel)',
      border: '1px solid var(--command-gold)',
      padding: 18, boxShadow: '0 12px 32px -8px hsl(0 0% 0% / 0.8)',
    }}>
      <div style={{ fontFamily: 'var(--font-mono)', fontSize: 10, textTransform: 'uppercase', letterSpacing: '.3em', color: 'var(--command-gold)', marginBottom: 14, display: 'flex', justifyContent: 'space-between' }}>
        <span>◆ Tweaks</span>
        <span style={{ color: 'var(--slate-grey)' }}>02 keys</span>
      </div>
      <TweakToggle label="Topographic background" checked={tweaks.topoBackground} onChange={v => onChange('topoBackground', v)} />
      <TweakToggle label="Classified strip" checked={tweaks.classifiedStrip} onChange={v => onChange('classifiedStrip', v)} />
    </div>
  );
}

function TweakToggle({ label, checked, onChange }) {
  return (
    <label style={{
      display: 'flex', alignItems: 'center', justifyContent: 'space-between',
      padding: '12px 0', borderTop: '1px solid var(--gunmetal)', cursor: 'pointer',
    }}>
      <span style={{ fontFamily: 'var(--font-body)', fontSize: 13, color: 'var(--steel-white)' }}>{label}</span>
      <button onClick={() => onChange(!checked)} style={{
        all: 'unset', cursor: 'pointer',
        width: 40, height: 20, borderRadius: 2,
        background: checked ? 'var(--command-gold)' : 'var(--gunmetal)',
        position: 'relative', transition: 'background 150ms',
      }}>
        <span style={{
          position: 'absolute', top: 2, left: checked ? 22 : 2,
          width: 16, height: 16, background: checked ? 'var(--command-black)' : 'var(--slate-grey)',
          transition: 'left 150ms',
        }} />
      </button>
    </label>
  );
}

Object.assign(window, { TweaksPanel, TweakToggle });
