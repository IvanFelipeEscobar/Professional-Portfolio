import NavBar from './components/NavBar'
import Home from './components/Home'
import AboutMe from './components/AboutMe'
import Contact from './components/Contact'
import Projects from './components/Projects'
import Footer from "./components/Footer"
import projects from './utils/projectsArray'
import './App.css';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'

const  App = () => {
   return ( <Router>
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
   )
}

export default App;
