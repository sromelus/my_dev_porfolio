import SocialLinks from './SocialLinks';

const Hero: React.FC = () => {
  return (
    <section className="hero">
      <div className="container hero-container">
        <div className="hero-content">
          <h1>Hey, I&apos;m Shardly Romelus</h1>
          <h2>Web Developer</h2>
          <p>
          I am a result-oriented web developer based in Boston, dedicated to building and designing impactful web applications with clean, and user-friendly UIs that solve real-world problems. My primary goal is to develop efficient and scalable solutions that directly contribute to the overall success of the product. I bring a proactive and analytical approach to every project, always focused on delivering valuable results.
          </p>
          <div className="hero-btns">
            <a href="#projects" className="btn">View My Work</a>
            <a href="https://www.linkedin.com/in/shardlyromelus" className="btn contact-btn">Contact Me</a>
          </div>
          <SocialLinks />
        </div>
      </div>
    </section>
  );
};

export default Hero;