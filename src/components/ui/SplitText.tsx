import { useInView } from '../../hooks/useInView'

interface SplitTextProps {
  text: string
  className?: string
}

export default function SplitText({ text, className = '' }: SplitTextProps) {
  const { ref, isInView } = useInView()
  const letters = text.split('')

  return (
    <span ref={ref} className={`inline-block ${className}`}>
      {letters.map((char, i) => (
        <span
          key={i}
          className="inline-block transition-all duration-500 ease-out"
          style={{
            opacity: isInView ? 1 : 0,
            transform: isInView ? 'translateY(0)' : 'translateY(20px)',
            transitionDelay: isInView ? `${i * 30}ms` : '0ms',
          }}
        >
          {char === ' ' ? '\u00A0' : char}
        </span>
      ))}
    </span>
  )
}