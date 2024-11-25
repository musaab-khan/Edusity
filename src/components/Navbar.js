import React, { useState, useRef, useEffect } from 'react';
import {edusityLogo,navbarHamburger} from '../assets/assets';
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
    <nav ref={navRef} className="container flex align-center justify-between">
      <img src={edusityLogo} alt="edusity logo" className="logo" />
      <ul className={`menu-display ${menuOpen ? 'show' : ''} flex align-center`} id="yo">
        <li>Home</li>
        <li>Program</li>
        <li>About Us</li>
        <li>Campus</li>
        <li>Testimonials</li>
        <li><a href="#home" className="btn">Contact Us</a></li>
      </ul>
      <img src={navbarHamburger} alt="menu hamburger" className="hamburger" onClick={toggleDisplay} />
    </nav>
  );
}
