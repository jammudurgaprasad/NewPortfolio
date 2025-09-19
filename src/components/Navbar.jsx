import React, { useState, useEffect } from "react";
import "../css/Navbar.css";
import MobileNav from "./MobileNav";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isMounted, setIsMounted] = useState(false); // New state for mounting
  const [isScrolled, setIsScrolled] = useState(false);

  // Function to open the menu
  const handleToggle = () => setIsOpen(true);

  // Function to close the menu
  const handleClose = () => setIsOpen(false);

  useEffect(() => {
    // This effect handles the component's mounting and unmounting
    if (isOpen) {
      // Mount the component when isOpen is true
      setIsMounted(true);
    } else {
      // Delay unmounting to allow the closing animation to finish
      const timer = setTimeout(() => {
        setIsMounted(false);
      }, 400); // This delay should match your CSS transition duration + a small buffer

      return () => clearTimeout(timer); // Clean up the timer
    }
  }, [isOpen]);

  useEffect(() => {
    // Existing effect to handle navbar scroll transparency
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <header className={`hero-header ${isScrolled ? "scrolled" : ""}`}>
      <div className="menu-toggle" onClick={handleToggle}>
        <div className="menu-bars">
          <span></span>
          <span></span>
          <span></span>
        </div>
      </div>
      <a href="#home" className="logo">Durga Prasad</a>
      <nav>
        <ul>
          <li><a href="#about">About</a></li>
          <li><a href="#education">Education</a></li>
          <li><a href="#internship">Internship</a></li>
          <li><a href="#certifications">Certifications</a></li>
          <li><a href="#projects">Projects & Work Samples</a></li>
          <li><a href="#skills">Skills</a></li>
          <li><a href="#contact">Contact</a></li>
          <li className="language-flags">
            <a href="https://en.wikipedia.org/wiki/India"><img src="https://flagcdn.com/in.svg" alt="Indian flag" /></a>
          </li>
        </ul>
      </nav>

      {/* Conditionally render the MobileNav component */}
      {isMounted && <MobileNav isOpen={isOpen} handleClose={handleClose} />}
    </header>
  );
};

export default Navbar;