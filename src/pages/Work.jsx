import Container from '../components/layout/Container.jsx'
import SectionHeading from '../components/ui/SectionHeading.jsx'
import ProjectCard from '../components/ui/ProjectCard.jsx'
import Button from '../components/ui/Button.jsx'
import { projects } from '../data/projects.js'

export default function Work() {
  return (
    <section aria-labelledby="work-page-heading" className="py-16 lg:py-24">
      <Container>
        <SectionHeading id="work-page-heading" label="All projects" title="Built with intention. Designed for impact.">
          Every project below links to its live website. Each is labelled to show whether it is a concept, a portfolio
          demonstration, or a live website.
        </SectionHeading>

        <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:mt-16 lg:grid-cols-3 lg:gap-6">
          {projects.map((project, index) => (
            <ProjectCard key={project.id} project={project} index={index % 3} />
          ))}
        </div>

        <div className="mt-16 flex flex-col items-start gap-5 border-t border-obsidian/15 pt-10 sm:flex-row sm:items-center sm:justify-between">
          <p className="max-w-xl font-display text-2xl font-medium leading-snug">Have something worth building?</p>
          <Button to="/#contact">Start a project</Button>
        </div>
      </Container>
    </section>
  )
}
