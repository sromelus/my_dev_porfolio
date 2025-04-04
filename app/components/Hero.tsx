import SocialLinks from './SocialLinks';
import styles from './styles/Hero.module.css';
import { projectsData } from './Projects';
import Image from 'next/image';
import Link from 'next/link';
import { shardlyRomelusPic } from '../../images';

const Hero: React.FC = () => {
  const skills = ['OOP', 'Ruby', 'JavaScript', 'Rails', 'Node.js', 'React', 'Next.js', 'TypeScript', 'PostgreSQL', 'SQL', 'Sidekiq', 'AWS', 'GCP', 'Rspec', 'Jest', 'Api Integration', 'Docker']

  const featuredProject = projectsData.find(project => project.slug === 'pdg-real-estate');
  return (
    <>
      {/* <!-- Background Elements --> */}
      <div className={styles.gradientBg}></div>
      <div className={`${styles.blob} ${styles.blob1}`}></div>
      <div className={`${styles.blob} ${styles.blob2}`}></div>
      <div className={styles.floatingShapes}>
          <div className={styles.shape1}></div>
          <div className={styles.shape2}></div>
          <div className={styles.shape3}></div>
      </div>

      {/* <!-- Hero Section --> */}
      <section id="home" className={`${styles.heroSection} ${styles.container} mx-auto px-4 md:px-8`}>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center md:mt-[-200px]">
          <div>
              <div className="flex flex-col gap-4 relative">
                <div className={`${styles.heroImage} ${styles.heroImageAnimation}`}>
                  <Image src={shardlyRomelusPic} alt="Shardly Romelus" className="profile-img" />
                </div>
                <div>
                  <h1 className={styles.heroTitle}>Hey, I&apos;m <p>Shardly Romelus</p></h1>
                  <h2 className={styles.heroSubtitle}>Web Developer / Software Engineer</h2>
                </div>
              </div>
              <p className="text-lg text-gray-600 mb-8">
              Based in Boston, I am passionate about developing and deploying high-quality web applications with clean, user-friendly UIs. My aim is to build intuitive and high-performing applications that enhance the user experience. I bring a proactive and analytical approach to every project, always focused on delivering valuable results.
              </p>
              <div className="flex flex-wrap gap-4">
                  <Link href="/#projects" className={styles.btnPrimary}>Current Projects</Link>
                  <Link href="https://www.linkedin.com/in/shardlyromelus/" target="_blank" className={styles.btnSecondary}>Contact Me</Link>
              </div>
              <SocialLinks />
          </div>
          <div className="hidden md:block">
              <div className={`${styles.card} relative overflow-hidden`}>
                  <div className="bg-blue-50 absolute -top-10 -right-10 w-40 h-40 rounded-full"></div>
                  <div className="bg-indigo-50 absolute -bottom-10 -left-10 w-32 h-32 rounded-full"></div>
                  <div className="relative z-10">
                      <h3 className="text-xl font-bold mb-4">Tools I&apos;m most familiar with</h3>
                      <div className="mb-6">
                          {skills.map((skill, index) => (
                              <span key={index} className={styles.skillTag}>{skill}</span>
                          ))}
                      </div>
                      <h3 className="text-xl font-bold mb-4">Latest Project</h3>
                      <div className="bg-gray-100 rounded-lg p-4 relative overflow-hidden">
                          <div className="absolute top-0 right-0 bg-blue-500 text-white text-xs px-2 py-1">FEATURED</div>
                          <h4 className="font-bold mb-2">{featuredProject?.title}</h4>
                          <p className="text-sm text-gray-600">{featuredProject?.description}</p>
                          <div className="mt-3">
                              <Link href="/#projects" className="text-blue-500 text-sm font-medium">View Details →</Link>
                          </div>
                      </div>
                  </div>
              </div>
          </div>
        </div>
      </section>
      <div className='hidden md:flex justify-center items-center relative'>
        <div className='text-4xl absolute bottom-20 animate-bounce'>↓</div>
      </div>
    </>
  );
};

export default Hero;