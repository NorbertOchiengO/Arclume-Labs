import Container from '../layout/Container.jsx'
import SectionHeading from '../ui/SectionHeading.jsx'
import Reveal from '../ui/Reveal.jsx'

const disciplines = ['Software', 'Systems', 'Infrastructure', 'Creative']

export default function About() {
  return (
    <section id="about" tabIndex={-1} aria-labelledby="about-heading" className="scroll-mt-16 py-20 outline-none lg:scroll-mt-[72px] lg:py-28">
      <Container className="grid gap-12 lg:grid-cols-12 lg:gap-16">
        <div className="lg:col-span-6">
          <SectionHeading
            id="about-heading"
            label="About the studio"
            title="More than a digital presence. A foundation for what comes next."
          />
        </div>

        <Reveal className="lg:col-span-6 lg:pt-10">
          <div className="space-y-6 text-base leading-relaxed text-slate sm:text-lg">
            <p>
              ARCLUME LABS operates at the intersection of software, systems, infrastructure, and creative design. Our
              approach is practical: understand the problem, design the right solution, and build technology that
              serves a clear purpose.
            </p>
            <p>
              From a business website to a connected operational system, we focus on creating digital foundations that
              can grow with the people and organizations using them.
            </p>
          </div>

          <ul aria-label="Disciplines" className="mt-10 grid grid-cols-2 border-t border-obsidian/15 sm:grid-cols-4">
            {disciplines.map((discipline, index) => (
              <li
                key={discipline}
                className="label-mono border-b border-obsidian/15 py-4 text-obsidian sm:border-b-0 sm:pr-4"
              >
                <span className="mr-2 text-electric">{String(index + 1).padStart(2, '0')}</span>
                {discipline}
              </li>
            ))}
          </ul>
        </Reveal>
      </Container>
    </section>
  )
}
