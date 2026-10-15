import { Link } from 'react-router-dom'
import { ArrowUpRight } from 'lucide-react'
import Container from './Container.jsx'
import Button from '../ui/Button.jsx'
import HashLink from '../ui/HashLink.jsx'
import ContactLinks from '../ui/ContactLinks.jsx'
import { Wordmark } from './Navbar.jsx'
import { legalLinks, navLinks, primaryAction, socialLinks } from '../../data/navigation.js'
import { services } from '../../data/services.js'
import { projects } from '../../data/projects.js'

const linkClass =
  'inline-flex min-h-11 items-center text-sm text-porcelain/70 transition-colors duration-200 hover:text-white'

function Column({ title, children }) {
  return (
    <div>
      <h2 className="label-mono text-porcelain/50">{title}</h2>
      <ul className="mt-4 space-y-1">{children}</ul>
    </div>
  )
}

export default function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer className="on-dark bg-obsidian text-porcelain">
      <Container className="py-16 lg:py-20">
        <div className="grid gap-12 lg:grid-cols-12">
          <div className="lg:col-span-4">
            <div className="text-porcelain">
              <Wordmark onDark />
            </div>
            <p className="mt-5 font-display text-xl font-medium leading-snug">Where Ideas Become Infrastructure.</p>
            <p className="mt-4 max-w-sm text-sm leading-relaxed text-porcelain/70">
              An independent technology and digital studio working across software, systems, infrastructure, and
              creative design.
            </p>
            <ContactLinks tone="dark" className="mt-6" />
            <Button to={primaryAction.to} className="mt-5">
              {primaryAction.label}
            </Button>
          </div>

          <div className="grid grid-cols-1 gap-x-6 gap-y-10 min-[400px]:grid-cols-2 lg:col-span-8 lg:grid-cols-4 lg:pl-8">
            <Column title="Navigate">
              {navLinks.map((link) => (
                <li key={link.id}>
                  <HashLink to={link.to} className={linkClass}>
                    {link.label}
                  </HashLink>
                </li>
              ))}
            </Column>

            <Column title="Services">
              {services.map((service) => (
                <li key={service.id}>
                  <HashLink to="/#services" className={linkClass}>
                    {service.title}
                  </HashLink>
                </li>
              ))}
            </Column>

            <Column title="Work">
              <li>
                <Link to="/work" className={linkClass}>
                  All projects
                </Link>
              </li>
              {projects.map((project) => (
                <li key={project.id}>
                  <a
                    href={project.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={`${project.title} (opens in a new tab)`}
                    className={`${linkClass} gap-1`}
                  >
                    {project.title}
                    <ArrowUpRight aria-hidden="true" className="h-3.5 w-3.5" />
                  </a>
                </li>
              ))}
            </Column>

            <Column title="Legal">
              {legalLinks.map((link) => (
                <li key={link.to}>
                  <Link to={link.to} className={linkClass}>
                    {link.label}
                  </Link>
                </li>
              ))}
            </Column>
          </div>
        </div>

        {socialLinks.length > 0 && (
          <ul className="mt-12 flex flex-wrap gap-x-6 gap-y-2">
            {socialLinks.map((link) => (
              <li key={link.href}>
                <a href={link.href} target="_blank" rel="noopener noreferrer" className={linkClass}>
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        )}

        <div className="mt-14 flex flex-col gap-3 border-t border-porcelain/15 pt-6 text-sm text-porcelain/60 sm:flex-row sm:items-center sm:justify-between">
          <p>© {year} ARCLUME LABS. All rights reserved.</p>
          <p>Thoughtful design and dependable engineering belong together.</p>
        </div>
      </Container>
    </footer>
  )
}
