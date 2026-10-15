import { motion } from 'motion/react'
import Container from '../layout/Container.jsx'
import Button from '../ui/Button.jsx'

// Layers read top (idea) to bottom (infrastructure). They animate in from the foundation upward.
const layers = [
  { id: '01', name: 'Idea', detail: 'Problem · Concept', inset: 'sm:mr-24' },
  { id: '02', name: 'Software', detail: 'Web · Apps · APIs', inset: 'sm:mr-12' },
  { id: '03', name: 'Systems', detail: 'ERP · POS · Integrations', inset: 'sm:mr-4' },
  { id: '04', name: 'Infrastructure', detail: 'Networks · Hardware · Hosting', inset: '' },
]

function SystemDiagram() {
  return (
    <figure
      aria-label="Diagram: an idea supported by software, systems, and infrastructure as connected layers"
      className="relative mx-auto w-full max-w-md lg:max-w-none"
    >
      <ol className="relative flex flex-col">
        {layers.map((layer, index) => {
          const fromBottom = layers.length - 1 - index
          return (
            <motion.li
              key={layer.id}
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.15 + fromBottom * 0.1, ease: [0.22, 1, 0.36, 1] }}
              className={`relative ${layer.inset}`}
            >
              <div
                className={`flex flex-col items-start gap-1 rounded-md border px-4 py-4 min-[420px]:flex-row min-[420px]:items-center min-[420px]:justify-between min-[420px]:gap-4 sm:px-6 sm:py-6 ${
                  index === 0 ? 'border-electric bg-pale' : 'border-obsidian/15 bg-paper'
                }`}
              >
                <div>
                  <p className="label-mono text-slate">{layer.id}</p>
                  <p className="mt-1 font-display text-xl font-semibold sm:text-2xl">{layer.name}</p>
                </div>
                <p className="label-mono text-slate min-[420px]:text-right">{layer.detail}</p>
              </div>
              {index < layers.length - 1 && (
                <div aria-hidden="true" className="relative mx-6 flex h-6 justify-between sm:h-7">
                  <span className="relative block w-px bg-electric/60">
                    <span className="absolute -left-[3px] -top-[3px] h-[7px] w-[7px] bg-electric" />
                  </span>
                  <span className="relative hidden w-px bg-obsidian/20 sm:block" />
                  <span className="relative block w-px bg-obsidian/20" />
                </div>
              )}
            </motion.li>
          )
        })}
      </ol>
    </figure>
  )
}

export default function Hero() {
  return (
    <section aria-labelledby="hero-heading" className="bg-grid relative overflow-hidden border-b border-obsidian/10">
      {/* Fade the grid out toward the bottom so it never competes with the content. */}
      <div aria-hidden="true" className="pointer-events-none absolute inset-0 bg-gradient-to-b from-porcelain/0 via-porcelain/40 to-porcelain" />

      <Container className="relative grid items-center gap-14 pb-16 pt-12 sm:pt-16 lg:grid-cols-12 lg:gap-12 lg:pb-28 lg:pt-24">
        <div className="lg:col-span-7">
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.45 }}
            className="label-mono flex items-center gap-3 text-obsidian"
          >
            <span aria-hidden="true" className="h-2 w-2 bg-electric" />
            Independent technology &amp; digital studio
          </motion.p>

          <motion.h1
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.05, ease: [0.22, 1, 0.36, 1] }}
            id="hero-heading"
            className="mt-6 text-[2.5rem] font-semibold leading-[1.04] sm:text-6xl lg:text-[4.25rem] xl:text-7xl"
          >
            <span className="text-slate">Ideas are only the beginning.</span>{' '}
            <span>We build what moves them forward.</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.55, delay: 0.15 }}
            className="mt-7 max-w-xl text-base leading-relaxed text-slate sm:text-lg"
          >
            ARCLUME LABS brings software, systems, infrastructure, and creative thinking together to turn ideas into
            practical digital solutions.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.55, delay: 0.25 }}
            className="mt-9 flex flex-col gap-3 sm:flex-row"
          >
            <Button to="/#contact">Start a project</Button>
            <Button to="/#work" variant="secondary">
              Explore our work
            </Button>
          </motion.div>
        </div>

        <div className="lg:col-span-5">
          <SystemDiagram />
        </div>
      </Container>
    </section>
  )
}
