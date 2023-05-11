import { HashRouter as Router, Routes, Route} from 'react-router-dom'
import NavBar from './components/NavBar'
import Home from './components/Home'
import AboutMe from './components/Aboutme'
import Contact from './components/Contact'
import Projects from './components/Projects'
import Footer from "./components/Footer"
import projects from './utils/projectsArray'
import './App.css';
const  App = () => {
   return ( <Router basename='/Professional-Portfolio'>
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
