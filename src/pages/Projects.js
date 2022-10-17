import React from 'react';
import ProjectItem from '../components/ProjectItem';
import '../styles/Projects.css'
import { ProjectList } from "../helpers/ProjectList";

function Projects() {
  return (
    <div className='projects'>
      <h1>My Personal Projects</h1>
      <div className='projectList'></div>
      {ProjectList.map((project, i) => {
        return <ProjectItem id={i} name={project.name} image={project.image}/>
      })}
    </div>
  )
}

export default Projects