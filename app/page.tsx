import Hero from './components/Hero';
import About from './components/About';
import Projects from './components/Projects';
import { getPageMetadata } from './seo/metadata';
import { getPersonSchema, SchemaMarkup } from './seo/jsonld';
import { Metadata } from 'next';

export const metadata: Metadata = {
  ...getPageMetadata('home'),
  openGraph: {
    ...getPageMetadata('home').openGraph,
    images: [
      {
        url: '/shardly_porfolio_home_page.png',
        width: 1200,
        height: 630,
        alt: 'Shardly Romelus | Portfolio',
      },
    ],
  },
  twitter: {
    ...getPageMetadata('home').twitter,
    images: ['/shardly_porfolio_home_page.png'],
  },
};

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