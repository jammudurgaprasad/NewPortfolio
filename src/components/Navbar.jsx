// import React, { useState, useEffect } from "react";
// import "../css/Navbar.css";
// import MobileNav from "./MobileNav";

// const Navbar = () => {
//   const [isOpen, setIsOpen] = useState(false);
//   const [isMounted, setIsMounted] = useState(false);
//   const [isScrolled, setIsScrolled] = useState(false);
//   const [activeSection, setActiveSection] = useState("home"); // Track active

//   const handleToggle = () => setIsOpen(true);
//   const handleClose = () => setIsOpen(false);

//   useEffect(() => {
//     if (isOpen) {
//       setIsMounted(true);
//     } else {
//       const timer = setTimeout(() => {
//         setIsMounted(false);
//       }, 400);
//       return () => clearTimeout(timer);
//     }
//   }, [isOpen]);

//   useEffect(() => {
//     const handleScroll = () => {
//       const scrollPos = window.scrollY;
//       setIsScrolled(scrollPos > 50);

//       // Get vertical positions of all sections
//       const sections = ["home", "about", "education", "internship", "certifications", "projects", "skills", "contact"];
//       let current = "home";

//       for (let section of sections) {
//         const elem = document.getElementById(section);
//         if (elem) {
//           const rect = elem.getBoundingClientRect();
//           // Trigger when top of section is <= 100px from viewport top
//           if (rect.top <= 100) {
//             current = section;
//           }
//         }
//       }
//       setActiveSection(current);
//     };

//     window.addEventListener("scroll", handleScroll);
//     handleScroll(); // Initial check on mount
//     return () => window.removeEventListener("scroll", handleScroll);
//   }, []);

//   return (
//     <header className={`hero-header ${isScrolled ? "scrolled" : ""}`}>
//       <div className="menu-toggle" onClick={handleToggle}>
//         <div className="menu-bars">
//           <span></span>
//           <span></span>
//           <span></span>
//         </div>
//       </div>
//       <a href="#home" className="logo">Durga Prasad</a>
//       <nav>
//         <ul>
//           <li>
//             <a href="#about" className={activeSection === "about" ? "active" : ""}>About</a>
//           </li>
//           <li>
//             <a href="#education" className={activeSection === "education" ? "active" : ""}>Education</a>
//           </li>
//           <li>
//             <a href="#internship" className={activeSection === "internship" ? "active" : ""}>Internship</a>
//           </li>
//           <li>
//             <a href="#certifications" className={activeSection === "certifications" ? "active" : ""}>Certifications</a>
//           </li>
//           <li>
//             <a href="#projects" className={activeSection === "projects" ? "active" : ""}>Projects & Work Samples</a>
//           </li>
//           <li>
//             <a href="#skills" className={activeSection === "skills" ? "active" : ""}>Skills</a>
//           </li>
//           <li>
//             <a href="#contact" className={activeSection === "contact" ? "active" : ""}>Contact</a>
//           </li>
//           <li className="language-flags">
//             <a href="https://en.wikipedia.org/wiki/India">
//               <img src="https://flagcdn.com/in.svg" alt="Indian flag" />
//             </a>
//           </li>
//         </ul>
//       </nav>

//       {isMounted && <MobileNav isOpen={isOpen} handleClose={handleClose} />}
//     </header>
//   );
// };

// export default Navbar;














import React, { useState, useEffect, useRef } from "react";
import "../css/Navbar.css";
import MobileNav from "./MobileNav";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isMounted, setIsMounted] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("home");

  const navRef = useRef(null);
  const underlineRef = useRef(null);

  const handleToggle = () => setIsOpen(true);
  const handleClose = () => setIsOpen(false);

  useEffect(() => {
    if (isOpen) {
      setIsMounted(true);
    } else {
      const timer = setTimeout(() => setIsMounted(false), 400);
      return () => clearTimeout(timer);
    }
  }, [isOpen]);

  useEffect(() => {
    const sections = [
      "home",
      "about",
      "education",
      "internship",
      "certifications",
      "projects",
      "skills",
      "contact",
    ];

    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);

      let current = "home";
      for (const section of sections) {
        const elem = document.getElementById(section);
        if (elem) {
          const rect = elem.getBoundingClientRect();
          if (rect.top <= 100) {
            current = section;
          }
        }
      }
      setActiveSection(current);
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll();

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Update underline position and width on activeSection or menu render changes
  useEffect(() => {
    const nav = navRef.current;
    const underline = underlineRef.current;
    if (!nav || !underline) return;

    const activeLink = nav.querySelector(`a[href="#${activeSection}"]`);
    if (!activeLink) {
      underline.style.width = "0";
      return;
    }

    const navRect = nav.getBoundingClientRect();
    const linkRect = activeLink.getBoundingClientRect();

    // Calculate relative position and width for underline inside nav
    const left = linkRect.left - navRect.left;
    const width = linkRect.width;

    underline.style.transform = `translateX(${left}px)`;
    underline.style.width = `${width}px`;
  }, [activeSection, isMounted]);

  return (
    <header className={`hero-header ${isScrolled ? "scrolled" : ""}`}>
      <div className="menu-toggle" onClick={handleToggle}>
        <div className="menu-bars">
          <span></span>
          <span></span>
          <span></span>
        </div>
      </div>
      <a href="#home" className="logo">
        Durga Prasad
      </a>
      <nav ref={navRef}>
        <ul>
          <li><a href="#about">About</a></li>
          <li><a href="#education">Education</a></li>
          <li><a href="#internship">Internship</a></li>
          <li><a href="#certifications">Certifications</a></li>
          <li><a href="#projects">Projects & Work Samples</a></li>
          <li><a href="#skills">Skills</a></li>
          <li><a href="#contact">Contact</a></li>
          <li className="language-flags">
            <a href="https://en.wikipedia.org/wiki/India">
              <img src="https://flagcdn.com/in.svg" alt="Indian flag" />
            </a>
          </li>
        </ul>
        {/* The dynamic underline element */}
        <span className="nav-underline" ref={underlineRef}></span>
      </nav>

      {isMounted && <MobileNav isOpen={isOpen} handleClose={handleClose} />}
    </header>
  );
};

export default Navbar;
