import { Link } from 'react-router-dom'
import { BusinessIdentity, LegalPage, LegalSection } from '../components/layout/LegalPage.jsx'

export default function Terms() {
  return (
    <LegalPage
      title="Terms & Conditions"
      intro="These terms cover your use of this website. They do not set the terms of any project we work on together. Those are agreed separately, as explained below."
    >
      <LegalSection title="About these terms">
        <p>This website is operated by:</p>
        <BusinessIdentity />
        <p>By using the website you agree to these terms. If you do not agree, please do not use it.</p>
      </LegalSection>

      <LegalSection title="Using the website">
        <p>
          You may browse this website and contact us through it. Please do not misuse it, for example by trying to
          disrupt it, access it without permission, or send us unlawful or harmful material.
        </p>
      </LegalSection>

      <LegalSection title="Portfolio and concept work">
        <p>
          Each project in our portfolio is labelled as a Concept, a Portfolio demo, or a Live website. Concepts and
          demos use fictional organizations, people, services and offers. They show design and engineering work, are
          not real businesses, and are not offers of any product or service. Names and brands of the organizations that
          appear in live websites belong to their owners.
        </p>
      </LegalSection>

      <LegalSection title="Links to other websites">
        <p>
          This website links to other websites, including our portfolio projects. We do not control them and are not
          responsible for their content or practices.
        </p>
      </LegalSection>

      <LegalSection title="Enquiries and services">
        <p>
          Sending an enquiry does not create a contract. If we agree to work together, the scope, price, timelines,
          payment terms, and what happens if either side cancels or asks for a refund will be agreed in writing before
          work starts.
        </p>
        <p>
          How we handle the information you send us is explained in our <Link to="/privacy">Privacy Policy</Link>.
        </p>
      </LegalSection>

      <LegalSection title="Ownership of this website">
        <p>
          The design, text and code of this website, and the ARCLUME LABS name and logo, belong to ARCLUME LABS. Please
          do not copy or reuse them without permission.
        </p>
      </LegalSection>

      <LegalSection title="No guarantees and limits on liability">
        <p>
          We provide the information on this website in good faith, but we do not guarantee that it is complete, current
          or always available. To the extent the law allows, we are not liable for loss arising from using this website
          or relying on its content. Nothing in these terms limits any liability that cannot legally be limited.
        </p>
      </LegalSection>

      <LegalSection title="Changes to these terms">
        <p>We may update these terms. The date at the top shows when they last changed.</p>
      </LegalSection>
    </LegalPage>
  )
}
