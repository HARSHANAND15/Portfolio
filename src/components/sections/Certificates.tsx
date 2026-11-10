import { Award, Download } from 'lucide-react'
import Reveal from '../ui/Reveal'
import SplitText from '../ui/SplitText'

export default function Certificates() {
  return (
    <section id="certificates" className="relative z-10 py-16 sm:py-24 px-4 sm:px-6 md:px-16 overflow-hidden">
      <div className="relative max-w-4xl mx-auto">
        <Reveal>
          <p className="text-teal-400 font-mono text-sm mb-2 tracking-widest">04. ACHIEVEMENTS</p>
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-10">
            <SplitText text="Certificates" />
          </h2>
        </Reveal>

        <Reveal delay={100}>
          <div className="flex flex-col sm:flex-row sm:items-center gap-5 p-4 sm:p-6 rounded-2xl border border-navy-700 bg-navy-900 hover:border-teal-400/50 transition-colors">
            <div className="w-12 h-12 shrink-0 rounded-xl bg-teal-400/10 flex items-center justify-center text-teal-400">
              <Award size={24} />
            </div>
            <div className="flex-1 min-w-0">
              <h3 className="text-lg font-semibold text-white">Backend Developer Internship</h3>
              <p className="text-teal-300 text-sm mt-1">Awwaltech · May 25, 2026 — August 25, 2026</p>
            </div>
            <a
              href="/internship-certificate.pdf"
              download
              className="inline-flex w-fit items-center gap-2 px-4 py-2 rounded-full border border-teal-400/50 text-teal-400 text-sm hover:bg-teal-400/10 transition-colors"
            >
              <Download size={16} />
              Download PDF
            </a>
          </div>
        </Reveal>
      </div>
    </section>
  )
}
