import { useState } from 'react'
import { ArrowUpRight } from 'lucide-react'
import Reveal from './Reveal.jsx'

// Typographic, CSS-based preview that carries a hint of the project's own colours.
// No screenshots are claimed; if `image` is set and loads, it replaces the preview.
function Preview({ project, tall }) {
  const [failed, setFailed] = useState(false)
  const { bg, fg, accent } = project.palette

  if (project.image && !failed) {
    return (
      <img
        src={project.image}
        alt={`Screenshot of the ${project.title} website`}
        loading="lazy"
        onError={() => setFailed(true)}
        className="h-full w-full object-cover object-top"
      />
    )
  }

  return (
    <div
      aria-hidden="true"
      className="bg-grid-fine relative flex h-full w-full flex-col justify-between p-5 sm:p-7"
      style={{ backgroundColor: bg, color: fg }}
    >
      <div className="label-mono flex flex-wrap items-center justify-between gap-x-4 gap-y-1" style={{ color: accent }}>
        <span>{project.category}</span>
        <span>{project.type}</span>
      </div>
      <p
        className={`font-display font-semibold leading-[0.95] tracking-tight transition-transform duration-500 ease-out group-hover:translate-x-1 ${
          tall ? 'text-4xl sm:text-5xl lg:text-6xl' : 'text-3xl sm:text-4xl'
        }`}
      >
        {project.title}
      </p>
    </div>
  )
}

export default function ProjectCard({ project, size = 'regular', index = 0, className = '' }) {
  const tall = size === 'tall'
  return (
    <Reveal as="div" delay={Math.min(index * 0.06, 0.2)} className={className}>
      <article className="group relative flex h-full flex-col overflow-hidden rounded-lg border border-obsidian/10 bg-paper transition-shadow duration-300 hover:shadow-[0_12px_32px_-16px_rgb(23_26_25/0.25)]">
        <div className={`overflow-hidden ${tall ? 'aspect-[4/3] lg:aspect-auto lg:min-h-[22rem] lg:flex-1' : 'aspect-[16/10]'}`}>
          <Preview project={project} tall={tall} />
        </div>

        <div className="flex flex-col gap-3 p-5 sm:p-6">
          <h3 className="text-xl font-semibold sm:text-2xl">
            <a
              href={project.url}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`${project.title}: visit live project (opens in a new tab)`}
              className="inline-flex items-center gap-2 focus-visible:outline-none after:absolute after:inset-0 after:rounded-lg focus-visible:after:outline-2 focus-visible:after:outline-offset-2 focus-visible:after:outline-electric"
            >
              {project.title}
              <ArrowUpRight
                aria-hidden="true"
                className="h-5 w-5 text-electric transition-transform duration-200 group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
              />
            </a>
          </h3>
          <p className="label-mono text-slate">
            {project.category} · {project.type}
          </p>
          <p className="leading-relaxed text-slate">{project.description}</p>
          {project.altUrl && (
            <a
              href={project.altUrl}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`${project.title}: ${project.altLabel.toLowerCase()} (opens in a new tab)`}
              className="relative z-10 mt-1 w-fit text-sm font-medium text-electric underline decoration-electric/30 underline-offset-4 transition-colors hover:text-electric-hover hover:decoration-electric-hover"
            >
              {project.altLabel}
            </a>
          )}
        </div>
      </article>
    </Reveal>
  )
}
