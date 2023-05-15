import React from "react"
import html5 from '../images/html.png'
import css from '../images/css.png'
import node from '../images/node.png'
import js from '../images/js.png'
import reactIcon from '../images/react.png'
import resume from '../images/resume.pdf'
import {Card} from 'react-bootstrap'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import { faHouse } from '@fortawesome/free-solid-svg-icons'

const Home = () => {
    return (
        <Card className='m-3 card'>
          <Card.Title className='m-3'><h2>Home <FontAwesomeIcon icon={faHouse}/></h2>
          </Card.Title>
          <Card.Body>
            <Card.Text> 
              Thanks for visiting my Professional Portfolio! I've created this simple application to showcase some of the 
             </Card.Text>
            <img src={html5} alt="HTML 5"/>
            <img src={css} alt="css"/>
            <img src={js} alt="JavaScript"/>
            <img src={node} alt="Node JS"/>
            <img src={reactIcon} alt="React"/><br/>
          </Card.Body>
          <Card.Footer className="fluid">
            <a href={resume} className="btn btn-secondary">Resume</a>
          </Card.Footer>
        </Card>
    )
}

export default Home