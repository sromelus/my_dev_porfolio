import Hero from './components/Hero';
import About from './components/About';
import Projects from './components/Projects';
import { getPageMetadata } from './seo/metadata';
import { getPersonSchema, SchemaMarkup } from './seo/jsonld';

export const metadata = getPageMetadata('home');

export default function Home() {
  return (
    <>
      <SchemaMarkup schema={getPersonSchema()} />
      <main>
        <Hero />
        <Projects />
        <About />
      </main>
    </>
  );
}