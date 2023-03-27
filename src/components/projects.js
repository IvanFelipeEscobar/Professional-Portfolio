import React from "react"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faGithub } from "@fortawesome/free-brands-svg-icons"
const Projects = (props) => {
    return (
        <div className="card text-bg-dark">
            <h2 className="card-header">
             Projects:
            </h2>
            <ul className="list-group">
     {props.projects.map(project => (
        <li className="list-group-item" key={project.title} alt={project.title}>
         <h3><a href={project.link}>{project.title}</a></h3>
         <a href={project.link}><img src={project.src} alt={project.title} className="projectPic"/></a>
         <div>
            <a href={project.github}><FontAwesomeIcon icon={faGithub} /> GitHub Repo</a>
         </div>
        </li>
      ))}
            </ul>
        </div>
    )
}
export default Projects