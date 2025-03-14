'use client';
import React from 'react';
import Link from 'next/link';
import styles from './styles/Footer.module.css';

const Footer: React.FC = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        <div className={styles.footerContent}>
          <div className={styles.footerSection}>
            <h3>Shardly Romelus</h3>
            <p>Full Stack Developer specializing in scalable web applications and responsive user interfaces.</p>
          </div>
          
          <div className={styles.footerSection}>
            <h3>Quick Links</h3>
            <ul className={styles.footerLinks}>
              <li><Link href="#home">Home</Link></li>
              <li><Link href="#about">About</Link></li>
              <li><Link href="#projects">Projects</Link></li>
              <li><Link href="/blogs">Blogs</Link></li>
              <li><Link href="https://linkedin.com/in/shardlyromelus">Contact</Link></li>
            </ul>
          </div>
          
          <div className={styles.footerSection}>
            <h3>Connect</h3>
            <ul className={styles.footerLinks}>
              <li><Link href="https://github.com/sromelus" target="_blank" rel="noopener noreferrer">GitHub</Link></li>
              <li><Link href="https://linkedin.com/in/shardlyromelus" target="_blank" rel="noopener noreferrer">LinkedIn</Link></li>
            </ul>
          </div>
        </div>

        <div className={styles.footerBottom}>
          <p>&copy; {new Date().getFullYear()} Shardly Romelus. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer; 