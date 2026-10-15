import { useEffect, useState } from 'react'

// Returns the id of the section currently crossing the middle of the viewport.
export default function useActiveSection(ids, enabled = true) {
  const [active, setActive] = useState('')

  useEffect(() => {
    if (!enabled || typeof IntersectionObserver === 'undefined') {
      setActive('')
      return undefined
    }

    const elements = ids.map((id) => document.getElementById(id)).filter(Boolean)
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActive(entry.target.id)
        })
      },
      { rootMargin: '-40% 0px -55% 0px' },
    )
    elements.forEach((el) => observer.observe(el))

    // Clear the highlight when scrolled back above the first section.
    const onScroll = () => {
      if (window.scrollY < 200) setActive('')
    }
    window.addEventListener('scroll', onScroll, { passive: true })

    return () => {
      observer.disconnect()
      window.removeEventListener('scroll', onScroll)
    }
  }, [ids, enabled])

  return active
}
