import React from 'react'
import Project from './Project';
import projects from '../projects'

const Projects = () => {
  return (
    <>
      <h2>Mes projets</h2>
      <div className='projects-container'>
        {projects.map(project => <Project project={project} />)}
      </div>
    </>
  )
}

export default Projects
