'use client';
import { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import styles from './styles/Header.module.css';

const Header: React.FC = () => {
  const [menuOpen, setMenuOpen] = useState<boolean>(false);
  const [isWaving, setIsWaving] = useState<boolean>(true);
  const [activeLink, setActiveLink] = useState<string>('/');
  const [hashValue, setHashValue] = useState<string>('');
  
  // Get current path for initial active state
  const pathname = usePathname();
  
  // Set up hash tracking on client side
  useEffect(() => {
    // Set initial hash value
    setHashValue(window.location.hash);
    
    // Update hash value when it changes
    const handleHashChange = () => {
      setHashValue(window.location.hash);
    };
    
    window.addEventListener('hashchange', handleHashChange);
    return () => window.removeEventListener('hashchange', handleHashChange);
  }, []);
  
  // Set active link based on current path and hash
  useEffect(() => {
    // Handle root path
    if (pathname === '/') {
      if (hashValue) {
        setActiveLink('/' + hashValue);
      } else {
        setActiveLink('/');
      }
    } 
    // Handle other routes like /blogs
    else {
      // For paths with deeper segments like /blogs/some-post, just highlight the /blogs
      const basePath = '/' + pathname.split('/')[1];
      setActiveLink(basePath);
    }
  }, [pathname, hashValue]);

  useEffect(() => {
    const timerId = setTimeout(() => {
      setIsWaving(false);
    }, 3000);

    return () => clearTimeout(timerId);
  }, []);

  // Helper function to check if a link should be active
  const isActive = (href: string) => {
    // For the home page
    if (href === '/') {
      return activeLink === '/' && !hashValue;
    }
    // For hash links like /#about
    else if (href.includes('#')) {
      return activeLink === href;
    }
    // For regular links like /blogs
    else {
      return href.startsWith(activeLink) && activeLink !== '/';
    }
  };

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
            <li>
              <Link 
                href="/" 
                className={isActive('/') ? styles.activeLink : ''}
                onClick={() => {
                  setMenuOpen(false);
                  setActiveLink('/');
                  setHashValue('');
                }}
              >
                Home
              </Link>
            </li>
            <li>
              <Link 
                href="/#about" 
                className={isActive('/#about') ? styles.activeLink : ''}
                onClick={() => {
                  setMenuOpen(false);
                  setActiveLink('/#about');
                  setHashValue('#about');
                }}
              >
                About
              </Link>
            </li>
            <li>
              <Link 
                href="/#projects" 
                className={isActive('/#projects') ? styles.activeLink : ''}
                onClick={() => {
                  setMenuOpen(false);
                  setActiveLink('/#projects');
                  setHashValue('#projects');
                }}
              >
                Projects
              </Link>
            </li>
            <li>
              <Link 
                href="/blogs" 
                className={isActive('/blogs') ? styles.activeLink : ''}
                onClick={() => {
                  setMenuOpen(false);
                  setActiveLink('/blogs');
                  setHashValue('');
                }}
              >
                Blogs
              </Link>
            </li>
            <li>
              <Link 
                href="https://www.linkedin.com/in/shardlyromelus" 
                target="_blank" 
                rel="noopener noreferrer" 
                onClick={() => setMenuOpen(false)}
              >
                Contact
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;