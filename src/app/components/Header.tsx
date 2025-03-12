'use client';
import { useState } from 'react';
import Link from 'next/link';

const Header: React.FC = () => {
  const [menuOpen, setMenuOpen] = useState<boolean>(false);

  return (
    <header className="header">
      <div className="container header-container">
        <div className="logo">
          <Link href="/">
            <h2>YOUR NAME</h2>
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
            <li><Link href="#contact" onClick={() => setMenuOpen(false)}>Contact</Link></li>
          </ul>
        </nav>
      </div>
      
      {/* <style jsx>{`
        .header {
          position: fixed;
          width: 100%;
          padding: 1rem 0;
          background-color: rgba(255, 255, 255, 0.95);
          box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1);
          z-index: 100;
        }
        
        .header-container {
          display: flex;
          justify-content: space-between;
          align-items: center;
        }
        
        .logo h2 {
          font-size: 1.5rem;
          font-weight: 700;
          letter-spacing: 1px;
        }
        
        .nav-links {
          display: flex;
          list-style: none;
          gap: 2rem;
        }
        
        .nav-links li a {
          font-weight: 500;
          transition: color 0.3s;
        }
        
        .nav-links li a:hover {
          color: var(--primary-color);
        }
        
        .menu-icon {
          display: none;
          cursor: pointer;
        }
        
        .hamburger {
          width: 24px;
          height: 20px;
          position: relative;
          transform: rotate(0deg);
          transition: 0.5s ease-in-out;
        }
        
        .hamburger span {
          display: block;
          position: absolute;
          height: 3px;
          width: 100%;
          background: var(--dark-color);
          border-radius: 3px;
          opacity: 1;
          left: 0;
          transform: rotate(0deg);
          transition: 0.25s ease-in-out;
        }
        
        .hamburger span:nth-child(1) {
          top: 0px;
        }
        
        .hamburger span:nth-child(2) {
          top: 8px;
        }
        
        .hamburger span:nth-child(3) {
          top: 16px;
        }
        
        .hamburger.active span:nth-child(1) {
          top: 8px;
          transform: rotate(135deg);
        }
        
        .hamburger.active span:nth-child(2) {
          opacity: 0;
          left: -60px;
        }
        
        .hamburger.active span:nth-child(3) {
          top: 8px;
          transform: rotate(-135deg);
        }
        
        @media (max-width: 768px) {
          .menu-icon {
            display: block;
            z-index: 101;
          }
          
          .nav {
            position: fixed;
            top: 0;
            right: -100%;
            width: 70%;
            height: 100vh;
            background-color: white;
            box-shadow: -1px 0 10px rgba(0, 0, 0, 0.1);
            transition: right 0.3s ease;
            display: flex;
            align-items: center;
            justify-content: center;
          }
          
          .nav.open {
            right: 0;
          }
          
          .nav-links {
            flex-direction: column;
            align-items: center;
            gap: 2rem;
          }
        }
      `}</style> */}
    </header>
  );
};

export default Header; 