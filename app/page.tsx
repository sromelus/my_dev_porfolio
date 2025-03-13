import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Projects from './components/Projects';
import Footer from './components/Footer';

const Home: React.FC = () => {
  return (
    <main>
      <Header />
      <Hero />
      <Projects />
      <About />
      <Footer />
    </main>
  );
};

export default Home;