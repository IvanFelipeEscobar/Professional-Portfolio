import React from "react"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faGithub } from "@fortawesome/free-brands-svg-icons"
const Projects = (props) => {
    return (
        <div className="card">
            <h2 className="card-header">
             Projects:
            </h2>
            <ul className="list-group">
      {/* Here we map over each grocery item and return a new array of `li` elements that contains the grocery name */}
      {/* When using map you must provide a unique key attribute to each item. Ours is `item.id` */}
      {props.projects.map(project => (
        <li className="list-group-item" key={project.title} alt={project.title}>
         <h3 className="card-header"><a href={project.link}>{project.title}</a></h3>
         <a href={project.link}><img className="card-body" src={project.src} alt={project.title}></img></a>
         <div className="card-footer">
            <a href={project.github}><FontAwesomeIcon icon={faGithub} /> GitHub</a>
         </div>
        </li>
      ))}
            </ul>
        </div>
    )
}
export default Projects