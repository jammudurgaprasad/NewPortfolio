import React, { useEffect, useRef } from "react";
import "../css/MobileNav.css";

const MobileNav = ({ isOpen, handleClose }) => {
  const navRef = useRef(null);

  // Use a ref to apply the class after a short delay for smooth opening
  useEffect(() => {
    if (navRef.current) {
      const timer = setTimeout(() => {
        navRef.current.classList.add(isOpen ? "open" : "closing");
        if (!isOpen) {
          navRef.current.classList.remove("open");
        }
      }, 10);
      return () => clearTimeout(timer);
    }
  }, [isOpen]);

  // This ensures that when a link is clicked, the menu closes
  const handleLinkClick = (e) => {
    e.stopPropagation(); // Prevents the event from bubbling up
    handleClose();
  };

  return (
    <nav ref={navRef} className="mobile-nav">
      <span className="mobile-nav-close" onClick={handleLinkClick}>&times;</span>
      <ul>
        <li><a href="#about" onClick={handleLinkClick}>About</a></li>
        <li><a href="#education" onClick={handleLinkClick}>Education</a></li>
        <li><a href="#internship" onClick={handleLinkClick}>Internship</a></li>
        <li><a href="#certifications" onClick={handleLinkClick}>Certifications</a></li>
        <li><a href="#projects" onClick={handleLinkClick}>Projects</a></li>
        <li><a href="#skills" onClick={handleLinkClick}>Skills</a></li>
        <li><a href="#contact" onClick={handleLinkClick}>Contact</a></li>
        <li className="language-flags">
          <a href="https://en.wikipedia.org/wiki/India"><img src="https://flagcdn.com/in.svg" alt="Indian flag" /></a>
        </li>
      </ul>
    </nav>
  );
};

export default MobileNav;