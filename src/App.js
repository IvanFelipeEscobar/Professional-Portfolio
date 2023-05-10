import NavBar from './components/NavBar'
import Home from './components/Home'
import AboutMe from './components/Aboutme'
import Contact from './components/Contact'
import Projects from './components/Projects'
import Footer from "./components/Footer"
import projects from './utils/projectsArray'
import './App.css';

import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'


const  App = () => {
   return ( <Router basename='/Professional-Portfolio'>
        <NavBar/>
        <Routes>
            <Route
                exact path='/*'
                element={<Home/>}
            />  
            <Route
                exact path='/aboutme'
                element={<AboutMe/>}
            />
            <Route
                exact path='/contact'
                element={<Contact/>}
            />
            <Route
                exact path='/projects'
                element={<Projects projects={projects} />}
            />        
        </Routes>
        <Footer/>
    </Router>
   )
}

export default App;
