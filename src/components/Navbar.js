import React, { useState, useRef, useEffect } from 'react';
import logo from '../assets/edusity-logo.png';
import hamburger from '../assets/navbar-hamburger.png';
import '../styles/Navbar.css';

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const navRef = useRef(null);

  function toggleDisplay() {
    setMenuOpen(!menuOpen);
  }

  function handleScroll() {
    if (navRef.current) {
      if (window.scrollY > 0) {
        navRef.current.classList.add('dark');
      } else {
        navRef.current.classList.remove('dark');
      }
    }
  }

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav ref={navRef} className="container">
      <img src={logo} alt="edusity logo" className="logo" />
      <ul className={`menu-display ${menuOpen ? 'show' : ''}`} id="yo">
        <li>Home</li>
        <li>Program</li>
        <li>About Us</li>
        <li>Campus</li>
        <li>Testimonials</li>
        <li><a href="#home" className="btn">Contact Us</a></li>
      </ul>
      <img src={hamburger} alt="menu hamburger" className="hamburger" onClick={toggleDisplay} />
    </nav>
  );
}
