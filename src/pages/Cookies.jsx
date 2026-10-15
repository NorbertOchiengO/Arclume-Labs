import { Link } from 'react-router-dom'
import { LegalPage, LegalSection } from '../components/layout/LegalPage.jsx'
import { business } from '../data/business.js'

export default function Cookies() {
  return (
    <LegalPage
      title="Cookies Policy"
      intro="In short: this website does not use cookies or tracking, so there is no cookie banner and nothing for you to accept or decline."
    >
      <LegalSection title="What this website sets">
        <p>
          This website&apos;s own code does not set cookies, and it does not store information in your browser for
          tracking or preferences. It does not use analytics, advertising or social media tracking tools.
        </p>
        <p>
          Its fonts are delivered from this website itself, so loading a page does not send your visit to a font
          provider. It does not embed third-party content such as maps, videos or social feeds.
        </p>
      </LegalSection>

      <LegalSection title="Other websites">
        <p>
          Our portfolio links open other websites in a new tab. Those sites are separate from this one and may use
          cookies under their own policies.
        </p>
      </LegalSection>

      <LegalSection title="If this changes">
        <p>
          If we ever add analytics or other tools that need cookies or similar technologies, we will update this page
          and ask for your consent first where it is required.
        </p>
        <p>
          For how we handle information you send us, see our <Link to="/privacy">Privacy Policy</Link>. Questions can
          be sent to <a href={`mailto:${business.email}`}>{business.email}</a>.
        </p>
      </LegalSection>
    </LegalPage>
  )
}
