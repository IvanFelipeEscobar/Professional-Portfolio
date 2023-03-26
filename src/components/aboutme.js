import React from "react"
import '../styles/AboutMe.css'

const AboutMe = () => {
    return (
        //About me html here
       <div className="card">
        <h2 className="card-header">
         About Me:
        </h2>
        <div className="card-body">
          <h5 className="card-title">Hi!</h5>
          <p className="card-text">
            My name is Ivan Escobar I am 33 years old and have been an automotive mechanic for over 15 years. Born in Medellin, Colombia where I lived the first decade of my life. Spanish is my first language and I am still proficient at it. 
            Currently, I am actively trying to make a career change into software development and have been learning a wide array of development technologies and tooling. This very site is a good example of the skills I've learned in the software development bootcamp I am currently attending.
            To see more examples of my work please visit the Projects portion of this site! Thank you for visiting!!!
          </p>
          </div>
       </div>
    )
}
 export default AboutMe