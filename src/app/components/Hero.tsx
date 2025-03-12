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
            <a href="#contact" className="btn contact-btn">Contact Me</a>
          </div>
          <SocialLinks />
        </div>
      </div>
      
      {/* <style jsx>{`
        .hero {
          min-height: 100vh;
          display: flex;
          align-items: center;
          padding: 6rem 0;
          background: linear-gradient(135deg, #f5f7fa 0%, #c3cfe2 100%);
        }
        
        .hero-container {
          display: flex;
          align-items: center;
          justify-content: center;
          text-align: center;
        }
        
        .hero-content {
          max-width: 800px;
        }
        
        .hero h1 {
          font-size: 3rem;
          font-weight: 700;
          margin-bottom: 1rem;
          color: var(--secondary-color);
        }
        
        .hero h2 {
          font-size: 2rem;
          font-weight: 600;
          margin-bottom: 1.5rem;
          color: var(--primary-color);
        }
        
        .hero p {
          font-size: 1.25rem;
          line-height: 1.6;
          margin-bottom: 2rem;
          color: var(--text-color);
        }
        
        .hero-btns {
          display: flex;
          gap: 1rem;
          justify-content: center;
          margin-bottom: 2rem;
        }
        
        .contact-btn {
          background-color: transparent;
          border: 2px solid var(--primary-color);
          color: var(--primary-color);
        }
        
        .contact-btn:hover {
          background-color: var(--primary-color);
          color: white;
        }
        
        @media (max-width: 768px) {
          .hero {
            padding: 5rem 0;
          }
          
          .hero h1 {
            font-size: 2.5rem;
          }
          
          .hero h2 {
            font-size: 1.5rem;
          }
          
          .hero p {
            font-size: 1rem;
          }
          
          .hero-btns {
            flex-direction: column;
            gap: 0.75rem;
          }
        }
      `}</style> */}
    </section>
  );
};

export default Hero; 