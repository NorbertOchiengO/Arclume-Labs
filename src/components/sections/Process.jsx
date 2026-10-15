import Container from '../layout/Container.jsx'
import SectionHeading from '../ui/SectionHeading.jsx'
import Reveal from '../ui/Reveal.jsx'
import { processSteps } from '../../data/services.js'

export default function Process() {
  return (
    <section id="process" tabIndex={-1} aria-labelledby="process-heading" className="on-dark scroll-mt-16 bg-obsidian py-20 text-porcelain outline-none lg:scroll-mt-[72px] lg:py-28">
      <Container>
        <SectionHeading id="process-heading" label="How we work" title="From a clear problem to a working solution." tone="dark" />

        {/* Vertical timeline on mobile, five connected columns on large screens. */}
        <ol className="relative mt-14 lg:mt-20 lg:grid lg:grid-cols-5 lg:gap-6">
          <span aria-hidden="true" className="absolute bottom-2 left-[5px] top-2 w-px bg-porcelain/20 lg:bottom-auto lg:left-0 lg:right-0 lg:top-[5px] lg:h-px lg:w-auto" />
          {processSteps.map((step, index) => (
            <Reveal as="li" key={step.number} delay={index * 0.05} className="relative pb-10 pl-9 last:pb-0 lg:pb-0 lg:pl-0 lg:pt-10">
              <span aria-hidden="true" className="absolute left-0 top-1.5 h-[11px] w-[11px] bg-electric ring-4 ring-obsidian lg:top-0" />
              <p className="label-mono text-pale">{step.number}</p>
              <h3 className="mt-2 text-2xl font-semibold">{step.title}</h3>
              <p className="mt-3 max-w-xs leading-relaxed text-porcelain/70">{step.description}</p>
            </Reveal>
          ))}
        </ol>
      </Container>
    </section>
  )
}
