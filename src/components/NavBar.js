import {Nav, Navbar, Container} from 'react-bootstrap'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import {faHatWizard, faHome, faFileZipper, faCode} from '@fortawesome/free-solid-svg-icons'
import { LinkContainer } from 'react-router-bootstrap'
const NavBar = () => {
    return(
    <Navbar expand="sm">
    <Container>
     <Navbar.Brand>
          <h1>Ivan Felipe Escobar</h1>
     </Navbar.Brand>
      <Nav className="me-auto">
        <LinkContainer to="/"><Nav.Link>Home <FontAwesomeIcon icon={faHome} /></Nav.Link></LinkContainer>
        <LinkContainer to="/aboutme"><Nav.Link>About Me <FontAwesomeIcon icon={faHatWizard} /></Nav.Link></LinkContainer>
        <LinkContainer to="/projects"><Nav.Link>Projects <FontAwesomeIcon icon={faCode}/></Nav.Link></LinkContainer>
        <LinkContainer to="/contact"><Nav.Link>Contact Me <FontAwesomeIcon icon={faFileZipper} /></Nav.Link></LinkContainer>
      </Nav>
    </Container>
  </Navbar>
    )
}

export default NavBar
