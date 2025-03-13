import SocialLinks from './SocialLinks';

const Hero: React.FC = () => {
  return (
    <section className="hero">
      <div className="container hero-container">
        <div className="hero-content">
          <h1>Hey, I&apos;m Shardly Romelus</h1>
          <h2>Web Developer</h2>
          <p>
            A results-oriented web developer building and managing websites and web 
            applications that lead to the success of the overall product.
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