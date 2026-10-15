import { business } from '../data/business.js'

// How the contact form delivers an enquiry. Shared by the form and the Privacy Policy so the
// policy always describes what the form really does.
//
//   "endpoint": VITE_FORM_ENDPOINT is set. The enquiry is POSTed as JSON to that form service.
//   "mailto":   otherwise. The visitor's email app opens with the enquiry pre-filled, addressed to
//               VITE_CONTACT_EMAIL (or the studio email from business.js).
export const FORM_ENDPOINT = (import.meta.env.VITE_FORM_ENDPOINT || '').trim()
export const CONTACT_EMAIL = (import.meta.env.VITE_CONTACT_EMAIL || '').trim() || business.email
export const SUBMIT_MODE = FORM_ENDPOINT ? 'endpoint' : 'mailto'
