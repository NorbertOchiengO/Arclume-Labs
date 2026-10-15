import { business } from '../../data/business.js'

// Clickable email and phone numbers. `tone="dark"` is for use on the dark footer.
export default function ContactLinks({ tone = 'light', className = '' }) {
  const dark = tone === 'dark'
  const labelClass = dark ? 'text-porcelain/60' : 'text-slate'
  const linkClass = dark
    ? 'text-porcelain hover:text-white'
    : 'text-obsidian hover:text-electric'

  return (
    <dl className={`space-y-4 ${className}`}>
      <div>
        <dt className={`label-mono ${labelClass}`}>Email</dt>
        <dd className="mt-1">
          <a
            href={`mailto:${business.email}`}
            className={`inline-flex min-h-11 items-center break-all text-base font-medium underline decoration-current/30 underline-offset-4 transition-colors duration-200 ${linkClass}`}
          >
            {business.email}
          </a>
        </dd>
      </div>
      <div>
        <dt className={`label-mono ${labelClass}`}>Phone</dt>
        <dd className="mt-1 flex flex-col">
          {business.phones.map((phone) => (
            <a
              key={phone.tel}
              href={`tel:${phone.tel}`}
              aria-label={`Call ${phone.display}`}
              className={`inline-flex min-h-11 w-fit items-center text-base font-medium underline decoration-current/30 underline-offset-4 transition-colors duration-200 ${linkClass}`}
            >
              {phone.display}
            </a>
          ))}
        </dd>
      </div>
    </dl>
  )
}
