import Hero from './components/Hero';
import About from './components/About';
import Projects from './components/Projects';

const Home: React.FC = () => {
  return (
    <main>
      <Hero />
      <Projects />
      <About />
    </main>
  );
};

export default Home;