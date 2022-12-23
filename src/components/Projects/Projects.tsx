import project1 from "../../assets/project1.jpg"
import project2 from "../../assets/project2.jpg"
import project3 from "../../assets/project3.jpg"

import './Projects.scss';

const Projects = () => {
  return (
    <div className="projects lightBgColor">
    <div className="container">
    <div className="projects-flex">
      <h1 className="darkColor m3b">Projects</h1>
      <p className="m4b">We really make the best websites. If you don’t believe us, let the projects speak for themselves.</p>
      <div className="projects-grid">
        <div className="project-img img1"><img src={project1}/></div>
        <div className="project-img img2"><img src={project2}/></div>
        <div className="project-img img3"><img src={project3}/></div>
      </div>
    </div>
    </div>
    </div>
  )
}

export default Projects