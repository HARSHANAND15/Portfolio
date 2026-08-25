import { useEffect, useState } from 'react'

export default function ScrollProgress() {
  const [progress, setProgress] = useState(0)

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY
      const docHeight = document.documentElement.scrollHeight - window.innerHeight
      setProgress(docHeight > 0 ? (scrollTop / docHeight) * 100 : 0)
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <div className="fixed top-0 left-0 w-full h-[3px] z-50 bg-navy-800/50">
      <div
        className="h-full bg-gradient-to-r from-teal-400 via-indigo-400 to-amber-400 shadow-[0_0_8px_rgba(45,212,191,0.6)]"
        style={{ width: `${progress}%`, transition: 'width 0.1s ease-out' }}
      />
    </div>
  )
}