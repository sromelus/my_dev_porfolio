'use client';
import React from 'react';
import Link from 'next/link';
import styles from './styles/Footer.module.css';
import { usePathname } from 'next/navigation';

const Footer: React.FC = () => {
  const pathname = usePathname();

  const handleNavClick = (hash: string) => {
    if (pathname === '/') {
      // Just update the hash if already on home page
      window.location.hash = hash;
    } else {
      // If on another page, navigate to home page with hash
      window.location.href = `/#${hash}`;
    }
  };

  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        <div className={styles.footerContent}>
          <div className={styles.footerSection}>
            <h3>Shardly Romelus</h3>
            <p>Full Stack Developer specializing in building robust web applications and intuitive user interfaces.</p>
          </div>
          
          <div className={styles.footerSection}>
            <h3>Quick Links</h3>
            <ul className={styles.footerLinks}>
              <li><Link href="#home" onClick={(e) => { e.preventDefault(); handleNavClick('home'); }}>Home</Link></li>
              <li><Link href="#about" onClick={(e) => { e.preventDefault(); handleNavClick('about'); }}>About</Link></li>
              <li><Link href="#projects" onClick={(e) => { e.preventDefault(); handleNavClick('projects'); }}>Projects</Link></li>
              <li><Link href="/blogs">Blogs</Link></li>
              <li><Link href="https://linkedin.com/in/shardlyromelus" target="_blank" rel="noopener noreferrer">Contact</Link></li>
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