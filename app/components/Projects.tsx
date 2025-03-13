'use client';
import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { pdgUsScreenshot, pollNestScreenshot } from '../../images';
import { StaticImageData } from 'next/image';

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
    <section id="projects" className="projects-section">
      <div className="container">
        <h2 className="section-title">Projects</h2>
        
        <div className="projects-grid">
          {projects.map((project) => (
            <div key={project.id} className="project-card">
              <div className="project-image-container">
                {/* Note: Replace with your preferred screenshot API or static images */}
                <Image 
                  src={project.imageUrl}
                  alt={project.title}
                  width={500}
                  height={300}
                  className="project-image"
                />
              </div>
              <div className="project-content">
                <div className="project-header">
                  <h3 className="project-title">{project.title}</h3>
                  <span className={`project-type ${project.type}`}>
                    {project.type === 'personal' ? 'Personal Project' : 'Client Project'}
                  </span>
                </div>
                <p className="project-description">{project.description}</p>
                <div className="project-tags">
                  {project.tags.map((tag, index) => (
                    <span key={index} className="project-tag">{tag}</span>
                  ))}
                </div>
                <Link href={project.websiteUrl} className="project-link" target="_blank" rel="noopener noreferrer">
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