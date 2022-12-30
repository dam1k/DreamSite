
// import { projects } from '../../data/data';
import { Link } from 'react-router-dom';
import {useState} from "react";
import './Projects.scss';

import { projects } from '../../data/data';

const Projects = () => {
  return (
    <div className="projects lightBgColor">
    <div className="container">
    <div className="projects-flex">
      <h1 className="darkColor m3b">Projects</h1>
      <p className="m4b">We really make the best websites. If you don't believe us, let the projects speak for themselves.</p>
      <div className="projects-grid">
         
         {projects.slice(0, 3).map(project => {
          return <div key={project.id} className={`project-img img${project.id}`}>
              <a href={project.url}  target="_blank"><img src={project.image}/></a>
            </div> 
         })}

      </div>
    </div>
    </div>
    </div>
  )
}

export default Projects