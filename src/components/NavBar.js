import {Nav, Navbar, Container} from 'react-bootstrap'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import {faHatWizard, faHome, faFileZipper, faCode} from '@fortawesome/free-solid-svg-icons'
import { LinkContainer } from 'react-router-bootstrap'
const NavBar = () => {
    return(
    <Navbar bg="dark" variant="dark">
    <Container>
     <LinkContainer to="/"><Navbar.Brand href="/">Ivan Felipe Escobar</Navbar.Brand></LinkContainer>
      <Nav className="me-auto">
        <LinkContainer><Nav.Link href="/">Home <FontAwesomeIcon icon={faHome} /></Nav.Link></LinkContainer>
        <LinkContainer><Nav.Link href="/aboutme">About Me <FontAwesomeIcon icon={faHatWizard} /></Nav.Link></LinkContainer>
        <LinkContainer><Nav.Link href="/projects">Projects <FontAwesomeIcon icon={faCode}/></Nav.Link></LinkContainer>
        <LinkContainer><Nav.Link href="/contact">Contact Me <FontAwesomeIcon icon={faFileZipper} /></Nav.Link></LinkContainer>
      </Nav>
    </Container>
  </Navbar>
    )
}

export default NavBar
