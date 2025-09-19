import React, { useEffect } from "react";
import "../css/Education.css";

const Education = () => {
  useEffect(() => {
    const timeline = document.querySelector(".timeline");
    const timelineItems = document.querySelectorAll(".timeline-item");
    const summary = document.querySelector(".timeline-summary");

    const observerOptions = {
      root: null,
      rootMargin: "0px",
      threshold: 0.2,
    };

    const observerCallback = (entries, observer) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("is-visible");
          observer.unobserve(entry.target);
        }
      });
    };

    const timelineObserver = new IntersectionObserver(
      observerCallback,
      observerOptions
    );

    timelineItems.forEach((item) => {
      timelineObserver.observe(item);
    });

    if (summary) timelineObserver.observe(summary);

    const timelineLineObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && window.innerWidth > 768) {
            timeline.classList.add("is-visible");
          }
        });
      },
      {
        root: null,
        rootMargin: "0px",
        threshold: 0.1,
      }
    );

    if (timeline) timelineLineObserver.observe(timeline);

    // cleanup observers when component unmounts
    return () => {
      timelineObserver.disconnect();
      timelineLineObserver.disconnect();
    };
  }, []);

  return (
    <div className="container" id="education">
      <main className="education-section">
        <h1 className="education-title">Education</h1>
        <div className="timeline">
          <div className="timeline-item">
            <div className="timeline-content">
              <h3>Schooling</h3>
              <p className="education-school">
                Abhyas English Medium School, Garividi, Vizianagaram District
              </p>
              <p className="education-description">
                Completed primary and secondary education with a focus on
                English language proficiency and holistic development.
              </p>
            </div>
          </div>
          <div className="timeline-item">
            <div className="timeline-content">
              <h3>Intermediate Education</h3>
              <p className="education-school">
                Sri Viswa Junior College, Visakhapatnam
              </p>
              <p className="education-description">
                Completed Intermediate education with a specialization in
                Mathematics, Physics, and Chemistry (MPC), laying the groundwork
                for advanced studies in engineering and scientific disciplines.
              </p>
            </div>
          </div>
          <div className="timeline-item">
            <div className="timeline-content">
              <h3>Undergraduate Studies</h3>
              <p className="education-school">
                RVR and JC College of Engineering, Guntur
              </p>
              <p className="education-description">
                Currently pursuing a Bachelor's degree in Computer Science and
                Engineering (CSE), with a passion for exploring innovative
                technologies and problem-solving methodologies.
              </p>
            </div>
          </div>
        </div>
        <div className="timeline-summary">
          <p>
            Each educational institution has contributed significantly to my
            academic journey, fostering a strong foundation in both theoretical
            knowledge and practical application. Through diverse experiences and
            rigorous coursework, I aim to continue evolving as a competent
            professional in the field of Computer Science and Engineering.
          </p>
        </div>
      </main>
    </div>
  );
};

export default Education;
