import CodeRain from '../ui/CodeRain'
import Scene from '../three/Scene'
import { useMagnetic } from '../../hooks/useMagnetic'

interface HeroProps {
  onViewWork: () => void
}

export default function Hero({ onViewWork }: HeroProps) {
  const magneticRef = useMagnetic(0.4)

  return (
    <section id="home" className="relative min-h-screen w-full overflow-hidden bg-navy-950">
      <CodeRain />
      <Scene />
      <div className="relative z-10 flex flex-col items-center justify-center min-h-screen px-6 text-center pointer-events-none">
        <p className="text-teal-400 font-mono text-sm md:text-base tracking-widest mb-4">AI FULL STACK DEVELOPER</p>
        <h1 className="text-5xl md:text-7xl font-bold text-white mb-4">Harsh <span className="text-amber-400">Anand</span></h1>
        <p className="text-gray-400 max-w-xl text-base md:text-lg">Building intelligent, scalable web experiences with React, Node.js, and AI.</p>
        <button
          ref={magneticRef as React.RefObject<HTMLButtonElement>}
          onClick={onViewWork}
          className="pointer-events-auto mt-8 px-6 py-3 border border-teal-400 text-teal-400 rounded-full hover:bg-teal-400 hover:text-navy-950 transition-colors cursor-pointer"
        >
          View My Work
        </button>
      </div>
    </section>
  )
}