import React, { useEffect } from "react";
import "../css/Projects.css";
// Import project images
import DPSKitchen from "../Certificates&Projects/dpskitchen.png";
import BillGenerator from "../Certificates&Projects/BillGenerator.png";
import RockPaperScissor from "../Certificates&Projects/rockpaperscissor.png";
import Calculator from "../Certificates&Projects/calculator.png";
import Fest from "../Certificates&Projects/Fest.png";
import ToDo from "../Certificates&Projects/ToDo.png";
import Weather from "../Certificates&Projects/Weather.png";
import Ecommerce from "../Certificates&Projects/ecommerce.png";
import ObjectDetection from "../Certificates&Projects/ObjectDetection.png";
import FutureDesk from "../Certificates&Projects/FutureDesk.png";

const Projects = () => {
  useEffect(() => {
    const observerOptions = {
      root: null,
      rootMargin: "0px",
      threshold: 0.1,
    };
    const animatedElements = document.querySelectorAll(".card-wrapper");
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

  return (
    <div className="container" id="projects">
      <main className="projects-section">
        <h1 className="projects-title">Projects & Work Samples</h1>
        <div className="projects-grid">
          {/* Online food ordering system */}
          <div className="card-wrapper">
            <div className="card">
              <div className="slide slide1">
                <img src={DPSKitchen} alt="Online food ordering system" />
              </div>
              <div className="slide slide2">
                <div className="details">
                  <h3>Online food ordering system</h3>
                  <p>
                    <strong>Type:</strong> Project <br />
                    <strong>Technologies:</strong> HTML, CSS, JS, MySQL, Django
                  </p>
                  <div className="onlinelinks">
                    <a
                      href="https://github.com/jammudurgaprasad/project4"
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label="GitHub Link"
                    >
                      <i className="fab fa-github"></i>
                    </a>
                    <a
                      href="https://jammudurgaprasad.pythonanywhere.com/"
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label="Live Demo Link"
                    >
                      <i className="fas fa-external-link-alt"></i>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* Bill Generator */}
          <div className="card-wrapper">
            <div className="card">
              <div className="slide slide1">
                <img src={BillGenerator} alt="Bill Generator" />
              </div>
              <div className="slide slide2">
                <div className="details">
                  <h3>Bill Generator</h3>
                  <p>
                    <strong>Type:</strong> Task <br />
                    <strong>Technologies:</strong> HTML, CSS, JS
                  </p>
                  <div className="onlinelinks">
                    <a
                      href="https://github.com/jammudurgaprasad/projects/blob/main/bill.html"
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label="GitHub Link"
                    >
                      <i className="fab fa-github"></i>
                    </a>
                    <a
                      href="https://jdp62.netlify.app/bill.html"
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label="Live Demo Link"
                    >
                      <i className="fas fa-external-link-alt"></i>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* ROCK-PAPER-SCISSOR */}
          <div className="card-wrapper">
            <div className="card">
              <div className="slide slide1">
                <img src={RockPaperScissor} alt="ROCK-PAPER-SCISSOR Game" />
              </div>
              <div className="slide slide2">
                <div className="details">
                  <h3>ROCK-PAPER-SCISSOR Game</h3>
                  <p>
                    <strong>Type:</strong> Project <br />
                    <strong>Technologies:</strong> HTML, CSS, JS
                  </p>
                  <div className="onlinelinks">
                    <a
                      href="https://dp-rock-paper-scissor.netlify.app/"
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label="Live Demo Link"
                    >
                      <i className="fas fa-external-link-alt"></i>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* Calculator */}
          <div className="card-wrapper">
            <div className="card">
              <div className="slide slide1">
                <img src={Calculator} alt="Simple Calculator" />
              </div>
              <div className="slide slide2">
                <div className="details">
                  <h3>Simple Calculator</h3>
                  <p>
                    <strong>Type:</strong> Task <br />
                    <strong>Technologies:</strong> HTML, CSS, JS
                  </p>
                  <div className="onlinelinks">
                    <a
                      href="https://github.com/jammudurgaprasad/projects/blob/main/calculator.html"
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label="GitHub Link"
                    >
                      <i className="fab fa-github"></i>
                    </a>
                    <a
                      href="https://jdp62.netlify.app/calculator.html"
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label="Live Demo Link"
                    >
                      <i className="fas fa-external-link-alt"></i>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* Cultural Fest */}
          <div className="card-wrapper">
            <div className="card">
              <div className="slide slide1">
                <img src={Fest} alt="College Cultural Fest Website" />
              </div>
              <div className="slide slide2">
                <div className="details">
                  <h3>College Cultural Fest Website</h3>
                  <p>
                    <strong>Type:</strong> Project <br />
                    <strong>Technologies:</strong> HTML, CSS, JS
                  </p>
                  <div className="onlinelinks">
                    <a
                      href="https://github.com/jammudurgaprasad/college_cultural_fest_website"
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label="GitHub Link"
                    >
                      <i className="fab fa-github"></i>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* To-Do App */}
          <div className="card-wrapper">
            <div className="card">
              <div className="slide slide1">
                <img src={ToDo} alt="To-Do Application" />
              </div>
              <div className="slide slide2">
                <div className="details">
                  <h3>To-Do Application</h3>
                  <p>
                    <strong>Type:</strong> Project <br />
                    <strong>Technologies:</strong> React Js, Node Js, MongoDB, CSS
                  </p>
                  <div className="onlinelinks">
                    <a
                      href="https://github.com/jammudurgaprasad/Full-Stack-ToDo-App"
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label="GitHub Link"
                    >
                      <i className="fab fa-github"></i>
                    </a>
                    <a
                      href="https://dptodoapp.netlify.app/"
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label="Live Demo Link"
                    >
                      <i className="fas fa-external-link-alt"></i>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* Weather App */}
          <div className="card-wrapper">
            <div className="card">
              <div className="slide slide1">
                <img src={Weather} alt="Weather Application" />
              </div>
              <div className="slide slide2">
                <div className="details">
                  <h3>Weather Application</h3>
                  <p>
                    <strong>Type:</strong> Project <br />
                    <strong>Technologies:</strong> React Js, CSS
                  </p>
                  <div className="onlinelinks">
                    <a
                      href="https://github.com/jammudurgaprasad/Weather_App"
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label="GitHub Link"
                    >
                      <i className="fab fa-github"></i>
                    </a>
                    <a
                      href="https://dpsweatherapp.netlify.app/"
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label="Live Demo Link"
                    >
                      <i className="fas fa-external-link-alt"></i>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* Ecommerce */}
          <div className="card-wrapper">
            <div className="card">
              <div className="slide slide1">
                <img src={Ecommerce} alt="E-Commerce Application" />
              </div>
              <div className="slide slide2">
                <div className="details">
                  <h3>E-Commerce Application</h3>
                  <p>
                    <strong>Type:</strong> Project <br />
                    <strong>Technologies:</strong> React, Node, Express, MongoDB
                  </p>
                  <div className="onlinelinks">
                    <a
                      href="https://github.com/jammudurgaprasad/E-commerse"
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label="GitHub Link"
                    >
                      <i className="fab fa-github"></i>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* Object Detection */}
          <div className="card-wrapper">
            <div className="card">
              <div className="slide slide1">
                <img src={ObjectDetection} alt="Object Detection" />
              </div>
              <div className="slide slide2">
                <div className="details">
                  <h3>Object Detection</h3>
                  <p>
                    <strong>Type:</strong> Project <br />
                    <strong>Technologies:</strong> React, TensorFlow, Django, OpenCV
                  </p>
                  <div className="onlinelinks">
                    <a
                      href="https://github.com/jammudurgaprasad/Object_Detection"
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label="GitHub Link"
                    >
                      <i className="fab fa-github"></i>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* College Predictor */}
          <div className="card-wrapper">
            <div className="card">
              <div className="slide slide1">
                <img src={FutureDesk} alt="College Predictor" />
              </div>
              <div className="slide slide2">
                <div className="details">
                  <h3>College Predictor</h3>
                  <p>
                    <strong>Type:</strong> Project <br />
                    <strong>Technologies:</strong> React, REST API, Pandas, Django
                  </p>
                  <div className="onlinelinks">
                    <a
                      href="https://github.com/jammudurgaprasad/Eapcet_College_Predictor"
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label="GitHub Link"
                    >
                      <i className="fab fa-github"></i>
                    </a>
                    <a
                      href="https://futuredesk.netlify.app/"
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label="Live Demo Link"
                    >
                      <i className="fas fa-external-link-alt"></i>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Projects;
