import React from "react"
import '../styles/Home.css'

const Home = () => {
    return (
        //Home HTML here
        <div className="card">
        <h2 className="card-header">
          Home
        </h2>
        <div className="card-body">
          <h5 className="card-title">Welcome to my Professional Portfolio!</h5>
          <p className="card-text">Thanks for visiting my Page, 
          I've created this application to showcase my knowledge in a wide array of technologies and tooling inluding:</p>
          <a href="https://github.com/IvanFelipeEscobar" className="btn btn-secondary">Resume</a>
        </div>
      </div>
    )
}

export default Home