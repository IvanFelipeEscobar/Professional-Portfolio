import {Nav, Navbar, Container} from 'react-bootstrap'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import {faHatWizard, faHome, faFileZipper, faCode} from '@fortawesome/free-solid-svg-icons'
const NavBar = () => {
    return(
    <Navbar bg="dark" variant="dark" expand="sm">
    <Container>
     <Navbar.Brand>Ivan Felipe Escobar</Navbar.Brand>
      <Nav className="me-auto">
        <Nav.Link to="/" active>Home <FontAwesomeIcon icon={faHome} /></Nav.Link>
        <Nav.Link to="/aboutme">About Me <FontAwesomeIcon icon={faHatWizard} /></Nav.Link>
        <Nav.Link to="/projects">Projects <FontAwesomeIcon icon={faCode}/></Nav.Link>
        <Nav.Link to="/contact">Contact Me <FontAwesomeIcon icon={faFileZipper} /></Nav.Link>
      </Nav>
    </Container>
  </Navbar>
    )
}

export default NavBar
