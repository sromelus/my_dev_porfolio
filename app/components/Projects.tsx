import Image from 'next/image';
import Link from 'next/link';
import { pdgUsScreenshot, pollNestScreenshot, cprReadyScreenshot, theWeatherTodayScreenshot } from '../../images';
import { StaticImageData } from 'next/image';
import styles from './styles/Projects.module.css';

// Project type definition
type Project = {
  id: number;
  title: string;
  description: string;
  imageUrl: StaticImageData;
  websiteUrl: string;
  tags: string[];
  type: 'personal' | 'client';
  slug: string;
  status: 'completed' | 'upcoming' | 'in-development';
};

// Projects data
export const projectsData: Project[] = [
  {
    id: 1,
    title: 'Pollnest',
    slug: 'pollnest',
    description: 'A social live polling platform that lets users vote on trending topics and binary choices with real-time results and chat features.',
    imageUrl: pollNestScreenshot,
    websiteUrl: 'https://pollnest.com',
    tags: ['React', 'Node.js', 'MongoDB', 'Real-time', 'WebSockets', 'GCP'],
    type: 'personal',
    status: 'in-development'
  },
  {
    id: 2,
    title: 'PDG Real Estate',
    slug: 'pdg-real-estate',
    description: 'Website for a Real Estate Developer showcasing their properties, services, and company information.',
    imageUrl: pdgUsScreenshot,
    websiteUrl: 'https://pdgus.com',
    tags: ['Web Development', 'Real Estate', 'Next.js', 'React', 'Typescript', 'Sqlite', 'Vercel'],
    type: 'client',
    status: 'in-development'
  },
  {
    id: 3,
    title: 'CPR Ready',
    slug: 'cpr-ready',
    description: 'CPR Ready is a CPR training agency, based in Naples, FL, that offers courses and certifications for CPR, First Aid, and AED.',
    imageUrl: cprReadyScreenshot,
    websiteUrl: 'https://cpr-ready.vercel.app/',
    tags: ['Web Development', 'Next.js', 'PostgreSQL', 'React', 'Typescript', 'Vercel'],
    type: 'client',
    status: 'in-development'
  },
  {
    id: 4,
    title: 'The Weather Today',
    slug: 'the-weather-today',
    description: 'The Weather Today is a weather app that allows users to search for weather information for a specific location.',
    imageUrl: theWeatherTodayScreenshot,
    websiteUrl: 'https://sromelus.github.io/the-weather-today/#/',
    tags: ['Web Development', 'React', 'vanilla CSS', 'weatherAPI', 'github pages'],
    type: 'personal',
    status: 'completed'
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
                <Link href={project.websiteUrl} className={styles.projectLink} target="_blank" rel="noopener noreferrer">
                  Visit Website
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;