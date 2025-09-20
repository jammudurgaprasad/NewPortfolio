import React, { useEffect } from "react";
import "../css/Certifications.css";

// Certificate images
import PythonCert from "../Certificates&Projects/Python.png";
import NPTELCert from "../Certificates&Projects/NPTEL.jpeg";
import JavaScriptCert from "../Certificates&Projects/JavaScript.jpeg";
import FullstackCert from "../Certificates&Projects/Fullstack.png";

const Certifications = () => {
  useEffect(() => {
    const observerOptions = {
      root: null,
      rootMargin: "0px",
      threshold: 0.15,
    };

    // Animate the title and each card
    const animatedElements = document.querySelectorAll(
      ".certifications-title, .card-wrapper"
    );

    const observer = new IntersectionObserver((entries, observerInstance) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("is-visible");
          observerInstance.unobserve(entry.target);
        }
      });
    }, observerOptions);

    animatedElements.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  // Touch support for flipping (for mobile)
  const handleTouchStart = (e) => {
    e.currentTarget.classList.toggle("hover");
  };

  return (
    <div className="container" id="certifications">
      <main className="certifications-section">
        <h1 className="certifications-title">Certifications</h1>
        <div className="certificates-grid">
          {/* Python Certificate */}
          <div
            className="card-wrapper"
            onTouchStart={handleTouchStart}
            tabIndex={0}
          >
            <div className="card-flipper">
              <div className="card-front">
                <img src={PythonCert} alt="Python Certificate" />
              </div>
              <div className="card-back">
                <h4>Platform: SCALAR TOPICS</h4>
                <h3>Python course for beginners</h3>
                <a
                  href="https://moonshot.scaler.com/s/sl/8NXzCuW2x2"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  View Certificate
                </a>
              </div>
            </div>
          </div>
          {/* NPTEL Certificate */}
          <div
            className="card-wrapper"
            onTouchStart={handleTouchStart}
            tabIndex={0}
          >
            <div className="card-flipper">
              <div className="card-front">
                <img src={NPTELCert} alt="NPTEL DSA using Java Certificate" />
              </div>
              <div className="card-back">
                <h4>Platform: NPTEL</h4>
                <h3>DSA using Java</h3>
                <a
                  href="https://www.linkedin.com/posts/jammudurgaprasad_nptel-learningjourney-datastructures-activity-7288578996412334080-YNhi"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  View Certificate
                </a>
              </div>
            </div>
          </div>
          {/* JavaScript Certificate */}
          <div
            className="card-wrapper"
            onTouchStart={handleTouchStart}
            tabIndex={0}
          >
            <div className="card-flipper">
              <div className="card-front">
                <img src={JavaScriptCert} alt="JavaScript Certificate" />
              </div>
              <div className="card-back">
                <h4>Platform: SCALAR TOPICS</h4>
                <h3>JavaScript</h3>
                <a
                  href="https://moonshot.scaler.com/s/sl/M3YPETr0jK"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  View Certificate
                </a>
              </div>
            </div>
          </div>
          {/* Fullstack Certificate */}
          <div
            className="card-wrapper"
            onTouchStart={handleTouchStart}
            tabIndex={0}
          >
            <div className="card-flipper">
              <div className="card-front">
                <img
                  src={FullstackCert}
                  alt="Full Stack Developer Bootcamp Certificate"
                />
              </div>
              <div className="card-back">
                <h4>Platform: GeeksforGeeks</h4>
                <h3>Full Stack Developer Bootcamp</h3>
                <a
                  href="https://www.linkedin.com/posts/jammudurgaprasad_full-stack-developer-bootcamp-master-frontend-activity-7344790448000929792-td2E"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  View Certificate
                </a>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Certifications;
