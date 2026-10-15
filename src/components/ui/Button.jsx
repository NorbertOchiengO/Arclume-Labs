import HashLink from './HashLink.jsx'

const base =
  'inline-flex min-h-11 items-center justify-center gap-2 rounded-md px-5 text-sm font-medium transition-colors duration-200 disabled:cursor-not-allowed disabled:opacity-60'

const variants = {
  primary: 'bg-electric text-white hover:bg-electric-hover',
  secondary: 'border border-obsidian/25 text-obsidian hover:border-obsidian hover:bg-paper',
  // For use on dark sections.
  inverse: 'border border-porcelain/30 text-porcelain hover:border-porcelain hover:bg-porcelain/10',
}

// Renders a router link (`to`), an external/anchor link (`href`), or a <button>.
export default function Button({ variant = 'primary', to, href, className = '', children, ...props }) {
  const classes = `${base} ${variants[variant]} ${className}`

  if (to) {
    return (
      <HashLink to={to} className={classes} {...props}>
        {children}
      </HashLink>
    )
  }

  if (href) {
    return (
      <a href={href} className={classes} {...props}>
        {children}
      </a>
    )
  }

  return (
    <button className={classes} {...props}>
      {children}
    </button>
  )
}
