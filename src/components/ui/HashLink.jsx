import { Link, useLocation } from 'react-router-dom'

// A router Link for "/#section" targets. If the visitor is already on that hash,
// the router would do nothing, so scroll to the section manually.
export default function HashLink({ to, onClick, children, ...props }) {
  const { pathname, hash } = useLocation()

  const handleClick = (event) => {
    onClick?.(event)
    if (event.defaultPrevented || typeof to !== 'string' || !to.startsWith('/#')) return

    const id = to.slice(2)
    if (pathname === '/' && hash === `#${id}`) {
      const el = document.getElementById(id)
      if (el) {
        event.preventDefault()
        el.scrollIntoView()
        el.focus({ preventScroll: true })
      }
    }
  }

  return (
    <Link to={to} onClick={handleClick} {...props}>
      {children}
    </Link>
  )
}
