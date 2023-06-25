import React from "react";
import "./Header.css";
import Profile from "../../assets/profile.jpg";

const Header = () => {
  return (
    <section id="header">
      <div className="container header__container">
        <div className="header__profile">
          <img src={Profile} alt="headerProfile" />
        </div>
        <h3>Ravindra Yadav</h3>
        <p>
          Welcome to my website,I am a skilled and experienced Full Stack web
          and Mobile Application Developer. With a deep passion for technology
          and innovation, I am committed to providing exceptional solutions that
          cater to your unique needs and exceed your expectations.
        </p>
        <div className="header__cta">
          <a href="#contact" className="btn primary">
            Let's Talk
          </a>
          <a href="#projects" className="btn light">
            My Work
          </a>
        </div>
      </div>
    </section>
  );
};

export default Header;
