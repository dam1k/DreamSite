import "./ProjectsPage.scss";
import { projects } from "../../data/data";
import Contact from "../../components/Contact/Contact";

const ProjectsPage = () => {
  const pageTitle = 'These are our projects.';
  return (
    <div className="projects-page">
     <h1 className="page-title darkColor lightBgColor m2t">{pageTitle}</h1>
     <div className="projects-list darkBgColor">
      <div className="container">
        <div className="projects-list-grid">
          {projects.map((project) => {
            return (
            <a href={project.url}><div key={project.id} className="project-grid-item">
             <div className="project-img"><img src={project.image}/></div>
            <h1 className="lightColor">{project.title}</h1>
            <p className="lightColor">{project.description}</p>
          </div>
          </a>)
          })}
        </div>
      </div>
      <Contact showImg={true}/>
     </div>
     </div>
  )
}

export default ProjectsPage