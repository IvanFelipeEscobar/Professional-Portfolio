import React from "react"
import html5 from '../images/html.png'
import css from '../images/css.png'
import node from '../images/node-js-icon-8.jpg'
import js from '../images/js.png'
import ts from '../images/ts.png'
import reactIcon from '../images/react.png'
import mongo from '../images/mongo.png'
import mysql from '../images/mysql.png'

const Home = () => {
    return (
        <div className='center-section home'>
        
              <h2 className="home-title">Welcome</h2>
              
             <div className="img-sec">

            <img src={html5} alt="HTML 5"/>
            <img src={css} alt="css"/>
            <img src={js} alt="JavaScript"/>
            <img src={node} alt="Node JS"/>
            <img src={reactIcon} alt="React"/>
            <img src={mongo} alt="MongoDb"/>
            <img src={mysql} alt="MySql"/>
            <img src={ts} alt="Typescript"/>
            <br/>
             </div>
          
            <a href="https://docs.google.com/document/d/17Aw-E1eh9iOF9uW4VQX1DSyYzwHuMcKe/edit?usp=sharing&ouid=106679092608625552104&rtpof=true&sd=true" rel="noreferrer" target="_blank"><div className="resume-btn">RESUME</div></a>
        
        </div>
    )
}

export default Home