import React from "react"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faFileZipper, faPhone, faEnvelope} from "@fortawesome/free-solid-svg-icons"
import { faGithub, faLinkedin} from "@fortawesome/free-brands-svg-icons"

const Contact = () => {
    return(
        //contact html here
        <div className="card home">
        <h2 className="card-header">
         <FontAwesomeIcon icon={faFileZipper} />    Contact
        </h2>
        <div className="card-body">
         
                <a href="https://github.com/IvanFelipeEscobar"><FontAwesomeIcon icon={faGithub} size="3x" /> GitHub </a>
                <a href="https://www.linkedin.com/in/ivan-escobar-b0ab5b204/"><FontAwesomeIcon icon={faLinkedin} size="3x"/> LinkedIn </a>
                <a href="tel:7708804516"><FontAwesomeIcon icon={faPhone} size="3x"/> Phone # : (770) 880 - 4516</a>
                <a href="mailto:ivnescbr1989@gmail.com"><FontAwesomeIcon icon={faEnvelope} size="3x"/> IvnEscbr1989@Gmail.com</a>
                <br></br>
                <p>Thanks for visiting my site! Please don't hesitate to contact me with any thoughts, comments or concerns. I am very open to constructive criticism! 
                    Potential employers always welcome
                </p>
        </div>
      </div>
    )
}

export default Contact