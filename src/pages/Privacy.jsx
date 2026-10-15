import { Link } from 'react-router-dom'
import { BusinessIdentity, LegalPage, LegalSection } from '../components/layout/LegalPage.jsx'
import { SUBMIT_MODE } from '../lib/contactConfig.js'
import { business } from '../data/business.js'

export default function Privacy() {
  return (
    <LegalPage
      title="Privacy Policy"
      intro="This page explains what personal information this website collects, why, and what you can do about it. It describes what the site actually does today."
    >
      <LegalSection title="Who we are">
        <p>This website is operated by ARCLUME LABS, an independent technology and digital studio. You can contact us here:</p>
        <BusinessIdentity />
      </LegalSection>

      <LegalSection title="What information we collect">
        <p>We collect personal information only when you choose to send it to us:</p>
        <ul>
          <li>
            <strong>Through the enquiry form:</strong> your name, email address, the service you are interested in, and
            your project details. You may also add your business or organization and an estimated budget; these two
            are optional.
          </li>
          <li>
            <strong>If you email or call us directly:</strong> whatever you choose to tell us, such as your email
            address or phone number.
          </li>
        </ul>
        <p>
          We do not ask for passwords, payment details or other sensitive information, and we ask you not to send them
          to us.
        </p>
      </LegalSection>

      <LegalSection title="What this website does not do">
        <ul>
          <li>It has no user accounts.</li>
          <li>It does not run analytics, advertising or tracking scripts.</li>
          <li>It does not set cookies of its own. See our <Link to="/cookies">Cookies Policy</Link>.</li>
        </ul>
      </LegalSection>

      <LegalSection title="Why we use your information">
        <p>
          We use what you send us to read and reply to your enquiry, to discuss your project and, if you go ahead, to
          carry out the work, and to keep a record of our correspondence. We do not sell your personal information.
        </p>
      </LegalSection>

      <LegalSection title="How the enquiry form sends your information">
        {SUBMIT_MODE === 'endpoint' ? (
          <p>
            When you submit the form, your details are sent over an encrypted connection to a third-party form service
            that delivers the enquiry to us. That service handles your details on our behalf for this purpose only.
          </p>
        ) : (
          <p>
            When you use the form, the site opens your own email app with your message already written and addressed
            to us. Nothing reaches us until you send that email, and your email provider handles it under its own
            terms.
          </p>
        )}
      </LegalSection>

      <LegalSection title="Who else may handle your information">
        <ul>
          <li>
            <strong>Email provider:</strong> enquiries are received at an email address hosted by Google (Gmail), so
            Google processes the emails we receive.
          </li>
          <li>
            <strong>Web hosting provider:</strong> the company that hosts this website processes technical request data,
            such as your IP address and browser details, when pages load. This website adds no analytics of its own.
          </li>
        </ul>
        <p>
          These providers may process data in countries other than your own. Links on this site lead to other websites
          (such as our portfolio projects) that have their own privacy practices, which we do not control.
        </p>
      </LegalSection>

      <LegalSection title="How long we keep it">
        <p>
          We keep enquiries for as long as we need them to respond, to carry out any work you ask us to do, and to meet
          legal or accounting obligations. Enquiries that do not lead to a project are deleted when we no longer have a
          reason to keep them.
        </p>
      </LegalSection>

      <LegalSection title="Your rights">
        <p>
          Depending on where you live, data protection law (which may include Kenya&apos;s Data Protection Act, 2019)
          can give you rights over your personal information, such as asking what we hold, correcting it, deleting it,
          or objecting to how we use it. To make a request, email{' '}
          <a href={`mailto:${business.email}`}>{business.email}</a>. If you are unhappy with how your information is
          handled, you can complain to your data protection regulator. In Kenya, that is the Office of the Data
          Protection Commissioner.
        </p>
      </LegalSection>

      <LegalSection title="Security and children">
        <p>
          We take reasonable steps to protect the information you send us, but no method of transmission or storage is
          completely secure. This website is not aimed at children and we do not knowingly collect their personal
          information.
        </p>
      </LegalSection>

      <LegalSection title="Changes to this policy">
        <p>
          If what this website does with personal information changes, we will update this page and the date at the
          top.
        </p>
      </LegalSection>
    </LegalPage>
  )
}
