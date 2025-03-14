'use client';
import { useState, useEffect } from 'react';
import Link from 'next/link';
import styles from './styles/Header.module.css';

const Header: React.FC = () => {
  const [menuOpen, setMenuOpen] = useState<boolean>(false);
  const [isWaving, setIsWaving] = useState<boolean>(true);

  useEffect(() => {
    const timerId = setTimeout(() => {
      setIsWaving(false);
    }, 3000);

    return () => clearTimeout(timerId);
  }, []);

  return (
    <header className={styles.header}>
      <div className={`${styles.container} ${styles.headerContainer}`}>
        <div className={styles.logo}>
          <Link href="/">
            <h2>Hey <span className={`${isWaving ? styles.wave : ''}`}>👋</span>!</h2>
          </Link>
        </div>

        <div className={styles.menuIcon} onClick={() => setMenuOpen(!menuOpen)}>
          <div className={`${styles.hamburger} ${menuOpen ? styles.active : ''}`}>
            <span></span>
            <span></span>
            <span></span>
          </div>
        </div>

        <nav className={`${styles.nav} ${menuOpen ? styles.open : ''}`}>
          <ul className={styles.navLinks}>
            <li><Link href="/" onClick={() => setMenuOpen(false)}>Home</Link></li>
            <li><Link href="/#about" onClick={() => setMenuOpen(false)}>About</Link></li>
            <li><Link href="/#projects" onClick={() => setMenuOpen(false)}>Projects</Link></li>
            <li><Link href="/blogs" onClick={() => setMenuOpen(false)}>Blogs</Link></li>
            <li><Link href="https://www.linkedin.com/in/shardlyromelus" onClick={() => setMenuOpen(false)}>Contact</Link></li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;