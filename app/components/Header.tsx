'use client';
import { useState, useEffect } from 'react';
import Link from 'next/link';

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
    <header className="header">
      <div className="container header-container">
        <div className="logo">
          <Link href="/">
            <h2>Hey <span className={`${isWaving ? 'wave' : ''}`}>👋</span>!</h2>
          </Link>
        </div>

        <div className="menu-icon" onClick={() => setMenuOpen(!menuOpen)}>
          <div className={`hamburger ${menuOpen ? 'active' : ''}`}>
            <span></span>
            <span></span>
            <span></span>
          </div>
        </div>

        <nav className={`nav ${menuOpen ? 'open' : ''}`}>
          <ul className="nav-links">
            <li><Link href="/" onClick={() => setMenuOpen(false)}>Home</Link></li>
            <li><Link href="#about" onClick={() => setMenuOpen(false)}>About</Link></li>
            <li><Link href="#projects" onClick={() => setMenuOpen(false)}>Projects</Link></li>
            <li><Link href="/blogs" onClick={() => setMenuOpen(false)}>Blogs</Link></li>
            <li><Link href="https://www.linkedin.com/in/shardlyromelus" onClick={() => setMenuOpen(false)}>Contact</Link></li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;