import Image from 'next/image';
import Link from 'next/link';
import { pdgUsScreenshot, cprReadyScreenshot, theWeatherTodayScreenshot, shoppingCartRepoScreenshot, dailyPulseScreenshot } from '../../images';
// import { pollNestScreenshot } from '../../images';
import { StaticImageData } from 'next/image';
import styles from './styles/Projects.module.css';

// Project type definition
type Project = {
  id: number;
  title: string;
  description: string;
  imageUrl: StaticImageData;
  websiteUrl: string | null;
  tags: string[];
  type: 'personal' | 'client';
  slug: string;
  status: 'production' | 'upcoming' | 'in-development' | 'archived';
  githubUrl: string | null;
};

// Projects data
export const projectsData: Project[] = [
  {
    id: 1,
    title: 'PDG Real Estate',
    slug: 'pdg-real-estate',
    description: 'Website for a Real Estate Developer based in Fort Myers, FL showcasing their properties, services, and company information.',
    imageUrl: pdgUsScreenshot,
    websiteUrl: 'https://pdgus.com',
    githubUrl: null,
    tags: ['Web Development', 'Real Estate', 'Next.js', 'React', 'Typescript', 'Vercel'],
    type: 'client',
    status: 'production'
  },
  {
    id: 2,
    title: 'CPR Ready',
    slug: 'cpr-ready',
    description: 'CPR Ready is a CPR training agency, based in Naples, FL, that offers courses and certifications for CPR, First Aid, and AED.',
    imageUrl: cprReadyScreenshot,
    websiteUrl: 'https://cpr-ready.vercel.app/',
    githubUrl: null,
    tags: ['Web Development', 'Next.js', 'PostgreSQL', 'React', 'Typescript', 'Vercel'],
    type: 'client',
    status: 'in-development'
  },
  {
    id: 3,
    title: 'Daily Pulse',
    slug: 'daily-pulse',
    description: 'Daily Pulse is my blog where I write about interesting things I have learned while doom scrolling on the internet. The articles content are a mix of my own thoughts, what I have learned from the internet, and input from AI tools.',
    imageUrl: dailyPulseScreenshot,
    websiteUrl: 'https://www.currentpulsedaily.com/',
    githubUrl: null, //'https://github.com/sromelus/daily-pulse-blog',
    tags: ['Nextjs', 'React', 'Tailwind CSS', 'Turso'],
    type: 'personal',
    status: 'production'
  },
  // {
  //   id: 4,
  //   title: 'Pollnest',
  //   slug: 'pollnest',
  //   description: 'This is one of my latest projects that I have been working on. It is a social live voting game that allows users to vote on trending topics with real-time results, live chat, and more. I am currently working on the frontend, feel free to check out the backend repo on GitHub.',
  //   imageUrl: pollNestScreenshot,
  //   websiteUrl: 'https://pollnest.com',
  //   githubUrl: 'https://github.com/sromelus/pollnest-backend',
  //   tags: ['Node.js', 'Express', 'Next.js', 'React', 'Typescript', 'Tailwind CSS', 'MongoDB', 'Real-time', 'WebSockets', 'GCP'],
  //   type: 'personal',
  //   status: 'in-development'
  // },
  {
    id: 5,
    title: 'Shopping Cart System',
    slug: 'shopping-cart-system',
    description: 'I have been building this online shopping cart system as a side project. It is a simple shopping cart system that allows users to add and remove items to their cart apply promotions and checkout.',
    imageUrl: shoppingCartRepoScreenshot,
    websiteUrl: null,
    githubUrl: 'https://github.com/sromelus/shopping-cart-with-promotions-app',
    tags: ['Ruby', 'Rails', 'Rspec', 'Github Actions'],
    type: 'personal',
    status: 'archived'
  },
  {
    id: 6,
    title: 'The Weather Today',
    slug: 'the-weather-today',
    description: 'The Weather Today is a weather app that allows users to search for weather information for a specific location.',
    imageUrl: theWeatherTodayScreenshot,
    websiteUrl: 'https://sromelus.github.io/the-weather-today/#/',
    githubUrl: 'https://github.com/sromelus/the-weather-today',
    tags: ['React', 'vanilla CSS', 'weatherAPI integration'],
    type: 'personal',
    status: 'production'
  }
];

const Projects: React.FC = () => {
  return (
    <section id="projects" className={`${styles.projectsSection}`}>
      <div className={styles.container}>
        <h2 className={`${styles.sectionTitle} mt-15`}>Projects</h2>

        <div className={styles.projectsGrid}>
          {projectsData.map((project) => (
            <div key={project.id} className={styles.projectCard}>
              <div className={styles.projectImageContainer}>
                {/* Note: Replace with your preferred screenshot API or static images */}
                <Image
                  src={project.imageUrl}
                  alt={project.title}
                  width={500}
                  height={300}
                  className={styles.projectImage}
                />
              </div>
              <div className={styles.projectContent}>
                <div className={styles.projectHeader}>
                  <h3 className={`${styles.projectTitle} w-5/8`}>{project.title}</h3>
                  <span className={`${styles.projectType} ${styles[project.type]}`}>
                    {project.type === 'personal' ? 'Personal Project' : 'Client Project'}
                  </span>
                </div>

                <div className='mb-2 text-xs text-gray-500'>
                  <span className={`${styles.projectStatus} ${styles[project.status]}`}>
                    status: {project.status}
                  </span>
                </div>

                <p className={styles.projectDescription}>{project.description}</p>
                <div className={styles.projectTags}>
                  {project.tags.map((tag, index) => (
                    <span key={index} className={styles.projectTag}>{tag}</span>
                  ))}
                </div>
                <div className='flex justify-center gap-2'>
                  {project.websiteUrl && (
                    <Link href={project.websiteUrl} className={styles.projectLink} target="_blank" rel="noopener noreferrer">
                      Visit Website
                    </Link>
                  )}
                  {project.githubUrl && (
                    <Link href={project.githubUrl} className={styles.projectLink} target="_blank" rel="noopener noreferrer">
                      GitHub
                    </Link>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;