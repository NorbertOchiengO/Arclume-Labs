// Single source of truth for navigation, footer links and social links.

export const navLinks = [
  { id: 'work', label: 'Work', to: '/#work' },
  { id: 'services', label: 'Services', to: '/#services' },
  { id: 'process', label: 'Process', to: '/#process' },
  { id: 'about', label: 'About', to: '/#about' },
  { id: 'contact', label: 'Contact', to: '/#contact' },
]

export const primaryAction = { label: 'Start a project', to: '/#contact' }

// Footer-only links to the policy pages.
export const legalLinks = [
  { label: 'Privacy Policy', to: '/privacy' },
  { label: 'Terms & Conditions', to: '/terms' },
  { label: 'Cookies Policy', to: '/cookies' },
]

// Section ids on the home page, in page order (used for the active-link highlight).
export const sectionIds = navLinks.map((link) => link.id)

// Add real profiles only when they exist. Nothing is rendered while this list is empty.
// Example: { label: 'GitHub', href: 'https://github.com/your-handle' }
export const socialLinks = []
