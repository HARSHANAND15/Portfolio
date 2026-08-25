import { Briefcase, Code2 } from 'lucide-react'
import { experience } from '../../data/portfolio'
import Reveal from '../ui/Reveal'
import SplitText from '../ui/SplitText'

const icons = [Briefcase, Code2]
const iconGradients = [
  'from-teal-400/20 to-indigo-500/20',
  'from-amber-400/20 to-teal-400/20',
]

export default function Experience() {
  return (
    <section id="experience" className="relative z-10 py-24 px-6 md:px-16 overflow-hidden">
      <div className="absolute top-0 right-[15%] w-[380px] h-[380px] bg-teal-500/10 rounded-full blur-[130px] pointer-events-none" />
      <div className="absolute bottom-10 left-[5%] w-[300px] h-[300px] bg-amber-500/5 rounded-full blur-[120px] pointer-events-none" />

      <div className="relative max-w-4xl mx-auto">
        <Reveal>
          <p className="text-teal-400 font-mono text-sm mb-2 tracking-widest">03. JOURNEY</p>
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-14">
            <SplitText text="Internship & Experience" />
          </h2>
        </Reveal>

        <div className="relative">
          <div className="absolute left-6 md:left-7 top-3 bottom-3 w-px bg-gradient-to-b from-teal-400 via-navy-700 to-transparent" />

          <div className="space-y-10">
            {experience.map((exp, i) => {
              const Icon = icons[i % icons.length]
              const isCurrent = exp.duration.toLowerCase().includes('ongoing')

              return (
                <Reveal key={exp.role + exp.company} delay={i * 120}>
                  <div className="group relative flex gap-5 md:gap-7">
                    <div className="relative z-10 flex-shrink-0">
                      {isCurrent && (
                        <span className="absolute -inset-1 rounded-2xl bg-teal-400/30 blur-md animate-pulse" />
                      )}
                      <div className={`relative w-12 h-12 md:w-14 md:h-14 rounded-2xl bg-gradient-to-br ${iconGradients[i % iconGradients.length]} border border-navy-700 flex items-center justify-center group-hover:border-teal-400/60 group-hover:scale-105 transition-all duration-300`}>
                        <Icon size={22} className="text-teal-300" />
                      </div>
                    </div>

                    <div className="flex-1 relative overflow-hidden border border-navy-700 rounded-2xl p-6 bg-navy-900 group-hover:border-teal-400/50 group-hover:-translate-y-1 group-hover:shadow-[0_8px_30px_-10px_rgba(45,212,191,0.3)] transition-all duration-300">
                      <div className="absolute -top-10 -right-10 w-32 h-32 bg-teal-400/0 group-hover:bg-teal-400/10 rounded-full blur-2xl transition-all duration-500" />

                      <div className="relative flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2 mb-1">
                        <h3 className="text-lg md:text-xl font-semibold text-white">
                          {exp.role}
                        </h3>
                        <div className="flex items-center gap-2">
                          {isCurrent && (
                            <span className="flex items-center gap-1.5 text-xs text-teal-400 font-mono">
                              <span className="relative flex w-1.5 h-1.5">
                                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-teal-400 opacity-75" />
                                <span className="relative inline-flex rounded-full w-1.5 h-1.5 bg-teal-400" />
                              </span>
                              Current
                            </span>
                          )}
                          <span className="inline-block w-fit text-xs font-mono px-3 py-1 rounded-full bg-amber-400/10 text-amber-400 border border-amber-400/20">
                            {exp.duration}
                          </span>
                        </div>
                      </div>
                      <p className="relative text-teal-300 text-sm md:text-base mb-4">{exp.company}</p>

                      <ul className="relative space-y-2.5">
                        {exp.points.map((point) => (
                          <li key={point} className="text-gray-400 text-sm flex gap-2.5">
                            <span className="text-teal-400 mt-0.5 flex-shrink-0">▹</span>
                            <span>{point}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </Reveal>
              )
            })}
          </div>
        </div>
      </div>
    </section>
  )
}