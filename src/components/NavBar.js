import React from "react"
function NavBar({currentPage, handlePageChange}){
    return(
        //nav bar html here
        <ul className="nav nav-tabs">
            <li className="nav-item">
                <a 
                    href="#home" onClick={()=>handlePageChange(`Home`)} 
                    className={currentPage===`Home`?`nav-link active`:`nav-link`}
                > 
                Home
                </a>
            </li>
            <li className="nav-item">
                <a 
                    href="#aboutme" onClick={()=>handlePageChange(`AboutMe`)} 
                    className={currentPage===`AboutMe`?`nav-link active`:`nav-link`}
                > 
                About Me
                </a>
            </li>
            <li className="nav-item">
                <a 
                    href="#projects" onClick={()=>handlePageChange(`Projects`)} 
                    className={currentPage===`Projects`?`nav-link active`:`nav-link`}
                > 
                Projects
                </a>
            </li>
            <li className="nav-item">
                <a 
                    href="#contact" onClick={()=>handlePageChange(`Contact`)} 
                    className={currentPage===`Contact`?`nav-link active`:`nav-link`}
                > 
                Contact
                </a>
            </li>
        </ul>
    )
}

export default NavBar
