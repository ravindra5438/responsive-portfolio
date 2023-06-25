import React, { useState } from "react";
import "./Navbar.css";
import logo from "../../assets/logo.png";
import { data } from "./data";
import { BsListNested } from "react-icons/bs";

const Navbar = () => {
  const [showSmallList, setShowSmallList] = useState(false);
  return (
    <nav>
      <div className="container nav__container">
        {/* <a href="index.html" className="nav__logo">
          <img src={logo} alt="logo.png" />
        </a> */}
        <ul className="nav__menu">
          {data.map((item) => (
            <li key={item.id}>
              <a href={item.link}>{item.title}</a>
            </li>
          ))}
        </ul>
        <div className="mobile-list-container">
        {!showSmallList && <BsListNested 
          className="btn-show"
          color="white"
          size={30}
          onClick={() => setShowSmallList((previous) => !previous)}/>  }      
          <ul className={`small-nav_menu ${showSmallList?"active":"not-active"}`}>
            {data.map((item) => (
              <li key={item.id}>
                <a onClick={() => setShowSmallList((previous) => !previous)} href={item.link}>{item.title}</a>
              </li>
            ))}
          </ul>
          </div>
      </div>
    </nav>
  );
};

export default Navbar;
