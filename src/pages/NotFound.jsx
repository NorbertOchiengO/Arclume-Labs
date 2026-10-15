import Container from '../components/layout/Container.jsx'
import Button from '../components/ui/Button.jsx'

export default function NotFound() {
  return (
    <section aria-labelledby="not-found-heading" className="py-24 lg:py-36">
      <Container>
        <p className="label-mono text-electric">Error 404</p>
        <h1 id="not-found-heading" className="mt-5 max-w-2xl text-4xl font-semibold sm:text-6xl">
          This page isn&apos;t part of the structure.
        </h1>
        <p className="mt-5 max-w-xl text-lg text-slate">The page you were looking for does not exist or has moved.</p>
        <div className="mt-9 flex flex-col gap-3 sm:flex-row">
          <Button to="/">Back to home</Button>
          <Button to="/work" variant="secondary">
            View our work
          </Button>
        </div>
      </Container>
    </section>
  )
}
