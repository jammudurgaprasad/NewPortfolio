// import React, { useEffect } from "react";
// import { DotLottieReact } from "@lottiefiles/dotlottie-react";
// import "../css/Skills.css";
// const Skills = () => {
//   useEffect(() => {
//     const observer = new IntersectionObserver(
//       (entries) => {
//         entries.forEach((entry) => {
//           if (entry.isIntersecting) {
//             entry.target.classList.add("is-visible");
//           }
//         });
//       },
//       { threshold: 0.2 }
//     );

//     const elements = document.querySelectorAll(".fade-in");
//     elements.forEach((el) => observer.observe(el));

//     return () => {
//       elements.forEach((el) => observer.unobserve(el));
//     };
//   }, []);

//   const skills = [
//     "Java",
//     "Python",
//     "JavaScript",
//     "React",
//     "Spring",
//     "Django",
//     "Node.js",
//     "SQL",
//     "MongoDB",
//     "Git",
//     "AI",
//     "ML",
//   ];

//   return (
//     <div className="container" id="skills">
//       <main className="skills-section">
//         <h1 className="skills-title fade-in">My Skills</h1>

//         <div className="lottie-container fade-in">
//           <DotLottieReact
//             src="https://lottie.host/526605ea-5188-4a04-b9a0-2f7ecb205050/vUO5dex0vF.lottie"
//             loop
//             autoplay
//           />
//         </div>
//       </main>

//       <div className="skills-marquee-container" aria-label="Scrolling skills">
//         <div className="skills-marquee">
//           {skills.concat(skills).map((skill, i) => (
//             <div className="skill-item" key={i}>
//               <div className="skill-icon">
//                 <img
//                   src={`https://via.placeholder.com/80?text=${skill}`}
//                   alt={skill}
//                 />
//               </div>
//               <p className="skill-name">{skill}</p>
//             </div>
//           ))}
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Skills;



import React, { useEffect } from "react";
import { DotLottieReact } from "@lottiefiles/dotlottie-react";
import "../css/Skills.css";

// Import all icons
import clanguageIcon from "../icons/clanguage.png";
import pythonIcon from "../icons/python.png";
import javaIcon from "../icons/java.png";
import javascriptIcon from "../icons/javascript.jpeg";
import htmlIcon from "../icons/html.png";
import cssIcon from "../icons/css.png";
import reactIcon from "../icons/React.png";
import nodejsIcon from "../icons/nodejs.png";
import expressIcon from "../icons/express.png";
import djangoIcon from "../icons/django.png";
import springIcon from "../icons/spring.png";
import springbootIcon from "../icons/springboot.png";
import sqlIcon from "../icons/sql.png";
import mysqlIcon from "../icons/mysql.png";
import mongodbIcon from "../icons/mongodb.png";
import jdbcIcon from "../icons/jdbc.png";
import aiIcon from "../icons/ai.jpg";
import mlIcon from "../icons/ml.png";
import nlpIcon from "../icons/nlp.png";
import opencvIcon from "../icons/opencv.png";
import numpyIcon from "../icons/numpy.png";
import pandasIcon from "../icons/pandas.png";
import matplotlibIcon from "../icons/Matplotlib.png";
import scikitIcon from "../icons/Scikit-learn.png";
import gitIcon from "../icons/git.png";
import githubIcon from "../icons/github.png";
import vscodeIcon from "../icons/Visual_Studio_Code.png";
import netbeansIcon from "../icons/NetBeans.png";
import intellijIcon from "../icons/intellijIdea.png";

const Skills = () => {
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible");
          }
        });
      },
      { threshold: 0.2 }
    );

    const elements = document.querySelectorAll(".fade-in");
    elements.forEach((el) => observer.observe(el));

    return () => {
      elements.forEach((el) => observer.unobserve(el));
    };
  }, []);

  const skills = [
    { name: "C", icon: clanguageIcon },
    { name: "Python", icon: pythonIcon },
    { name: "Java", icon: javaIcon },
    { name: "JavaScript", icon: javascriptIcon },
    { name: "HTML", icon: htmlIcon },
    { name: "CSS", icon: cssIcon },
    { name: "React.js", icon: reactIcon },
    { name: "Node.js", icon: nodejsIcon },
    { name: "Express.js", icon: expressIcon },
    { name: "Django", icon: djangoIcon },
    { name: "Spring 6", icon: springIcon },
    { name: "Spring Boot 3", icon: springbootIcon },
    { name: "SQL", icon: sqlIcon },
    { name: "MySQL", icon: mysqlIcon },
    { name: "MongoDB", icon: mongodbIcon },
    { name: "JDBC", icon: jdbcIcon },
    { name: "AI", icon: aiIcon },
    { name: "ML", icon: mlIcon },
    { name: "NLP", icon: nlpIcon },
    { name: "OpenCV", icon: opencvIcon },
    { name: "NumPy", icon: numpyIcon },
    { name: "Pandas", icon: pandasIcon },
    { name: "Matplotlib", icon: matplotlibIcon },
    { name: "Scikit-learn", icon: scikitIcon },
    { name: "Git", icon: gitIcon },
    { name: "GitHub", icon: githubIcon },
    { name: "VS Code", icon: vscodeIcon },
    { name: "NetBeans", icon: netbeansIcon },
    { name: "IntelliJ IDEA", icon: intellijIcon },
  ];

  return (
    <div className="container" id="skills">
      <main className="skills-section">
        <h1 className="skills-title fade-in">My Skills</h1>

        <div className="lottie-container fade-in">
          <DotLottieReact
            src="https://lottie.host/526605ea-5188-4a04-b9a0-2f7ecb205050/vUO5dex0vF.lottie"
            loop
            autoplay
          />
        </div>
      </main>

      <div className="skills-marquee-container" aria-label="Scrolling skills">
        <div className="skills-marquee">
          {skills.concat(skills).map((skill, i) => (
            <div className="skill-item" key={i}>
              <div className="skill-icon">
                <img src={skill.icon} alt={skill.name} />
              </div>
              <p className="skill-name">{skill.name}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Skills;