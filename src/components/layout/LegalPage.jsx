import Container from './Container.jsx'
import { business, LEGAL_LAST_UPDATED } from '../../data/business.js'

// Shared layout for the Privacy, Terms and Cookies pages.
export function LegalPage({ title, intro, children }) {
  return (
    <article aria-labelledby="legal-heading" className="py-16 lg:py-24">
      <Container>
        <div className="max-w-3xl">
          <p className="label-mono text-electric">Legal</p>
          <h1 id="legal-heading" className="mt-5 text-4xl font-semibold leading-[1.1] sm:text-5xl">
            {title}
          </h1>
          <p className="label-mono mt-5 text-slate">Last updated: {LEGAL_LAST_UPDATED}</p>
          {intro && <p className="mt-8 text-lg leading-relaxed text-slate">{intro}</p>}
          <div className="mt-12 space-y-10">{children}</div>
        </div>
      </Container>
    </article>
  )
}

export function LegalSection({ title, children }) {
  return (
    <section className="border-t border-obsidian/15 pt-8">
      <h2 className="text-2xl font-semibold">{title}</h2>
      <div className="mt-4 space-y-4 leading-relaxed text-obsidian/85 [&_a]:font-medium [&_a]:text-electric [&_a]:underline [&_a]:underline-offset-2 [&_a:hover]:text-electric-hover [&_ul]:list-disc [&_ul]:space-y-2 [&_ul]:pl-5">
        {children}
      </div>
    </section>
  )
}

// Business identity lines. Optional details only appear once they are filled in business.js.
export function BusinessIdentity() {
  return (
    <ul>
      <li>
        <strong>{business.name}</strong>
        {business.legalName && <> (registered name: {business.legalName})</>}
      </li>
      {business.registrationNumber && <li>Registration number: {business.registrationNumber}</li>}
      {business.postalAddress && <li>Address: {business.postalAddress}</li>}
      <li>
        Email: <a href={`mailto:${business.email}`}>{business.email}</a>
      </li>
      <li>
        Phone:{' '}
        {business.phones.map((phone, index) => (
          <span key={phone.tel}>
            {index > 0 && ', '}
            <a href={`tel:${phone.tel}`}>{phone.display}</a>
          </span>
        ))}
      </li>
    </ul>
  )
}
