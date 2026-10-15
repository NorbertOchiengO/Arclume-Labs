import Reveal from './Reveal.jsx'

// One row of the services list: number, title + description, capabilities.
export default function ServiceItem({ service }) {
  return (
    <Reveal as="li" className="group border-t border-obsidian/15 py-8 first:border-t-0 first:pt-0 sm:py-10">
      <article className="grid gap-4 sm:grid-cols-[4rem_1fr] sm:gap-8">
        <span className="label-mono pt-1.5 text-slate transition-colors duration-200 group-hover:text-electric">
          {service.number}
        </span>
        <div>
          <h3 className="text-2xl font-semibold sm:text-3xl">{service.title}</h3>
          <p className="mt-3 max-w-xl leading-relaxed text-slate">{service.description}</p>
          <ul className="mt-5 flex flex-wrap gap-x-5 gap-y-2 text-sm text-obsidian/80" aria-label={`${service.title} capabilities`}>
            {service.capabilities.map((capability) => (
              <li key={capability} className="flex items-center gap-2">
                <span aria-hidden="true" className="h-1 w-1 bg-electric" />
                {capability}
              </li>
            ))}
          </ul>
        </div>
      </article>
    </Reveal>
  )
}
