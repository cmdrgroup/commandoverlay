// Button primitives — primary (gold), danger (red), ghost (outlined)
function ButtonBase({ variant = 'primary', size = 'md', children, ...rest }) {
  const pads = size === 'lg' ? '16px 40px' : size === 'sm' ? '10px 20px' : '14px 28px';
  const fs = size === 'lg' ? 14 : size === 'sm' ? 11 : 13;
  const base = {
    border: 0, cursor: 'pointer', borderRadius: 2,
    fontFamily: 'var(--font-heading)', fontWeight: 700, fontSize: fs,
    letterSpacing: '.2em', textTransform: 'uppercase', padding: pads,
    transition: 'background-color 150ms, color 150ms, border-color 150ms, opacity 150ms',
  };
  const variants = {
    primary: { background: 'var(--command-gold)', color: 'var(--command-black)' },
    danger: { background: 'var(--warning-red)', color: 'var(--steel-white)' },
    ghost: { background: 'transparent', color: 'var(--slate-grey)', border: '1px solid var(--gunmetal)' },
  };
  const [hover, setHover] = React.useState(false);
  const hoverStyle = hover
    ? variant === 'ghost'
      ? { color: 'var(--command-gold)', borderColor: 'var(--command-gold)' }
      : { opacity: 0.9 }
    : {};
  return <button {...rest} onMouseEnter={() => setHover(true)} onMouseLeave={() => setHover(false)}
    style={{ ...base, ...variants[variant], ...hoverStyle, ...(rest.style || {}) }}>{children}</button>;
}
Object.assign(window, { ButtonBase });
