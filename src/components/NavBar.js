import React from "react"
import '../styles/NavBar.css'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import {faHatWizard, faHome, faFileZipper, faCode} from '@fortawesome/free-solid-svg-icons'
function NavBar({currentPage, handlePageChange}){
    return(
        //nav bar html here
        <ul className="nav nav-tabs">
            <li className="nav-item">
                <a 
                    href="#home" onClick={()=>handlePageChange(`Home`)} 
                    className={currentPage===`Home`?`nav-link active`:`nav-link`}
                > 
                Home <FontAwesomeIcon icon={faHome} />
                </a>
            </li>
            <li className="nav-item">
                <a 
                    href="#aboutme" onClick={()=>handlePageChange(`AboutMe`)} 
                    className={currentPage===`AboutMe`?`nav-link active`:`nav-link`}
                > 
                About Me <FontAwesomeIcon icon={faHatWizard} />
                </a>
            </li>
            <li className="nav-item">
                <a 
                    href="#projects" onClick={()=>handlePageChange(`Projects`)} 
                    className={currentPage===`Projects`?`nav-link active`:`nav-link`}
                > 
                Projects  <FontAwesomeIcon icon={faCode}/>
                </a>
            </li>
            <li className="nav-item">
                <a 
                    href="#contact" onClick={()=>handlePageChange(`Contact`)} 
                    className={currentPage===`Contact`?`nav-link active`:`nav-link`}
                > 
                Contact <FontAwesomeIcon icon={faFileZipper}/>
                </a>
            </li>
        </ul>
    )
}

export default NavBar
