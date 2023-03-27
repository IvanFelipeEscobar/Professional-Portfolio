import React from "react"
import Form from "./Form"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faFileZipper} from "@fortawesome/free-solid-svg-icons"
// import { faGithub, faLinkedin} from "@fortawesome/free-brands-svg-icons"

const Contact = () => {
    return(
        //contact html here
        <div className="card text-bg-dark">
        <h2 className="card-header">
         <FontAwesomeIcon icon={faFileZipper} />    Contact
        </h2>
        <div className="card-body">
            <Form />
        </div>
      </div>
    )
}

export default Contact