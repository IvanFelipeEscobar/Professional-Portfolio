import React from "react"
import html5 from '../images/html.png'
import css from '../images/css.png'
import node from '../images/node.png'
import js from '../images/js.png'
import reactIcon from '../images/react.png'
import resume from '../images/resume.pdf'


import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import { faHouse } from '@fortawesome/free-solid-svg-icons'

const Home = () => {
    return (
        //Home HTML here
        <div className="card text-bg-dark">
        <h2 className="card-header">
         <FontAwesomeIcon icon={faHouse} />    Home
        </h2>
        <div className="card-body">
          <h5 className="card-title">Welcome to my Professional Portfolio!</h5>
          <p className="card-text">Thanks for visiting my Page, 
          I've created this application to showcase my knowledge in a wide array of technologies and tooling inluding: </p>
         <div><img src={html5} alt="HTML 5"></img>
          <img src={css} alt="css"></img>
          <img src={js} alt="JavaScript"></img>
          <img src={node} alt="Node JS"></img>
          <img src={reactIcon} alt="React"></img></div><br></br>
          <a href={resume} className="btn btn-secondary">Resume</a>
        </div>
      </div>
    )
}

export default Home