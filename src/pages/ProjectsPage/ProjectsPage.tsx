import "./ProjectsPage.scss";
import { projects } from "../../data/projects";
import Contact from "../../components/Contact/Contact";

const ProjectsPage = () => {
  const pageTitle = 'Check out our projects!';
  return (
    <div className="projects-page lightBgColor">
     <h1 className="projects-title darkColor lightBgColor m2t">{pageTitle}</h1>
     <div className="projects-list darkBgColor">
      <div className="container">
        <div className="projects-list-grid">
          {projects.map((project) => {
            return (<div className="project-grid-item">
             <div className="project-img"><img src={project.image}/></div>
            <h1 className="lightColor">{project.title}</h1>
            <p className="lightColor">{project.description}</p>
          </div>)
          })}
        </div>
      </div>
      <Contact/>
     </div>
     </div>
  )
}

export default ProjectsPage