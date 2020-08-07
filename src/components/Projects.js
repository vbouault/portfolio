import React from 'react'
import Project from './Project';
import projects from '../projects'

const Projects = () => {
  return (
    <div>
      <h3>Mes projets</h3>
      {projects.map(project => <Project project={project}/>)}
    </div>
  )
}

export default Projects
