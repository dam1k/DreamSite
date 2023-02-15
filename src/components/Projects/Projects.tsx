// import { projects } from '../../data/data';
import { Link } from 'react-router-dom';
import {useState, useEffect, useRef} from "react";
import './Projects.scss';

import { projects } from '../../data/data';

const Projects = () => {
const [isVisible, setIsVisible] = useState(false);
const projectsRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      const entry = entries[0];
      if(entry.isIntersecting) {
        setIsVisible(true);
        console.log('yuh');
      } 
      // entries.forEach(entry => {
      //   if(entry.isIntersecting) {
      //     setIsVisible(true);
      //   }
      // })
  })
  observer.observe(projectsRef.current!);
  }, []);

  return (
    <div className="projects lightBgColor">
    <div className="container">
    <div className="projects-flex">
      <h1 className="darkColor m3b">Projects</h1>
      <p className="m4b">We really make the best websites. If you don't believe us, let the projects speak for themselves.</p>
      <div
      ref={projectsRef}
      className={`${isVisible ? "projects-visible" : "projects-hidden"} projects-grid`}>
         {projects.slice(0, 3).map(project => {
          return <div key={project.id} 
          className={`project-img img${project.id}`}
          >
              <a href={project.url} target="_blank"><img src={project.image} alt={`project-${project.title}`}/></a>
            </div> 
         })}
      </div>
    </div>
    </div>
    </div>
  )
}

export default Projects