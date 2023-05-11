import {Nav, Navbar, Container} from 'react-bootstrap'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import {faHatWizard, faHome, faFileZipper, faCode} from '@fortawesome/free-solid-svg-icons'
import {Link} from 'react-router-dom'
const NavBar = () => {
    return(
    <Navbar bg="dark" variant="dark" expand="sm">
    <Container>
     <Navbar.Brand>Ivan Felipe Escobar</Navbar.Brand>
      <Nav className="me-auto">
        <Nav.Link><Link to="/">Home <FontAwesomeIcon icon={faHome} /></Link></Nav.Link>
        <Nav.Link><Link to="/aboutme">About Me <FontAwesomeIcon icon={faHatWizard} /></Link></Nav.Link>
        <Nav.Link><Link to="/projects">Projects <FontAwesomeIcon icon={faCode}/></Link></Nav.Link>
        <Nav.Link><Link to="/contact">Contact Me <FontAwesomeIcon icon={faFileZipper} /></Link></Nav.Link>
      </Nav>
    </Container>
  </Navbar>
    )
}

export default NavBar
