// 'use client';
import React from 'react';
import Link from 'next/link';
import styles from './styles/About.module.css';
import { shardlyRomelusPic } from '../../images';
import Image from 'next/image';

const About: React.FC = () => {
  return (
    <section id="about" className={styles.aboutSection}>
      <div className={styles.container}>
        <div className={styles.heroImage}>
          <Image src={shardlyRomelusPic} alt="Shardly Romelus" className="profile-img" />
        </div>
        <h2 className={`${styles.sectionTitle} mt-15`}>About Me</h2>
        <div className={styles.aboutContent}>
          <div className={styles.aboutText}>
            <p>I&apos;m <strong>Shardly Romelus</strong>, a full-stack developer who loves building efficient, scalable web applications with clean and responsive UIs. A few years back, I transitioned from civil engineering to software development, itching to learn coding and build my own projects/websites. It has been one of the most rewarding leaps I have ever taken, fueled by grit and plenty of late-night coding sessions.</p>

            <p>My first fulltime gig was at Attention Exchange, a marketing insights startup. There, I led a backend overhaul for our campaign creation platform, swapping PHP for a Node.js Express API server, and built the frontend with React, Redux, TypeScript. This new implementation improved the platform&apos;s efficiency, cutting setup time by 30% a huge time-saver for the team and clients.</p>

            <p>In my last fulltime role at Possip, I focused on improving system efficiency, I advocated for Test-Driven Development to improve testing practices and those efforts boosted our testing coverage from 5% to 25% (I was aiming for 80%, we were getting there!). I also tackled a few N+1 query issues from our legacy codebase which slashed page load latency from 4 seconds to ~ 0.5 seconds. I thrive on turning any codebase I work on more efficient, especially when I can team up with peers to improve and maintain good code quality. My go-to tools? Ruby on Rails, React, Node.js, JavaScript, TypeScript, and PostgreSQL.</p>

            <p>When I am not coding, I am spending time with family, brushing up on Spanish with Duolingo, reading about the latest tech trends, or playing Xbox. I look forward to bringing this energy to new projects. Got a challenge I can tackle for you? <Link href="https://www.linkedin.com/in/shardlyromelus/" target="_blank" style={{ color: '#0077cc' }}>Let&apos;s chat!</Link></p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About; 