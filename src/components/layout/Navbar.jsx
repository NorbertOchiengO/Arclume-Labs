import { useEffect, useRef, useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { AnimatePresence, motion } from 'motion/react'
import { Menu, X } from 'lucide-react'
import Container from './Container.jsx'
import Button from '../ui/Button.jsx'
import HashLink from '../ui/HashLink.jsx'
import useActiveSection from '../../lib/useActiveSection.js'
import { navLinks, primaryAction, sectionIds } from '../../data/navigation.js'

export function Wordmark({ className = '', onDark = false }) {
  return (
    <span className={`flex items-center gap-2.5 ${className}`}>
      <img src="/arclume-mark.webp" alt="" width="35" height="28" className="h-7 w-auto" />
      <span className="font-display text-lg font-bold leading-none tracking-tight">
        ARCLUME
        <span className={`ml-1.5 font-mono text-xs font-medium tracking-[0.28em] ${onDark ? 'text-pale' : 'text-electric'}`}>
          LABS
        </span>
      </span>
    </span>
  )
}

export default function Navbar() {
  const { pathname, hash } = useLocation()
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)
  const buttonRef = useRef(null)
  const onHome = pathname === '/'
  const activeSection = useActiveSection(sectionIds, onHome)
  const activeId = pathname === '/work' ? 'work' : activeSection

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  // Close the mobile menu after any navigation.
  useEffect(() => {
    setOpen(false)
  }, [pathname, hash])

  // Escape closes the menu and returns focus to the toggle.
  useEffect(() => {
    if (!open) return undefined
    const onKeyDown = (event) => {
      if (event.key === 'Escape') {
        setOpen(false)
        buttonRef.current?.focus()
      }
    }
    document.addEventListener('keydown', onKeyDown)
    return () => document.removeEventListener('keydown', onKeyDown)
  }, [open])

  return (
    <header
      className={`sticky top-0 z-50 border-b transition-colors duration-300 ${
        scrolled || open ? 'border-obsidian/10 bg-porcelain/95 backdrop-blur-sm' : 'border-transparent bg-porcelain'
      }`}
    >
      <a
        href="#main"
        className="sr-only rounded-md bg-obsidian px-4 py-2 text-sm text-white focus:not-sr-only focus:absolute focus:left-4 focus:top-3 focus:z-50"
      >
        Skip to content
      </a>

      <Container as="nav" aria-label="Primary" className="flex h-16 items-center justify-between lg:h-[72px]">
        <Link to="/" aria-label="ARCLUME LABS, home" className="rounded-md">
          <Wordmark />
        </Link>

        <ul className="hidden items-center gap-1 lg:flex">
          {navLinks.map((link) => {
            const active = activeId === link.id
            return (
              <li key={link.id}>
                <HashLink
                  to={link.to}
                  aria-current={active ? 'true' : undefined}
                  className={`relative inline-flex min-h-11 items-center rounded-md px-3.5 text-sm transition-colors duration-200 hover:text-electric ${
                    active ? 'text-obsidian' : 'text-slate'
                  }`}
                >
                  {link.label}
                  <span
                    aria-hidden="true"
                    className={`absolute inset-x-3.5 bottom-2 h-px bg-electric transition-transform duration-300 origin-left ${
                      active ? 'scale-x-100' : 'scale-x-0'
                    }`}
                  />
                </HashLink>
              </li>
            )
          })}
        </ul>

        <div className="hidden lg:block">
          <Button to={primaryAction.to}>{primaryAction.label}</Button>
        </div>

        <button
          ref={buttonRef}
          type="button"
          onClick={() => setOpen((value) => !value)}
          aria-expanded={open}
          aria-controls="mobile-menu"
          aria-label={open ? 'Close menu' : 'Open menu'}
          className="-mr-2 inline-flex h-11 w-11 items-center justify-center rounded-md hover:bg-paper lg:hidden"
        >
          {open ? <X aria-hidden="true" className="h-6 w-6" /> : <Menu aria-hidden="true" className="h-6 w-6" />}
        </button>
      </Container>

      <AnimatePresence>
        {open && (
          <motion.div
            id="mobile-menu"
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.2 }}
            className="absolute inset-x-0 top-full max-h-[calc(100dvh-4rem)] overflow-y-auto border-b border-obsidian/10 bg-porcelain lg:hidden"
          >
            <Container className="py-4">
              <ul>
                {navLinks.map((link) => (
                  <li key={link.id} className="border-b border-obsidian/10 last:border-b-0">
                    <HashLink
                      to={link.to}
                      onClick={() => setOpen(false)}
                      aria-current={activeId === link.id ? 'true' : undefined}
                      className={`flex min-h-14 items-center justify-between font-display text-2xl font-medium ${
                        activeId === link.id ? 'text-electric' : 'text-obsidian'
                      }`}
                    >
                      {link.label}
                    </HashLink>
                  </li>
                ))}
              </ul>
              <Button to={primaryAction.to} onClick={() => setOpen(false)} className="mt-5 w-full">
                {primaryAction.label}
              </Button>
            </Container>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  )
}
