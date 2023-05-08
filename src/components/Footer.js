import React from "react"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faPhone, faEnvelope} from "@fortawesome/free-solid-svg-icons"
import { faGithub, faLinkedin, faStackOverflow} from "@fortawesome/free-brands-svg-icons"

const Footer = () => {
    return (
        <footer>
         <div>        
         <a href="https://github.com/IvanFelipeEscobar"><FontAwesomeIcon icon={faGithub} size="2x" />  </a>
         <a href="https://www.linkedin.com/in/ivan-escobar-b0ab5b204/"><FontAwesomeIcon icon={faLinkedin} size="2x"/>  </a>
         <a href="https://stackoverflow.com/users/20161905/ivan-escobar"><FontAwesomeIcon icon={faStackOverflow} size="2x"/>  </a>
         <a href="tel:7708804516"><FontAwesomeIcon icon={faPhone} size="2x"/>  </a>
         <a href="mailto:ivnescbr1989@gmail.com"><FontAwesomeIcon icon={faEnvelope} size="2x"/></a>
        </div>
            <h6>made with &#129505; by Ivan Felipe Escobar. MIT License 2023</h6>
        </footer>
    )
}
export default Footer
