import { GraduationCap, School, BookOpen } from 'lucide-react'
import { education } from '../../data/portfolio'
import Reveal from '../ui/Reveal'
import SplitText from '../ui/SplitText'

const icons = [GraduationCap, BookOpen, School]

export default function Education() {
  return (
    <section id="education" className="relative z-10 py-24 px-6 md:px-16 overflow-hidden">
      <div className="absolute bottom-0 left-[10%] w-[350px] h-[350px] bg-indigo-500/10 rounded-full blur-[120px] pointer-events-none" />

      <div className="relative max-w-4xl mx-auto">
        <Reveal>
          <p className="text-teal-400 font-mono text-sm mb-2 tracking-widest">02. BACKGROUND</p>
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-14">
            <SplitText text="Education" />
          </h2>
        </Reveal>

        <div className="relative">
          <div className="absolute left-6 md:left-7 top-3 bottom-3 w-px bg-gradient-to-b from-teal-400 via-navy-700 to-transparent" />

          <div className="space-y-8">
            {education.map((edu, i) => {
              const Icon = icons[i % icons.length]
              return (
                <Reveal key={edu.degree} delay={i * 120}>
                  <div className="group relative flex gap-5 md:gap-7">
                    <div className="relative z-10 flex-shrink-0 w-12 h-12 md:w-14 md:h-14 rounded-2xl bg-navy-900 border border-navy-700 flex items-center justify-center group-hover:border-teal-400/60 group-hover:bg-teal-400/5 transition-all duration-300">
                      <Icon size={22} className="text-teal-400" />
                    </div>

                    <div className="flex-1 relative border border-navy-700 rounded-2xl p-6 bg-navy-950 group-hover:border-teal-400/50 group-hover:-translate-y-1 group-hover:shadow-[0_8px_30px_-10px_rgba(45,212,191,0.25)] transition-all duration-300">
                      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2 mb-2">
                        <h3 className="text-lg md:text-xl font-semibold text-white">{edu.degree}</h3>
                        <span className="inline-block w-fit text-xs font-mono px-3 py-1 rounded-full bg-amber-400/10 text-amber-400 border border-amber-400/20">
                          {edu.duration}
                        </span>
                      </div>
                      <p className="text-teal-300 text-sm md:text-base">{edu.institute}</p>
                      {edu.detail && (
                        <p className="text-gray-500 text-sm mt-1.5">{edu.detail}</p>
                      )}
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