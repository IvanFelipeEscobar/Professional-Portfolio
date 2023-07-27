import React from "react"
import html5 from '../images/html.png'
import css from '../images/css.png'
import node from '../images/node.png'
import js from '../images/js.png'
import reactIcon from '../images/react.png'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import { faHouse } from '@fortawesome/free-solid-svg-icons'

const Home = () => {
    return (
        <div className='card'>
          <h2>Home <FontAwesomeIcon icon={faHouse}/></h2>
        <div>
              Thanks for visiting my Professional Portfolio! I've created this React Single Page Application to showcase some of my knowledge in web development
             
             <div className="img-sec">
            <img src={html5} alt="HTML 5"/>
            <img src={css} alt="css"/>
            <img src={js} alt="JavaScript"/>
            <img src={node} alt="Node JS"/>
            <img src={reactIcon} alt="React"/><br/>
             </div>
          
            <a href="https://docs.google.com/document/d/17Aw-E1eh9iOF9uW4VQX1DSyYzwHuMcKe/edit?usp=sharing&ouid=106679092608625552104&rtpof=true&sd=true" className="btn btn-secondary">Resume</a>
        </div>
        </div>
    )
}

export default Home