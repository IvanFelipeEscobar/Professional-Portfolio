import NavBar from './NavBar'
import Home from './Home'
import AboutMe from './AboutMe'
import Contact from './Contact'
import Projects from './Projects'
// import Header from "./Header"
import Footer from "./Footer"
import projects from '../projectsArray.js'
import './App.css';

import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'


const  App = () => {
    <Router>
        <NavBar/>
        <Routes>
            <Route
                path='/'
                element={<Home/>}
            />  
            <Route
                path='/aboutme'
                element={<AboutMe/>}
            />
            <Route
                path='/contact'
                element={<Contact/>}
            />
            <Route
                path='/projects'
                element={<Projects projects={projects} />}
            />        
        </Routes>
        <Footer/>
    </Router>

}

export default App;
