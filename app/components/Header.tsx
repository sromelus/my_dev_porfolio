'use client';
import { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname, useRouter } from 'next/navigation';
import styles from './styles/Header.module.css';

const Header: React.FC = () => {
  const router = useRouter();
  const [menuOpen, setMenuOpen] = useState<boolean>(false);
  const [isWaving, setIsWaving] = useState<boolean>(true);
  const [activeLink, setActiveLink] = useState<string>('/#home');
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
      return activeLink.replace('#', '') === href.replace('#', '');
    }
    // For regular links like /blogs
    else {
      return href.startsWith(activeLink) && activeLink !== '/';
    }

  };

  const handleNavClick = async (hash: string) => {
    if (pathname === '/') {
      // Just update the hash if already on home page
      setActiveLink(`/${hash}`);
      setHashValue(hash);
      window.location.hash = hash;
    } else {
      setActiveLink(`/${hash}`);
      setHashValue(hash);
     // Use Next.js router for smooth navigation
     await router.push(`/#${hash}`);
    }
  };

  return (
      <nav className={`${styles.navbar}`}>
          <div className={`${styles.container} flex justify-between items-center`}>
              <div className="text-2xl font-bold">
                  <Link href="/">
                    <span className={`${isWaving ? styles.wave : ''} text-3xl`}>👋</span> Hey!
                  </Link>
              </div>
              <div className={`${styles.nav} ${menuOpen ? `${styles.open} ${styles.navLinks}` : ''}`}>
                  <Link href="/#home" className={`${styles.navLink} ${isActive('/#home') ? styles.activeLink : ''}`} onClick={(e) => { e.preventDefault(); handleNavClick('home'); }}>Home</Link>
                  <Link href="/#projects" className={`${styles.navLink} ${isActive('/#projects') ? styles.activeLink : ''}`} onClick={(e) => { e.preventDefault(); handleNavClick('projects'); }}>Projects</Link>
                  <Link href="/blogs" className={`${styles.navLink} ${isActive('/blogs') ? styles.activeLink : ''}`}>Blogs</Link>
                  <Link href="/#about" className={`${styles.navLink} ${isActive('/#about') ? styles.activeLink : ''}`} onClick={(e) => { e.preventDefault(); handleNavClick('about'); }}>About Me</Link>
                  <Link href="https://www.linkedin.com/in/shardlyromelus" className={`${styles.navLink} ${isActive('/#contact') ? styles.activeLink : ''}`} target="_blank" rel="noopener noreferrer">Contact</Link>
              </div>
              <div className="md:hidden">
                  <div className={styles.menuIcon} onClick={() => setMenuOpen(!menuOpen)}>
                    <div className={`${styles.hamburger} ${menuOpen ? styles.active : ''}`}>
                      <span></span>
                      <span></span>
                      <span></span>
                    </div>
                  </div>
              </div>
          </div>
      </nav>
  )
};

export default Header;


