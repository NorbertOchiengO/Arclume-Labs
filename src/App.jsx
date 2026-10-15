import { useEffect } from 'react'
import { Route, Routes, useLocation } from 'react-router-dom'
import { MotionConfig } from 'motion/react'
import Navbar from './components/layout/Navbar.jsx'
import Footer from './components/layout/Footer.jsx'
import Home from './pages/Home.jsx'
import Work from './pages/Work.jsx'
import Privacy from './pages/Privacy.jsx'
import Terms from './pages/Terms.jsx'
import Cookies from './pages/Cookies.jsx'
import NotFound from './pages/NotFound.jsx'

// Unique title and description for every route. Unknown routes fall back to the 404 entry.
const PAGE_META = {
  '/': {
    title: 'ARCLUME LABS | Where Ideas Become Infrastructure',
    description:
      'ARCLUME LABS builds digital products, business systems, IT infrastructure, and creative experiences that help ideas move forward.',
  },
  '/work': {
    title: 'Selected Work | ARCLUME LABS',
    description:
      'Websites and digital concepts by ARCLUME LABS across logistics, healthcare, nonprofit, hospitality, aviation and pharmacy, each linked to its live site.',
  },
  '/privacy': {
    title: 'Privacy Policy | ARCLUME LABS',
    description:
      'What personal information the ARCLUME LABS website collects, why, and how to contact us about it.',
  },
  '/terms': {
    title: 'Terms & Conditions | ARCLUME LABS',
    description: 'The terms that apply when you use the ARCLUME LABS website.',
  },
  '/cookies': {
    title: 'Cookies Policy | ARCLUME LABS',
    description: 'The ARCLUME LABS website does not use cookies or tracking. This page explains what that means.',
  },
  notFound: {
    title: 'Page not found | ARCLUME LABS',
    description: 'The page you were looking for could not be found on the ARCLUME LABS website.',
  },
}

function setMetaTag(name, content) {
  let tag = document.head.querySelector(`meta[name="${name}"]`)
  if (!tag) {
    tag = document.createElement('meta')
    tag.setAttribute('name', name)
    document.head.appendChild(tag)
  }
  tag.setAttribute('content', content)
}

// Handles document title, meta tags, scroll position and /#section links on navigation.
function RouteEffects() {
  const { pathname, hash } = useLocation()

  useEffect(() => {
    const known = Object.prototype.hasOwnProperty.call(PAGE_META, pathname)
    const meta = known ? PAGE_META[pathname] : PAGE_META.notFound
    document.title = meta.title
    setMetaTag('description', meta.description)
    setMetaTag('robots', known ? 'index, follow' : 'noindex, follow')
  }, [pathname])

  useEffect(() => {
    if (hash) {
      const el = document.getElementById(decodeURIComponent(hash.slice(1)))
      if (el) {
        el.scrollIntoView()
        el.focus({ preventScroll: true })
        return
      }
    }
    window.scrollTo({ top: 0, left: 0, behavior: 'instant' })
  }, [pathname, hash])

  return null
}

export default function App() {
  return (
    // "user" honours the visitor's prefers-reduced-motion setting for transform animations.
    <MotionConfig reducedMotion="user">
      <RouteEffects />
      <div className="flex min-h-screen flex-col">
        <Navbar />
        <main id="main" tabIndex={-1} className="flex-1 outline-none">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/work" element={<Work />} />
            <Route path="/privacy" element={<Privacy />} />
            <Route path="/terms" element={<Terms />} />
            <Route path="/cookies" element={<Cookies />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </MotionConfig>
  )
}
