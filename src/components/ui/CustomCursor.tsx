import { useEffect, useRef } from 'react'

export default function CustomCursor() {
  const dotRef = useRef<HTMLDivElement>(null)
  const ringRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const dot = dotRef.current
    const ring = ringRef.current
    if (!dot || !ring) return

    let ringX = 0, ringY = 0

    const move = (e: MouseEvent) => {
      dot.style.transform = `translate(${e.clientX}px, ${e.clientY}px)`
      ringX = e.clientX
      ringY = e.clientY
    }

    const animateRing = () => {
      ring.style.transform = `translate(${ringX}px, ${ringY}px)`
      requestAnimationFrame(animateRing)
    }

    const grow = () => ring.classList.add('scale-150', 'border-amber-400')
    const shrink = () => ring.classList.remove('scale-150', 'border-amber-400')

    window.addEventListener('mousemove', move)
    document.querySelectorAll('a, button').forEach((el) => {
      el.addEventListener('mouseenter', grow)
      el.addEventListener('mouseleave', shrink)
    })

    requestAnimationFrame(animateRing)

    return () => {
      window.removeEventListener('mousemove', move)
      document.querySelectorAll('a, button').forEach((el) => {
        el.removeEventListener('mouseenter', grow)
        el.removeEventListener('mouseleave', shrink)
      })
    }
  }, [])

  return (
    <>
      <div
        ref={dotRef}
        className="hidden md:block fixed top-0 left-0 w-2 h-2 -ml-1 -mt-1 rounded-full bg-teal-400 pointer-events-none z-[100]"
      />
      <div
        ref={ringRef}
        className="hidden md:block fixed top-0 left-0 w-8 h-8 -ml-4 -mt-4 rounded-full border border-teal-400/60 pointer-events-none z-[100] transition-transform duration-200 ease-out"
      />
    </>
  )
}