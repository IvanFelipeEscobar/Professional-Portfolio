import {Card} from 'react-bootstrap'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faHatWizard } from "@fortawesome/free-solid-svg-icons"
import pp from "../images/pp.png"
const AboutMe = () => {
    return (
        <Card className='m-3 card'>
          <Card.Title className='m-3'><h2>About Me  <FontAwesomeIcon icon={faHatWizard}/></h2>
          </Card.Title>
          <Card.Body>
            <Card.Text>
           <span className='about-title'>  <img src={pp} alt='ivan escobar'/><h2>Hey! I'm Felipe</h2></span>
              I am an Automotive Technician of 15+ years, looking to make a carrer switch into software development.
              Currently I am the shop manager/lead technician at Maximotor, a small family-owned repair shop in Marietta, GA.<br/>
              Problem solving is an everyday part of the Automotive industry and I am proficient in it, and to some extent enjoy the thrill of overcoming a difficult endeavor.
              Efficient communication skills are required in order to properly convey to the technician the cutomer's concern, as well as to communicate to the customer the recommended repairs.
              Because of the nauture of the work managing expectations can be tricky, but I have always found that straight-forward honesty has always served me well.
            </Card.Text>
        </Card.Body>
      </Card>
    )
}
 export default AboutMe
