import React, { useState, useEffect, useRef } from "react";
import "../css/About.css";

const About = () => {
  const [isVisible, setIsVisible] = useState(false);
  const aboutRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible(true);
            observer.unobserve(entry.target);
          }
        });
      },
      {
        root: null, // viewport
        rootMargin: "0px",
        threshold: 0.1, // 10% visible
      }
    );

    const currentElement = aboutRef.current; // capture current ref

    if (currentElement) {
      observer.observe(currentElement);
    }

    return () => {
      if (currentElement) {
        observer.unobserve(currentElement); // unobserve the same captured element
      }
    };
  }, []); // Runs only once on mount

  return (
    <>
      <div
        className={`container ${isVisible ? "visible-about-section" : ""}`}
        id="about"
        ref={aboutRef}
      >
        <main className="about-section">
          {/* Left Column */}
          <div className="about-left">
            <h1 className="about-title">About Me</h1>
            <h2 className="about-subtitle">
              A dedicated Full-Stack Developer & AI Enthusiast
            </h2>
            <p className="about-text">
              Hello! I'm <strong>Durga Prasad</strong>, a passionate developer with
              a strong foundation in building comprehensive, full-stack
              applications. My expertise spans from crafting intuitive front-end
              interfaces with <strong>React.js</strong> to engineering robust
              back-end systems using <strong>Spring Boot 3</strong> and{" "}
              <strong>Node.js</strong>. I'm driven by a love for clean code,
              problem-solving, and continuous learning.
            </p>
            <p className="about-text">
              Beyond web development, I have a deep interest in{" "}
              <strong>AI and Machine Learning</strong>, leveraging tools like{" "}
              <strong>NumPy</strong>, <strong>Pandas</strong>, and{" "}
              <strong>scikit-learn</strong> to tackle data-driven challenges. My
              skills in <strong>Data Structures and Algorithms</strong> form the
              bedrock of my work, ensuring every solution I build is both efficient
              and scalable. I am always excited to take on new challenges and
              transform complex ideas into functional, elegant software.
            </p>
          </div>

          {/* Right Column */}
          <div className="about-right">
            <div className="details-grid">
              <div className="detail-item">
                <i className="fas fa-calendar-alt detail-icon"></i>
                <div className="detail-info">
                  <div className="detail-label">Birthday:</div>
                  <div className="detail-value">4 March 2005</div>
                </div>
              </div>

              <div className="detail-item">
                <i className="fas fa-globe detail-icon"></i>
                <div className="detail-info">
                  <div className="detail-label">Website:</div>
                  <div className="detail-value">
                    <a
                      href="https://jdpsportfolio.netlify.app/"
                      target="_blank"
                      rel="noreferrer"
                    >
                      jdpsportfolio.netlify.app
                    </a>
                  </div>
                </div>
              </div>

              <div className="detail-item">
                <i className="fas fa-phone detail-icon"></i>
                <div className="detail-info">
                  <div className="detail-label">Phone:</div>
                  <div className="detail-value">+91 630 243 7147</div>
                </div>
              </div>

              <div className="detail-item">
                <i className="fas fa-map-marker-alt detail-icon"></i>
                <div className="detail-info">
                  <div className="detail-label">City:</div>
                  <div className="detail-value">Guntur, India</div>
                </div>
              </div>

              <div className="detail-item">
                <i className="fas fa-user-circle detail-icon"></i>
                <div className="detail-info">
                  <div className="detail-label">Age:</div>
                  <div className="detail-value">20</div>
                </div>
              </div>

              <div className="detail-item">
                <i className="fas fa-graduation-cap detail-icon"></i>
                <div className="detail-info">
                  <div className="detail-label">Degree:</div>
                  <div className="detail-value">Undergraduate</div>
                </div>
              </div>

              <div className="detail-item">
                <i className="fas fa-envelope detail-icon"></i>
                <div className="detail-info">
                  <div className="detail-label">Email:</div>
                  <div className="detail-value">
                    <a href="mailto:jammudurgaprasad04@gmail.com">
                      jammudurgaprasad04@gmail.com
                    </a>
                  </div>
                </div>
              </div>

              <div className="detail-item">
                <i className="fas fa-briefcase detail-icon"></i>
                <div className="detail-info">
                  <div className="detail-label">Freelance:</div>
                  <div className="detail-value">Available</div>
                </div>
              </div>
            </div>
          </div>
        </main>
      </div>
    </>
  );
};

export default About;
