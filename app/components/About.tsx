'use client';
import React from 'react';

const About: React.FC = () => {
  return (
    <section id="about" className="about-section">
      <div className="container">
        <h2 className="section-title">About Me</h2>
        <div className="about-content">
          <div className="about-text">
            <p>Hi, I&apos;m <strong>Shardly Romelus</strong>, a full-stack developer specializing in building efficient and scalable web applications with a focus on intuitive, responsive user interfaces.</p>
            
            <p>With a background in civil engineering, I made the transition to software development 4 years ago. This journey required dedication and perseverance, but has been incredibly rewarding as I&apos;ve grown into a developer who can lead projects from inception to completion.</p>
            
            <p>At <strong>Atten-X</strong>, I led the migration of our core backend from PHP to a Node.js Express API server and designed a campaign creation platform using React that decreased campaign creation time by 30%. I also participated in TechStars, helping solidify our business assumptions and KPIs.</p>
            
            <p>More recently at <strong>Possip</strong>, I&apos;ve focused on system optimization - implementing Test-Driven Development practices that increased testing coverage from 5% to 24%, and resolving N+1 query issues that reduced response latencies from 4 seconds to 0.2 seconds.</p>
            
            <p>My expertise spans Ruby on Rails, React, Node.js, PostgreSQL, and API integration. I&apos;m always looking for ways to make codebases more efficient, maintainable, and user-friendly.</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About; 