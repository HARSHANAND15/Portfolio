import { GithubIcon } from '../ui/BrandIcons'
import { projects } from '../../data/portfolio'
import Reveal from '../ui/Reveal'
import SplitText from '../ui/SplitText'

function ProjectCard({ project }: { project: (typeof projects)[number] }) {
  return (
    <div className="group [perspective:1200px] h-56">
      <div className="relative w-full h-full transition-transform duration-500 [transform-style:preserve-3d] group-hover:[transform:rotateY(180deg)]">
        <div className="absolute inset-0 [backface-visibility:hidden] border border-navy-700 rounded-2xl p-6 bg-navy-950 flex flex-col justify-between">
          <div>
            <div className="flex items-center justify-between mb-4">
              <div className="w-10 h-10 rounded-xl bg-teal-400/10 flex items-center justify-center text-teal-400">
                <GithubIcon size={18} />
              </div>
              {project.deployed ? (
                <span className="flex items-center gap-1.5 text-xs text-teal-400 font-mono px-2.5 py-1 rounded-full bg-teal-400/10 border border-teal-400/20">
                  <span className="relative flex w-1.5 h-1.5">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-teal-400 opacity-75" />
                    <span className="relative inline-flex rounded-full w-1.5 h-1.5 bg-teal-400" />
                  </span>
                  Live
                </span>
              ) : (
                <span className="flex items-center gap-1.5 text-xs text-gray-500 font-mono px-2.5 py-1 rounded-full bg-navy-800 border border-navy-700">
                  <span className="w-1.5 h-1.5 rounded-full bg-gray-600" />
                  Not Deployed
                </span>
              )}
            </div>
            <h3 className="text-lg font-semibold text-white">{project.title}</h3>
          </div>
          <div className="flex flex-wrap gap-2">
            {project.tech.map((t) => (
              <span key={t} className="text-xs px-2.5 py-1 rounded-full bg-navy-800 text-amber-300">
                {t}
              </span>
            ))}
          </div>
        </div>

        <div className="absolute inset-0 [backface-visibility:hidden] [transform:rotateY(180deg)] border border-teal-400/50 rounded-2xl p-6 bg-navy-900 flex flex-col justify-between">
          <div>
            <h3 className="text-sm font-semibold text-teal-300 mb-2">{project.title}</h3>
            <p className="text-gray-300 text-xs leading-relaxed">{project.description}</p>
          </div>
          <div className="flex items-center gap-4">
            {project.link && (
              <a href={project.link} target="_blank" rel="noreferrer" className="inline-flex items-center gap-1.5 text-teal-400 text-xs font-mono hover:underline w-fit">
                <GithubIcon size={14} />
                Code
              </a>
            )}
            {project.deployed && project.liveLink && (
              <a href={project.liveLink} target="_blank" rel="noreferrer" className="inline-flex items-center gap-1.5 text-amber-400 text-xs font-mono hover:underline w-fit">
                Live Demo ↗
              </a>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}

export default function Projects() {
  return (
    <section id="projects" className="py-24 px-6 md:px-16 bg-navy-900/40">
      <div className="max-w-5xl mx-auto">
        <Reveal>
          <p className="text-teal-400 font-mono text-sm mb-2">04. Work</p>
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-3">
            <SplitText text="Featured Projects" />
          </h2>
          <p className="text-gray-500 text-sm mb-10">Hover a card to see project details</p>
        </Reveal>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, i) => (
            <Reveal key={project.title} delay={i * 80}>
              <ProjectCard project={project} />
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}