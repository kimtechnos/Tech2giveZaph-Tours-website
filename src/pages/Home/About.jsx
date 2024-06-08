import React from "react";
import aboutImg from "../../assets/banner.jpg";
import "./about.css";

const About = () => {
  return (
    <section className="about">
      <div className="about-box">
        <div className="about-image">
          <img src={aboutImg} alt="About" />
        </div>
        <div className="about-textbox">
          <h2 className="about-textbox-subtitle">About us</h2>
          <p className="about-textbox-content">
            Zaph Tours is a premier travel company based in Kenya, specializing
            in providing the best safaris and adventure tours. With a strong
            reputation for delivering exceptional travel experiences
          </p>
          <h2>Adventure Tours</h2>
          <p>
            Mount Kenya Climbing Expedition: Challenge yourself with a trek to
            the peak of Kenya's highest mountain. Great Rift Valley Adventure:
            Explore the scenic landscapes and rich biodiversity of the Great
            Rift Valley.
          </p>
        </div>
      </div>
    </section>
  );
};

export default About;
