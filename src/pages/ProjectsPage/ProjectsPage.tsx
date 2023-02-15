import "./ProjectsPage.scss";
import { projects } from "../../data/data";
import Contact from "../../components/Contact/Contact";
import AnimatedPage from "../../components/AnimatedPage";
import { useEffect } from "react";

const ProjectsPage = () => {
  useEffect(() => {
    document.body.style.overflowX = "hidden";
    setTimeout(() => {
      document.body.style.overflowX = "auto";
    }, 1000)
  }, [])
  
  const pageTitle = 'These are our projects.';
  return (
    <AnimatedPage>
    <div className="projects-page">
     <h1 className="page-title darkColor lightBgColor m2t">{pageTitle}</h1>
     <div className="projects-list darkBgColor">
      <div className="container projects-container">
        <div className="projects-list-grid">
          {projects.map((project) => {
            return (
            <a key={project.id} href={project.url} target="_blank"><div className="project-grid-item">
             <div className="project-img"><img src={project.image} alt={project.title}/></div>
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
     </AnimatedPage>
  )
}

export default ProjectsPage