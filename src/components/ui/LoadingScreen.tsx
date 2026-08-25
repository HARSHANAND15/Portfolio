import { useEffect, useState } from 'react'
import CodeRain from './CodeRain'

interface LoadingScreenProps {
  onComplete: () => void
}

const codeLine = 'System.out.println("Harsh Anand");'

export default function LoadingScreen({ onComplete }: LoadingScreenProps) {
  const [typedText, setTypedText] = useState('')
  const [showOutput, setShowOutput] = useState(false)
  const [fadeOut, setFadeOut] = useState(false)

  useEffect(() => {
    let index = 0
    const typeInterval = setInterval(() => {
      if (index <= codeLine.length) {
        setTypedText(codeLine.slice(0, index))
        index++
      } else {
        clearInterval(typeInterval)
        setTimeout(() => setShowOutput(true), 350)
      }
    }, 45)

    return () => clearInterval(typeInterval)
  }, [])

  useEffect(() => {
    if (!showOutput) return
    const fadeTimer = setTimeout(() => setFadeOut(true), 1700)
    const doneTimer = setTimeout(() => onComplete(), 2200)

    return () => {
      clearTimeout(fadeTimer)
      clearTimeout(doneTimer)
    }
  }, [showOutput, onComplete])

  return (
    <div
      className={`fixed inset-0 z-50 bg-navy-950 flex items-center justify-center transition-opacity duration-500 ${
        fadeOut ? 'opacity-0' : 'opacity-100'
      }`}
    >
      <CodeRain />

      <div className="relative z-10 px-6 font-mono w-full max-w-xl">
        {/* IDE-style window */}
        <div className="rounded-xl overflow-hidden border border-navy-700 shadow-[0_0_40px_-10px_rgba(45,212,191,0.35)]">
          {/* Title bar */}
          <div className="flex items-center gap-2 bg-navy-800 px-4 py-2.5 border-b border-navy-700">
            <span className="w-3 h-3 rounded-full bg-red-500/80" />
            <span className="w-3 h-3 rounded-full bg-amber-400/80" />
            <span className="w-3 h-3 rounded-full bg-teal-400/80" />
            <span className="ml-3 text-gray-400 text-xs">Main.java</span>
          </div>

          {/* Code body */}
          <div className="bg-navy-900 p-5 md:p-6">
            <p className="text-sm md:text-base leading-7">
              <span className="text-indigo-400">public class</span>{' '}
              <span className="text-teal-400">Main</span> {'{'}
            </p>
            <p className="text-sm md:text-base leading-7 pl-4 md:pl-6">
              <span className="text-indigo-400">public static void</span>{' '}
              <span className="text-teal-400">main</span>
              <span className="text-white">(</span>
              <span className="text-amber-300">String[] args</span>
              <span className="text-white">) {'{'}</span>
            </p>
            <p className="text-sm md:text-base leading-7 pl-8 md:pl-12 min-h-[1.75em]">
              <span className="text-white">{typedText}</span>
              {!showOutput && (
                <span className="inline-block w-[2px] h-4 bg-teal-400 ml-0.5 align-middle animate-[blink_0.8s_step-end_infinite]" />
              )}
            </p>
            <p className="text-sm md:text-base leading-7 pl-4 md:pl-6 text-white">{'}'}</p>
            <p className="text-sm md:text-base leading-7 text-white">{'}'}</p>
          </div>

          {/* Terminal / Output */}
          <div className="bg-black border-t border-navy-700 px-5 md:px-6 py-4">
            <p className="text-gray-500 text-xs mb-2 flex items-center gap-1.5">
              <span className="text-teal-500">➜</span> run: Main.main()
            </p>
            <p
              className={`text-2xl md:text-4xl font-bold tracking-tight transition-all duration-700 ${
                showOutput
                  ? 'opacity-100 translate-y-0 scale-100'
                  : 'opacity-0 translate-y-3 scale-95'
              }`}
              style={{
                color: '#fbbf24',
                textShadow: showOutput
                  ? '0 0 20px rgba(251,191,36,0.5), 0 0 40px rgba(251,191,36,0.25)'
                  : 'none',
              }}
            >
              {showOutput && 'Harsh Anand'}
            </p>
            {showOutput && (
              <p className="text-teal-500/70 text-xs mt-3 animate-pulse">
                Process finished with exit code 0
              </p>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}