import SocialLinks from './SocialLinks';
import styles from './styles/Hero.module.css';

const Hero: React.FC = () => {
  return (
    <section className={styles.hero}>
      <div className={styles.container}>
        <div className={styles.heroContent}>
          <h1>Hey, I&apos;m Shardly Romelus</h1>
          <h2>Web Developer</h2>
          <p>
          I am a result-oriented web developer based in Boston, dedicated to building and designing impactful web applications with clean, and user-friendly UIs that solve real-world problems. My primary goal is to develop efficient and scalable solutions that directly contribute to the overall success of the product. I bring a proactive and analytical approach to every project, always focused on delivering valuable results.
          </p>
          <div className={styles.heroBtns}>
            <a href="#projects" className={styles.btn}>View My Work</a>
            <a href="https://www.linkedin.com/in/shardlyromelus" target="_blank" rel="noopener noreferrer" className={styles.btn}>Contact Me</a>
          </div>
          <SocialLinks />
        </div>
      </div>
    </section>
  );
};

export default Hero;