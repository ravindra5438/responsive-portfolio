import React from "react";
import "./About.css";
import profile from "../../assets/profile.jpg";
import { IoDownload } from "react-icons/io5";
import Card from "../../components/Card";
import data from "./data";

const About = () => {
  return (
    <section id="about">
      <div className="container about__container">
        <div className="about__left">
          <div className="about__portrait">
            <img src={profile} alt="about" />
          </div>
        </div>
        <div className="about__right">
          <h2>About me</h2>
          <div className="about__cards">
            {data.map((item) => (
              <Card key={item.id} className="about__card">
                <span className="about__cards-icon">{item.icon}</span>
                <h5>{item.title}</h5>
                <small>{item.desc}</small>
              </Card>
            ))}
          </div>
          <p>
            As a Full Stack Developer, I possess extensive knowledge and
            expertise in various programming languages, including JavaScript,
            HTML, CSS, Python, and PHP. This allows me to develop scalable,
            secure, and user-friendly web applications that offer seamless user
            experiences across various platforms.
          </p>
          <p>
            My skills also extend to Mobile Application Development, with
            specialization in React Native, a popular cross-platform framework.
            <br />
            With React Native, I develop native mobile applications that run on
            both iOS and Android devices, ensuring a consistent and reliable
            user experience for your customers.
            <br /> I pride myself on my ability to develop custom solutions that
            align with your business objectives and goals. Whether you need a
            website or mobile application from scratch, or want to optimize an
            existing one, I am here to help. Let me put my skills and experience
            to work for you. Contact me today to discuss how I can help you
            achieve your development goals.
          </p>
          <a href="#download" className="btn primary">
            Download Cv <IoDownload />
          </a>
        </div>
      </div>
    </section>
  );
};

export default About;
