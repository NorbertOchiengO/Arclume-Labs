import { ArrowRight } from 'lucide-react'
import Container from '../layout/Container.jsx'
import SectionHeading from '../ui/SectionHeading.jsx'
import ProjectCard from '../ui/ProjectCard.jsx'
import Button from '../ui/Button.jsx'
import { featuredProjects } from '../../data/projects.js'

// Varied grid on desktop: wide/narrow alternating columns, with the large cards given more height.
const layout = [
  { span: 'lg:col-span-7', size: 'tall' },
  { span: 'lg:col-span-5', size: 'regular' },
  { span: 'lg:col-span-5', size: 'regular' },
  { span: 'lg:col-span-7', size: 'tall' },
]

export default function SelectedWork() {
  return (
    <section id="work" tabIndex={-1} aria-labelledby="work-heading" className="scroll-mt-16 py-20 outline-none lg:scroll-mt-[72px] lg:py-28">
      <Container>
        <SectionHeading id="work-heading" label="Selected work" title="Built with intention. Designed for impact.">
          A selection of digital experiences and technology concepts exploring how thoughtful design and engineering
          solve real-world problems.
        </SectionHeading>

        <div className="mt-12 grid gap-5 lg:mt-16 lg:grid-cols-12 lg:gap-6">
          {featuredProjects.map((project, index) => (
            <ProjectCard
              key={project.id}
              project={project}
              index={index}
              size={layout[index % layout.length].size}
              className={layout[index % layout.length].span}
            />
          ))}
        </div>

        <div className="mt-10 flex justify-start lg:mt-12">
          <Button to="/work" variant="secondary">
            View all projects
            <ArrowRight aria-hidden="true" className="h-4 w-4" />
          </Button>
        </div>
      </Container>
    </section>
  )
}
