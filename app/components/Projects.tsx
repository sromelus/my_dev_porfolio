'use client';
import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { pdgUsScreenshot, pollNestScreenshot } from '../../images';
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
};

// Projects data
const projects: Project[] = [
  {
    id: 1,
    title: 'Pollnest',
    description: 'A social live polling platform that lets users vote on trending topics and binary choices with real-time results and chat features.',
    imageUrl: pollNestScreenshot,
    websiteUrl: 'https://pollnest.com',
    tags: ['React', 'Node.js', 'MongoDB', 'Real-time', 'WebSockets'],
    type: 'personal'
  },
  {
    id: 2,
    title: 'PDG Real Estate',
    description: 'Website for a Real Estate Developer showcasing their properties, services, and company information.',
    imageUrl: pdgUsScreenshot,
    websiteUrl: 'https://pdgus.com',
    tags: ['Web Development', 'Real Estate', 'Client Project'],
    type: 'client'
  }
];

const Projects: React.FC = () => {
  return (
    <section id="projects" className={styles.projectsSection}>
      <div className={styles.container}>
        <h2 className={styles.sectionTitle}>Projects</h2>
        
        <div className={styles.projectsGrid}>
          {projects.map((project) => (
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
                  <h3 className={styles.projectTitle}>{project.title}</h3>
                  <span className={`${styles.projectType} ${project.type}`}>
                    {project.type === 'personal' ? 'Personal Project' : 'Client Project'}
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