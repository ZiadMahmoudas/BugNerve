import { useEffect } from 'react'
import { Outlet, useLocation } from 'react-router-dom'
import Navbar from './Navbar'
import Footer from './Footer'
import useLenis from '../../hooks/useLenis'
import useRevealObserver from '../../hooks/useRevealObserver'

export default function PublicLayout({ theme, onToggleTheme }) {
  useLenis()
  const location = useLocation()
  useRevealObserver(location.pathname)

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [location.pathname])

  return (
    <div className="site-shell">
      <Navbar theme={theme} onToggleTheme={onToggleTheme} />
      <main className="page-transition" key={location.pathname}>
        <Outlet />
      </main>
      <Footer />
    </div>
  )
}
