import { useEffect } from 'react'

export default function useRevealObserver(key = '') {
  useEffect(() => {
    const frame = requestAnimationFrame(() => {
      const nodes = [...document.querySelectorAll('[data-reveal]')]
      nodes.forEach(node => node.classList.add('reveal-ready'))

      const observer = new IntersectionObserver(
        entries => {
          entries.forEach(entry => {
            // Reversible observer: entering reveals, leaving resets the element so
            // scrolling back produces the reverse/re-entry animation naturally.
            entry.target.classList.toggle('is-visible', entry.isIntersecting)
          })
        },
        {
          threshold: [0, 0.12, 0.35],
          rootMargin: '-4% 0px -9% 0px',
        },
      )

      nodes.forEach(node => observer.observe(node))
      window.__bugnerveRevealObserver = observer
    })

    return () => {
      cancelAnimationFrame(frame)
      window.__bugnerveRevealObserver?.disconnect?.()
    }
  }, [key])
}
