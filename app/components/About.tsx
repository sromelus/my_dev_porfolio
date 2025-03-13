'use client';
import React from 'react';
import Link from 'next/link';
const About: React.FC = () => {
  return (
    <section id="about" className="about-section">
      <div className="container">
        <h2 className="section-title">About Me</h2>
        <div className="about-content">
          <div className="about-text">
            <p>I&apos;m <strong>Shardly Romelus</strong>, a full-stack developer who loves building efficient, scalable web applications with clean, and responsive UIs. I started out as a civil engineer, but a few years ago, I transitioned into software development, itching to learn how to build websites. It took grit and a lot of late nights, and honestly, it&apos;s been one of the most rewarding shifts I&apos;ve ever made.</p>

            <p>When I first jumped into tech, I landed at Attention Exchange, a startup building user engagement tools. There, I tackled migrating the backend from PHP to a Node.js Express API server. I also built a React-based campaign creation platform that slashed setup time by 30%, making life easier for the team and clients.</p>

            <p>In my last role, at Possip, I&apos;ve been all about making things faster and smarter. I brought in Test-Driven Development, bumping testing coverage from 5% to 24% (a 4x leap!), and hunted down N+1 query issues to drop response times from 4 seconds to 0.2 seconds. I get a kick out of untangling complex messes into clean, maintainable code—especially when I can collab with teammates to level up the whole system.</p>

            <p>My go-to tools? Ruby on Rails, React, Node.js, TypeScript, PostgreSQL, and API integration. I&apos;m always poking around for ways to make codebases leaner and more user-friendly—probably why I spend hours digging into framework guts like Rails&apos; rendering flow. When I&apos;m not coding, I&apos;m hanging with family, chilling on my Xbox, messing around on Duolingo, or reading up on emerging tech. Excited to tackle new challenges with this mix of skills—let&apos;s <Link href="https://www.linkedin.com/in/shardlyromelus/" className="text-blue-500">chat!</Link></p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About; 