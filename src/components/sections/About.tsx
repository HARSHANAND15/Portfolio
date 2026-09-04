import { skills } from '../../data/portfolio'
import Reveal from '../ui/Reveal'
import SplitText from '../ui/SplitText'

const navPills = ['About Me', 'Education', 'Experience', 'Projects', 'Contact']

export default function About() {
  return (
    <section id="about" className="relative z-10 py-24 px-6 md:px-16 overflow-hidden">
      <div className="absolute top-10 right-[8%] w-[400px] h-[400px] bg-teal-500/10 rounded-full blur-[130px] pointer-events-none" />

      <div className="relative max-w-6xl mx-auto">
        <div className="grid md:grid-cols-[240px_1fr] gap-10 md:gap-14 items-center mb-20">
          <Reveal>
            <div className="relative w-48 h-60 md:w-56 md:h-72 mx-auto md:mx-0">
              <div className="relative w-full h-full rounded-2xl overflow-hidden bg-navy-900 border border-navy-700">
                <img src="/harsh.jpg" alt="Harsh Anand" className="w-full h-full object-cover grayscale contrast-125" />
                <div className="absolute inset-0 bg-gradient-to-t from-navy-950/40 to-transparent" />
              </div>

              <div className="absolute -bottom-5 -left-5 w-20 h-20 rounded-full bg-navy-900 border border-teal-400/40 flex items-center justify-center">
                <svg viewBox="0 0 100 100" className="absolute w-full h-full animate-[spin_10s_linear_infinite]">
                  <defs>
                    <path id="aboutCirclePath" d="M 50,50 m -38,0 a 38,38 0 1,1 76,0 a 38,38 0 1,1 -76,0" />
                  </defs>
                  <text fill="#2dd4bf" fontSize="7.5" letterSpacing="1.5" className="uppercase font-mono">
                    <textPath href="#aboutCirclePath">Harsh Anand • Full Stack •</textPath>
                  </text>
                </svg>
                <span className="text-teal-400 text-sm font-bold">HA</span>
              </div>
            </div>
          </Reveal>

          <Reveal delay={100}>
            <p className="text-teal-400 font-mono text-xs md:text-sm tracking-[0.2em] mb-3 uppercase">
              Developer
            </p>
            <h2 className="text-3xl md:text-5xl font-bold text-white leading-[1.15] mb-5">
              <SplitText text="Code that thinks, " />
              <span className="text-amber-400"><SplitText text="products that scale" /></span>
            </h2>
            <p className="text-gray-400 text-sm md:text-base leading-relaxed max-w-xl mb-7">
              My mission is to blend clean engineering with AI — building products that are fast, intelligent, and built to grow.
            </p>
            <a href="mailto:harshanand55002@gmail.com" className="inline-flex items-center gap-2 px-5 py-2.5 bg-teal-400 text-navy-950 text-sm font-medium rounded-full hover:bg-teal-300 transition-colors">
              Happy to connect
              <span>💬</span>
            </a>
          </Reveal>
        </div>

        <Reveal delay={150}>
          <div className="flex flex-wrap justify-center gap-2 mb-20">
            {navPills.map((item, i) => (
              <a key={item} href={`#${item.toLowerCase().replace(' ', '-')}`} className={`px-4 py-2 text-xs md:text-sm rounded-full border transition-colors ${i === 0 ? 'border-teal-400 text-teal-400 bg-teal-400/5' : 'border-navy-700 text-gray-400 hover:border-teal-400/50 hover:text-teal-300'}`}>
                {item}
              </a>
            ))}
          </div>
        </Reveal>

        <Reveal delay={200}>
          <div className="relative text-center">
            <h3 className="text-5xl sm:text-6xl md:text-8xl font-bold text-white leading-none tracking-tight">
              BUILDING WITH
            </h3>
            <h3 className="text-5xl sm:text-6xl md:text-8xl font-bold leading-none tracking-tight mt-1">
              <span className="text-transparent [-webkit-text-stroke:1.5px_#2dd4bf]">CODE</span>
            </h3>
          </div>
        </Reveal>

        <Reveal delay={250}>
          <div className="flex flex-wrap justify-center gap-3 mt-14">
            {skills.map((skill) => (
              <span key={skill} className="px-4 py-2 text-sm rounded-full border border-navy-700 text-teal-300 bg-navy-900 hover:border-teal-400 hover:text-teal-200 hover:-translate-y-0.5 transition-all">
                {skill}
              </span>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  )
}