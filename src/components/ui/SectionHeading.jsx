// Section label (mono), heading, optional supporting text.
export default function SectionHeading({ id, label, title, children, tone = 'light', className = '' }) {
  const dark = tone === 'dark'
  return (
    <div className={className}>
      <p className={`label-mono flex items-center gap-3 ${dark ? 'text-pale' : 'text-electric'}`}>
        <span aria-hidden="true" className={`h-px w-8 ${dark ? 'bg-pale/60' : 'bg-electric'}`} />
        {label}
      </p>
      <h2
        id={id}
        className="mt-5 max-w-3xl text-3xl font-semibold leading-[1.1] sm:text-4xl lg:text-5xl"
      >
        {title}
      </h2>
      {children && (
        <p className={`mt-5 max-w-2xl text-base leading-relaxed sm:text-lg ${dark ? 'text-porcelain/70' : 'text-slate'}`}>
          {children}
        </p>
      )}
    </div>
  )
}
