import React from 'react'
import ProjectShowcase from '../../components/projectShowcase/ProjectShowcase'
import "./Projects.css"
import data from "./data"

const Projects = () => {
  return (
    <section id="projects">
      <h2>Projects</h2>
      <p>here are some of my works.</p>
      {data.map((item)=><ProjectShowcase key={item.id} item={item}/>)}
    </section>
  )
}

export default Projects