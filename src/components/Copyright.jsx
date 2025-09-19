import React, { useEffect, useState } from "react";
import "../css/Copyright.css"; // external stylesheet

const Copyright = () => {
  const [year, setYear] = useState(new Date().getFullYear());

  useEffect(() => {
    const footer = document.querySelector(".copyright-footer");

    const observer = new IntersectionObserver(
      (entries, observerInstance) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible");
            observerInstance.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.1 }
    );

    if (footer) {
      observer.observe(footer);
    }

    return () => {
      if (footer) observer.unobserve(footer);
    };
  }, []);

  return (
    <>
      <div className="spacer"></div>
      <footer className="copyright-footer">
        <p>© {year} Jammu Durga Prasad. All Rights Reserved.</p>
      </footer>
    </>
  );
};

export default Copyright;
