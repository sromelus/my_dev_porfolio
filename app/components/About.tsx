'use client';
import React from 'react';
import Link from 'next/link';
import styles from './styles/About.module.css';

const About: React.FC = () => {
  return (
    <section id="about" className={styles.aboutSection}>
      <div className={styles.container}>
        <h2 className={`${styles.sectionTitle} mt-15`}>About Me</h2>
        <div className={styles.aboutContent}>
          <div className={styles.aboutText}>
            <p>I&apos;m <strong>Shardly Romelus</strong>, a full-stack developer who loves building efficient, scalable web applications with clean, and responsive UIs. I started out as a civil engineer, but a few years ago, I transitioned into software development, itching to learn how to build websites. It took grit and a lot of late nights, and honestly, it&apos;s been one of the most rewarding shifts I&apos;ve ever made.</p>

            <p>When I first jumped into tech, I landed at Attention Exchange, a startup building user engagement tools. There, I tackled migrating the backend from PHP to a Node.js Express API server. I also built a React-based campaign creation platform that slashed setup time by 30%, making life easier for the team and clients.</p>

            <p>In my last role, at Possip, I&apos;ve been most focused on improving system efficiency. I advocated for Test-Driven Development those efforts helped bump testing coverage from 5% to 24% (a 4x leap!), and hunted down N+1 query issues to drop response times from 4 seconds to 0.2 seconds. I get a kick out of untangling complex messes into clean, maintainable code—especially when I can collab with teammates to level up the whole system.</p>

            <p>I&apos;m always poking around for ways to make codebases leaner and more user friendly! When I&apos;m not coding, I&apos;m hanging with family, playing my Xbox, practicing my spanish on Duolingo, or reading up on emerging tech, and more. Excited to tackle new challenges with this mix of skills—let&apos;s <Link href="https://www.linkedin.com/in/shardlyromelus/" target="_blank" style={{ color: '#0077cc' }}>chat!</Link></p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About; 