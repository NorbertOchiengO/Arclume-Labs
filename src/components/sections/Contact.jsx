import { useRef, useState } from 'react'
import { Link } from 'react-router-dom'
import { Check, CircleAlert, LoaderCircle } from 'lucide-react'
import Container from '../layout/Container.jsx'
import SectionHeading from '../ui/SectionHeading.jsx'
import Button from '../ui/Button.jsx'
import ContactLinks from '../ui/ContactLinks.jsx'
import { services } from '../../data/services.js'
import { CONTACT_EMAIL, FORM_ENDPOINT } from '../../lib/contactConfig.js'

// Submission (see src/lib/contactConfig.js and the README):
//   - If VITE_FORM_ENDPOINT is set, the enquiry is POSTed to that form service and success is
//     only shown when the service replies OK.
//   - Otherwise the visitor's email app opens with the enquiry pre-filled. Nothing is sent until
//     the visitor sends that email, and the message says so.

// Adjust the currency and ranges to suit your market.
const BUDGET_OPTIONS = [
  'Not sure yet',
  'Under $1,000',
  '$1,000 – $5,000',
  '$5,000 – $15,000',
  '$15,000+',
]

const EMPTY = { name: '', email: '', organization: '', service: '', budget: '', message: '', website: '' }
const EMAIL_PATTERN = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/

function validate(values) {
  const errors = {}
  if (values.name.trim().length < 2) errors.name = 'Enter your name.'
  if (!values.email.trim()) errors.email = 'Enter your email address.'
  else if (!EMAIL_PATTERN.test(values.email.trim())) errors.email = 'Enter a valid email address, like name@example.com.'
  if (!values.service) errors.service = 'Choose the service you are interested in.'
  if (values.message.trim().length < 20) errors.message = 'Tell us a little more. Please write at least 20 characters.'
  return errors
}

const inputClass = (invalid) =>
  `min-h-12 w-full rounded-md border bg-paper px-4 py-3 text-base text-obsidian transition-colors duration-200 focus:border-electric ${
    invalid ? 'border-error' : 'border-obsidian/25 hover:border-obsidian/50'
  }`

function Field({ id, label, optional = false, hint, error, children }) {
  return (
    <div>
      <label htmlFor={id} className="mb-2 flex items-baseline justify-between gap-3 text-sm font-medium">
        <span>{label}</span>
        {optional && <span className="label-mono text-slate">Optional</span>}
      </label>
      {hint && (
        <p id={`${id}-hint`} className="mb-2 text-sm text-slate">
          {hint}
        </p>
      )}
      {children}
      {error && (
        <p id={`${id}-error`} className="mt-2 flex items-start gap-2 text-sm text-error">
          <CircleAlert aria-hidden="true" className="mt-0.5 h-4 w-4 shrink-0" />
          <span>{error}</span>
        </p>
      )}
    </div>
  )
}

const directLink = 'font-medium underline underline-offset-2'

function StatusMessage({ status, errorText }) {
  if (status === 'idle' || status === 'submitting') return null

  const success = 'border-success/40 bg-success/5 text-success'
  const failure = 'border-error/40 bg-error/5 text-error'

  const tones = {
    success: {
      icon: Check,
      className: success,
      content: 'Thank you. Your enquiry has been sent. We will reply to the email address you provided.',
    },
    mailto: {
      icon: Check,
      className: success,
      content: (
        <>
          Your email app should now open with your enquiry written out. It is only sent once you send that email. If
          nothing opened, email us directly at{' '}
          <a href={`mailto:${CONTACT_EMAIL}`} className={directLink}>
            {CONTACT_EMAIL}
          </a>
          .
        </>
      ),
    },
    error: {
      icon: CircleAlert,
      className: failure,
      content: (
        <>
          {errorText} You can also email{' '}
          <a href={`mailto:${CONTACT_EMAIL}`} className={directLink}>
            {CONTACT_EMAIL}
          </a>{' '}
          directly.
        </>
      ),
    },
  }
  const { icon: Icon, className, content } = tones[status]

  return (
    <p className={`flex items-start gap-3 rounded-md border p-4 text-sm leading-relaxed ${className}`}>
      <Icon aria-hidden="true" className="mt-0.5 h-4 w-4 shrink-0" />
      <span>{content}</span>
    </p>
  )
}

export default function Contact() {
  const [values, setValues] = useState(EMPTY)
  const [errors, setErrors] = useState({})
  const [status, setStatus] = useState('idle')
  const [errorText, setErrorText] = useState('')
  const submitting = useRef(false) // guards against double submits before state has re-rendered
  const formRef = useRef(null)

  const update = (event) => {
    const { name, value } = event.target
    setValues((current) => ({ ...current, [name]: value }))
    if (errors[name]) setErrors((current) => ({ ...current, [name]: undefined }))
    if (status !== 'idle' && status !== 'submitting') setStatus('idle')
  }

  // Links a field to its hint and (when present) its error message for screen readers.
  const describe = (name, hasHint = false) => {
    const ids = [hasHint ? `${name}-hint` : null, errors[name] ? `${name}-error` : null].filter(Boolean)
    return ids.length > 0 ? ids.join(' ') : undefined
  }

  const handleSubmit = async (event) => {
    event.preventDefault()
    if (submitting.current) return

    // Honeypot: real visitors never see or fill this field.
    if (values.website) return

    const found = validate(values)
    setErrors(found)
    if (Object.keys(found).length > 0) {
      setStatus('idle')
      const firstInvalid = ['name', 'email', 'service', 'message'].find((key) => found[key])
      formRef.current?.querySelector(`[name="${firstInvalid}"]`)?.focus()
      return
    }

    const payload = {
      name: values.name.trim(),
      email: values.email.trim(),
      organization: values.organization.trim(),
      service: values.service,
      budget: values.budget,
      message: values.message.trim(),
    }

    if (FORM_ENDPOINT) {
      submitting.current = true
      setStatus('submitting')
      try {
        const response = await fetch(FORM_ENDPOINT, {
          method: 'POST',
          headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
          body: JSON.stringify(payload),
        })
        if (!response.ok) throw new Error(`Form service responded with ${response.status}`)
        setValues(EMPTY)
        setStatus('success')
      } catch {
        setErrorText('Something went wrong and your enquiry was not sent. Please check your connection and try again.')
        setStatus('error')
      } finally {
        submitting.current = false
      }
      return
    }

    // No form service configured: hand the enquiry to the visitor's email app.
    const lines = [
      `Name: ${payload.name}`,
      `Email: ${payload.email}`,
      payload.organization ? `Organization: ${payload.organization}` : null,
      `Service of interest: ${payload.service}`,
      payload.budget ? `Estimated budget: ${payload.budget}` : null,
      '',
      payload.message,
    ].filter((line) => line !== null)
    const subject = encodeURIComponent(`Project enquiry: ${payload.service}`)
    const body = encodeURIComponent(lines.join('\n'))
    setStatus('mailto')
    window.location.href = `mailto:${CONTACT_EMAIL}?subject=${subject}&body=${body}`
  }

  const isSubmitting = status === 'submitting'

  return (
    <section id="contact" tabIndex={-1} aria-labelledby="contact-heading" className="scroll-mt-16 border-t border-obsidian/10 bg-pale/50 py-20 outline-none lg:scroll-mt-[72px] lg:py-28">
      <Container className="grid gap-12 lg:grid-cols-12 lg:gap-16">
        <div className="lg:col-span-5">
          <SectionHeading id="contact-heading" label="Start a conversation" title="Have something worth building?">
            Tell us what you are working on, what is getting in the way, or what you want to improve. We can start with
            the problem and work toward the right solution.
          </SectionHeading>

          <div className="mt-10 border-t border-obsidian/15 pt-8">
            <h3 className="text-lg font-semibold">Prefer to reach out directly?</h3>
            <ContactLinks className="mt-4" />
          </div>
        </div>

        <form ref={formRef} onSubmit={handleSubmit} noValidate className="rounded-lg border border-obsidian/10 bg-paper p-5 sm:p-8 lg:col-span-7">
          <div className="grid gap-5 sm:grid-cols-2">
            <Field id="name" label="Name" error={errors.name}>
              <input
                id="name"
                name="name"
                type="text"
                autoComplete="name"
                value={values.name}
                onChange={update}
                aria-required="true"
                aria-invalid={errors.name ? 'true' : undefined}
                aria-describedby={describe('name')}
                className={inputClass(errors.name)}
              />
            </Field>

            <Field id="email" label="Email" hint="We will reply to this address." error={errors.email}>
              <input
                id="email"
                name="email"
                type="email"
                autoComplete="email"
                inputMode="email"
                value={values.email}
                onChange={update}
                aria-required="true"
                aria-invalid={errors.email ? 'true' : undefined}
                aria-describedby={describe('email', true)}
                className={inputClass(errors.email)}
              />
            </Field>

            <Field id="organization" label="Business or organization" optional>
              <input
                id="organization"
                name="organization"
                type="text"
                autoComplete="organization"
                value={values.organization}
                onChange={update}
                className={inputClass(false)}
              />
            </Field>

            <Field id="service" label="Service of interest" error={errors.service}>
              <select
                id="service"
                name="service"
                value={values.service}
                onChange={update}
                aria-required="true"
                aria-invalid={errors.service ? 'true' : undefined}
                aria-describedby={describe('service')}
                className={inputClass(errors.service)}
              >
                <option value="">Select a service</option>
                {services.map((service) => (
                  <option key={service.id} value={service.title}>
                    {service.title}
                  </option>
                ))}
                <option value="Not sure yet">Not sure yet</option>
              </select>
            </Field>

            <div className="sm:col-span-2">
              <Field id="budget" label="Estimated budget" optional>
                <select id="budget" name="budget" value={values.budget} onChange={update} className={inputClass(false)}>
                  <option value="">Select a range</option>
                  {BUDGET_OPTIONS.map((option) => (
                    <option key={option} value={option}>
                      {option}
                    </option>
                  ))}
                </select>
              </Field>
            </div>

            <div className="sm:col-span-2">
              <Field
                id="message"
                label="Project details"
                hint="What are you building or fixing, who is it for, and what is getting in the way? Please avoid sharing passwords or sensitive personal information."
                error={errors.message}
              >
                <textarea
                  id="message"
                  name="message"
                  rows={6}
                  value={values.message}
                  onChange={update}
                  aria-required="true"
                  aria-invalid={errors.message ? 'true' : undefined}
                  aria-describedby={describe('message', true)}
                  className={`${inputClass(errors.message)} resize-y`}
                />
              </Field>
            </div>

            {/* Honeypot for simple spam bots. Hidden from people and assistive technology. */}
            <div inert className="absolute -left-[9999px] h-0 w-0 overflow-hidden">
              <label htmlFor="website">Leave this field empty</label>
              <input id="website" name="website" type="text" tabIndex={-1} autoComplete="off" value={values.website} onChange={update} />
            </div>
          </div>

          <p className="mt-6 text-sm leading-relaxed text-slate">
            {FORM_ENDPOINT
              ? 'We use the details you enter only to reply to your enquiry. They are sent to our form service so they can reach us.'
              : 'We use the details you enter only to reply to your enquiry. Sending opens your email app with your message ready to send.'}{' '}
            See our{' '}
            <Link
              to="/privacy"
              target="_blank"
              rel="noopener"
              className="font-medium text-electric underline underline-offset-2 hover:text-electric-hover"
            >
              Privacy Policy<span className="sr-only"> (opens in a new tab)</span>
            </Link>{' '}
            for details.
          </p>

          <div className="mt-5 space-y-4" aria-live="polite">
            <StatusMessage status={status} errorText={errorText} />
          </div>

          <Button type="submit" disabled={isSubmitting} aria-busy={isSubmitting} className="mt-6 w-full sm:w-auto">
            {isSubmitting ? (
              <>
                <LoaderCircle aria-hidden="true" className="h-4 w-4 animate-spin" />
                Sending…
              </>
            ) : (
              FORM_ENDPOINT ? 'Send enquiry' : 'Send enquiry by email'
            )}
          </Button>
        </form>
      </Container>
    </section>
  )
}
