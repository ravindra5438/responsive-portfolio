import React from 'react'
import "./About.css";
import profile from "../../assets/profile.jpg"
import {IoDownload} from "react-icons/io5";
import Card from "../../components/Card"
import  data  from './data';

const About = () => {
  return (
   <section id='about'>
    <div className="container about__container">
      <div className="about__left">
        <div className="about__portrait">
          <img src={profile} alt='about'/>
        </div>
      </div>
      <div className="about__right">
        <h2>About me</h2>
        <div className="about__cards">
          {
            data.map(item => (
              <Card key={item.id} className="about__card">
                <span className='about__cards-icon'>{item.icon}</span>
                <h5>{item.title}</h5>
                <small>{item.desc}</small>
              </Card>
            ))
          }
        </div>
        <p>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Doloribus recusandae, totam incidunt eligendi quidem reiciendis. Dignissimos eos iusto quisquam sit? Aperiam magnam aut veritatis hic cupiditate aliquid error aliquam saepe.
        </p>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa, nemo. Vero dicta cum modi doloremque hic repudiandae aliquid exercitationem, ullam ipsam inventore, dolorem facere sunt optio dolorum tempore ut quos recusandae expedita ab molestias natus nihil, quasi impedit! Quidem voluptatum repudiandae nam quasi non laudantium est commodi laborum, ex iste?
        </p>
        <a href='#download' className='btn primary'>Download Cv <IoDownload/></a>
      </div>
    </div>
   </section>
  )
}

export default About