import React from "react"
import SubmitForm from "./SubmitForm"
import { Card } from "react-bootstrap"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faFileZipper} from "@fortawesome/free-solid-svg-icons"

const Contact = () => {
    return(
        //contact html here
        <Card className='m-3'>
          <Card.Title className='m-3'><h2>Contact  <FontAwesomeIcon icon={faFileZipper}/></h2>
          </Card.Title>
          <Card.Body>
          <SubmitForm />
          </Card.Body>
        </Card>
    )
}

export default Contact
