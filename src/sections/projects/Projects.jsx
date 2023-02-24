import React from 'react'
import ProjectShowcase from '../../components/projectShowcase/ProjectShowcase'
import "./Projects.css"

const Projects = () => {
  return (
    <section id="projects">
      <h2>Projects</h2>
      <ProjectShowcase/>
      <ProjectShowcase/>
      <ProjectShowcase/>
      <ProjectShowcase/>
      <ProjectShowcase/>
    </section>
  )
}

export default Projects