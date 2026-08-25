import { useEffect, useRef } from 'react'

export default function CodeRain() {
  const canvasRef = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return
    const ctx = canvas.getContext('2d')
    if (!ctx) return

    let animationId: number

    const resize = () => {
      canvas.width = window.innerWidth
      canvas.height = window.innerHeight
    }
    resize()
    window.addEventListener('resize', resize)

    // Code-like characters (mix of symbols, numbers, letters — coding feel)
    const chars =
      '01{}[]<>/;=+-*&|!?const let function return if else import export=>()'.split(
        ''
      )

    const fontSize = 16
    const columns = Math.floor(canvas.width / fontSize)
    // har column ki current drop position
    const drops: number[] = new Array(columns).fill(1)

    const draw = () => {
      // Fade effect — pichla frame halka fade hota hai (trail effect)
      ctx.fillStyle = 'rgba(5, 7, 15, 0.08)' // navy-950 with opacity
      ctx.fillRect(0, 0, canvas.width, canvas.height)

      ctx.font = `${fontSize}px monospace`

      for (let i = 0; i < drops.length; i++) {
        const text = chars[Math.floor(Math.random() * chars.length)]
        const x = i * fontSize
        const y = drops[i] * fontSize

        // Head of the drop — bright teal, rest — dim
        if (Math.random() > 0.975) {
          ctx.fillStyle = '#fbbf24' // amber highlight kabhi kabhi
        } else {
          ctx.fillStyle = '#2dd4bf' // teal
        }
        ctx.globalAlpha = Math.random() * 0.5 + 0.5
        ctx.fillText(text, x, y)
        ctx.globalAlpha = 1

        // Reset drop to top randomly after it goes off screen
        if (y > canvas.height && Math.random() > 0.975) {
          drops[i] = 0
        }
        drops[i]++
      }

      animationId = requestAnimationFrame(draw)
    }

    draw()

    return () => {
      window.removeEventListener('resize', resize)
      cancelAnimationFrame(animationId)
    }
  }, [])

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 z-0 pointer-events-none opacity-50"
    />
  )
}