import React, { useState } from "react";
import "./Navbar.css";
import logo from "../../assets/logo.png";
import { data } from "./data";
import { IoColorFilterSharp } from "react-icons/io5";

const Navbar = () => {
  const [showSmallList, setShowSmallList] = useState(false);
  return (
    <nav>
      <div className="container nav__container">
        <a href="index.html" className="nav__logo">
          <img src={logo} alt="logo.png" />
        </a>
        <ul className="nav__menu">
          {data.map((item) => (
            <li key={item.id}>
              <a href={item.link}>{item.title}</a>
            </li>
          ))}
        </ul>
        <button
          className="btn"
          onClick={() => setShowSmallList((previous) => !previous)}
        >
          click
        </button>
        {showSmallList && (
          <ul className="small-nav_menu">
            {data.map((item) => (
              <li key={item.id}>
                <a href={item.link}>{item.title}</a>
              </li>
            ))}
          </ul>
        )}
        <div className="nav__themeIcon">
          <IoColorFilterSharp color="#fff" size={"3.5rem"} />
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
