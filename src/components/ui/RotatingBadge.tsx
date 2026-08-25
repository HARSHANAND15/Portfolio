export default function RotatingBadge() {
  return (
    <div className="relative w-24 h-24 md:w-28 md:h-28">
      <svg viewBox="0 0 100 100" className="w-full h-full animate-[spin_12s_linear_infinite]">
        <defs>
          <path id="circlePath" d="M 50,50 m -38,0 a 38,38 0 1,1 76,0 a 38,38 0 1,1 -76,0" />
        </defs>
        <text fill="#2dd4bf" fontSize="8.2" letterSpacing="2.5" className="uppercase font-mono">
          <textPath href="#circlePath">
            Full Stack Developer • Open To Work •
          </textPath>
        </text>
      </svg>
      <div className="absolute inset-0 flex items-center justify-center">
        <span className="text-teal-400 text-lg">↗</span>
      </div>
    </div>
  )
}