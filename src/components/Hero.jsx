import React from "react";
import "../css/Hero.css";
// import Navbar from "./Navbar";
import TypedText from "./TypedText";
import SocialIcons from "./SocialIcons";

const Hero = () => {
  return (
    <main className="hero-section" id="home">
      {/* <Navbar /> */}
      <div className="hero-image-section">
        <img src="profile.png" alt="Jammu Durga Prasad" className="profile-photo" />
      </div>
      <div className="hero-curved-section">
        <div className="content">
          <p className="greeting">Hi There, I'm</p>
          <h2 className="name">Jammu<br/>Durga Prasad</h2>
          <p className="career-text">
            <TypedText />
          </p>
          <SocialIcons />
        </div>
      </div>
    </main>
  );
};

export default Hero;
