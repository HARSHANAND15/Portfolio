import { Mail, ArrowUpRight } from 'lucide-react'
import { GithubIcon, LinkedinIcon } from '../ui/BrandIcons'
import { contact } from '../../data/portfolio'
import Reveal from '../ui/Reveal'
import SplitText from '../ui/SplitText'

export default function Contact() {
  return (
    <section id="contact" className="relative z-10 py-28 px-6 md:px-16 overflow-hidden">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-teal-500/10 rounded-full blur-[120px] pointer-events-none" />

      <div className="relative max-w-2xl mx-auto text-center">
        <Reveal>
          <p className="text-teal-400 font-mono text-sm mb-2 tracking-widest">05. GET IN TOUCH</p>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-5">
            <SplitText text="Let's " />
            <SplitText text="Connect" className="text-amber-400" />
          </h2>
          <p className="text-gray-400 max-w-md mx-auto mb-14">
            Open to job, internship opportunities, collaborations, and interesting conversations.
          </p>
        </Reveal>

        <Reveal delay={150}>
          <div className="grid sm:grid-cols-2 gap-4 text-left">
            {contact.email && (
              <a href={"mailto:" + contact.email} className="group relative flex items-center gap-4 p-5 rounded-2xl border border-navy-700 bg-navy-900 hover:border-teal-400/60 hover:bg-navy-800/60 transition-all duration-300">
                <div className="w-11 h-11 rounded-xl bg-teal-400/10 flex items-center justify-center text-teal-400 group-hover:bg-teal-400 group-hover:text-navy-950 transition-colors">
                  <Mail size={20} />
                </div>
                <div className="flex-1 min-w-0">
                  <p className="text-xs text-gray-500 mb-0.5">Email</p>
                  <p className="text-white text-sm truncate">{contact.email}</p>
                </div>
                <ArrowUpRight size={16} className="text-gray-600 group-hover:text-teal-400 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all" />
              </a>
            )}

            <a href={contact.github} target="_blank" rel="noreferrer" className="group relative flex items-center gap-4 p-5 rounded-2xl border border-navy-700 bg-navy-900 hover:border-indigo-400/60 hover:bg-navy-800/60 transition-all duration-300">
              <div className="w-11 h-11 rounded-xl bg-indigo-400/10 flex items-center justify-center text-indigo-300 group-hover:bg-indigo-400 group-hover:text-navy-950 transition-colors">
                <GithubIcon size={20} />
              </div>
              <div className="flex-1 min-w-0">
                <p className="text-xs text-gray-500 mb-0.5">GitHub</p>
                <p className="text-white text-sm">HARSHANAND15</p>
              </div>
              <ArrowUpRight size={16} className="text-gray-600 group-hover:text-indigo-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all" />
            </a>

            {contact.linkedin && (
              <a href={contact.linkedin} target="_blank" rel="noreferrer" className="group relative flex items-center gap-4 p-5 rounded-2xl border border-navy-700 bg-navy-900 hover:border-teal-400/60 hover:bg-navy-800/60 transition-all duration-300">
                <div className="w-11 h-11 rounded-xl bg-teal-400/10 flex items-center justify-center text-teal-400 group-hover:bg-teal-400 group-hover:text-navy-950 transition-colors">
                  <LinkedinIcon size={20} />
                </div>
                <div className="flex-1 min-w-0">
                  <p className="text-xs text-gray-500 mb-0.5">LinkedIn</p>
                  <p className="text-white text-sm">Connect with me</p>
                </div>
                <ArrowUpRight size={16} className="text-gray-600 group-hover:text-teal-400 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all" />
              </a>
            )}
          </div>
        </Reveal>

        <Reveal delay={250}>
          <p className="text-gray-600 text-xs mt-20 font-mono">
            Built By Harsh Anand
          </p>
        </Reveal>
      </div>
    </section>
  )
}