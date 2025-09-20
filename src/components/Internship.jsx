import React, { useEffect } from "react";
import "../css/Internship.css";

const Internship = () => {
  useEffect(() => {
    const observerOptions = {
      root: null,
      rootMargin: "0px",
      threshold: 0.15,
    };

    const sectionsToAnimate = [
      document.querySelector(".internship-title"),
      document.querySelector(".internship-card"),
      document.querySelector(".internship-summary"),
    ];

    const techItems = document.querySelectorAll(".tech-item");
    const respItems = document.querySelectorAll("#responsibilities-list li");

    // Animate card, title, summary
    const observer = new IntersectionObserver((entries, observerInstance) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("is-visible");
          observerInstance.unobserve(entry.target);
        }
      });
    }, observerOptions);

    sectionsToAnimate.forEach((section) => {
      if (section) observer.observe(section);
    });

    // Animate tech items
    const techObserver = new IntersectionObserver((entries, obs) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("is-visible");
          obs.unobserve(entry.target);
        }
      });
    }, { ...observerOptions, threshold: 0.05 });

    techItems.forEach((item) => techObserver.observe(item));

    // Animate responsibility items
    const respObserver = new IntersectionObserver((entries, obs2) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("is-visible");
          obs2.unobserve(entry.target);
        }
      });
    }, { ...observerOptions, threshold: 0.05 });

    respItems.forEach((item) => respObserver.observe(item));

    return () => {
      observer.disconnect();
      techObserver.disconnect();
      respObserver.disconnect();
    };
  }, []);

  return (
    <div className="container" id="internship">
      <main className="internship-section">
        <h1 className="internship-title">Internship Experience</h1>

        <div className="internship-card">
          <h2 className="company-title">Google x AICTE x EduSkills</h2>
          <span className="internship-duration">
            AI-ML Virtual Internship | April 2025 – June 2025
          </span>
          <p>
            Participated in the AI-ML Virtual Internship program conducted by
            Google in collaboration with AICTE and EduSkills. This internship
            provided hands-on experience in integrating machine learning models
            within full-stack applications.
          </p>
          <div className="key-responsibilities">
            <h4>Key Responsibilities:</h4>
            <ul id="responsibilities-list">
              <li>
                Developed a full-stack object detection web app using TensorFlow
                Hub, React, and Django REST Framework.
              </li>
              <li>
                Integrated pretrained CNN models like SSD MobileNet v2 for
                real-time image classification and detection.
              </li>
              <li>
                Built RESTful APIs to handle image uploads and serve predictions
                via asynchronous operations.
              </li>
              <li>
                Implemented a dynamic React UI with Axios integration for
                real-time result rendering.
              </li>
            </ul>
          </div>
          <div className="technologies-used">
            <h4>Technologies Used:</h4>
            <div className="tech-grid">
              <span className="tech-item">TensorFlow & TensorFlow Hub</span>
              <span className="tech-item">OpenCV (Computer Vision)</span>
              <span className="tech-item">
                Django & Django REST Framework
              </span>
              <span className="tech-item">React.js with Axios</span>
            </div>
          </div>
        </div>
        <div className="internship-summary">
          <p>
            This internship was a transformative learning experience that
            deepened my understanding of full-stack development and the
            practical integration of machine learning models into
            production-level applications.
          </p>
        </div>
      </main>
    </div>
  );
};

export default Internship;
