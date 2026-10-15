import Container from '../layout/Container.jsx'
import SectionHeading from '../ui/SectionHeading.jsx'
import ServiceItem from '../ui/ServiceItem.jsx'
import { services } from '../../data/services.js'

export default function Services() {
  return (
    <section id="services" tabIndex={-1} aria-labelledby="services-heading" className="scroll-mt-16 border-t border-obsidian/10 bg-paper py-20 outline-none lg:scroll-mt-[72px] lg:py-28">
      <Container className="grid gap-12 lg:grid-cols-12 lg:gap-16">
        <div className="lg:col-span-5">
          <div className="lg:sticky lg:top-32">
            <SectionHeading id="services-heading" label="What we do" title="Technology that connects the pieces." />
          </div>
        </div>
        <ol className="lg:col-span-7">
          {services.map((service) => (
            <ServiceItem key={service.id} service={service} />
          ))}
        </ol>
      </Container>
    </section>
  )
}
