import React, {useState} from "react";
import NavBar from './NavBar'
import Home from './Home'
import AboutMe from './AboutMe'
import Contact from './Contact'
import Projects from './Projects'
import Header from "./Header"
import Footer from "./Footer"
import projects from '../projectsArray.js'

export default function PortfolioContainer() {
    const [currentPage, setCurrentPage] = useState('Home');
  
    // This method is checking to see what the value of `currentPage` is. Depending on the value of currentPage, we return the corresponding component to render.
    const renderPage = () => {
      if (currentPage === 'Home') {
        return <Home />;
      }
      if (currentPage === 'AboutMe') {
        return <AboutMe />;
      }
      if (currentPage === 'Contact') {
        return <Contact />;
      }
      return <Projects projects={projects} />;
    };
  
    const handlePageChange = (page) => setCurrentPage(page);
  
    return (
      <>
        <Header />
        {/* We are passing the currentPage from state and the function to update it */}
        <NavBar currentPage={currentPage} handlePageChange={handlePageChange} />
        {/* Here we are calling the renderPage method which will return a component  */}
        {renderPage()}
        <Footer />
      </>
    );
  }