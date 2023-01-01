import React from 'react'
import "./Header.css"
import Profile from "../../assets/profile.jpg"

const Header = () => {
  return (
    <header id="header">
      <div className="container header__container">
        <div className="header__profile">
          <img src={Profile} alt="headerProfile" />
        </div>
        <h3>Ravindra Yadav</h3>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolorum quas facilis veniam recusandae rerum, accusantium ipsam saepe incidunt sint blanditiis officia corporis nobis accusamus cumque quisquam, quidem cupiditate culpa distinctio aliquid. Corporis eaque ratione sint consequuntur illo iusto, excepturi quo molestias error obcaecati architecto expedita amet? Commodi at alias distinctio.
        </p>
        <div className="header__cta">
          <a href="#contact" className='btn primary'>Let's Talk</a>
          <a href="#portfolio" className='btn light'>My Work</a>
        </div>
      </div>
    </header>
  )
}

export default Header