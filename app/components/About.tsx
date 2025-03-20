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
            <p>I&apos;m <strong>Shardly Romelus</strong>, a full-stack developer who loves building efficient, scalable web applications with clean and responsive UIs. A few years back, I transitioned from civil engineering to software development, itching to learn coding and build my own projects/websites. It has been one of the most rewarding leaps I have ever taken, fueled by grit and plenty of late-night coding sessions.</p>

            <p>My first fulltime gig was at Attention Exchange, a startup crafting user engagement tools. There, I led a backend overhaul, swapping PHP for a Node.js Express API server, and built a React-based campaign creation platform that cut setup time by 30% a huge time-saver for the team and clients.</p>

            <p>In my last gig at Possip, I zeroed in on system efficiency, pushing Test-Driven Development to boost testing coverage from 5% to 25% (aiming for 80%—we were getting there!) and tackling N+1 query issues to slash response latency times from 4 seconds to 0.2 seconds. I thrive on turning tangled code into clean, especially when I can team up with peers to improve and maintain the codebase. My go-to tools? Ruby on Rails, React, Node.js, JavaScript, TypeScript, and PostgreSQL.</p>

            <p>When I am not coding, you will find me hanging with family, brushing up on Spanish with Duolingo, diving into the latest tech trends, or playing my Xbox. I am pumped to bring this energy to new projects—got a challenge I can tackle for you? <Link href="https://www.linkedin.com/in/shardlyromelus/" target="_blank" style={{ color: '#0077cc' }}>Let&apos;s chat!</Link></p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About; 