import { Nav, Navbar, Container } from "react-bootstrap";
import { LinkContainer } from "react-router-bootstrap";

const NavBar = () => {
  return (
    <Navbar expand="sm">
      <Container>
        <LinkContainer to="/">
          <Navbar.Brand>
            Ivan Felipe Escobar
          </Navbar.Brand>
        </LinkContainer>

        <Nav className="ml-auto links">
          <LinkContainer to="/aboutme">
            <Nav.Link>About</Nav.Link>
          </LinkContainer>

          <LinkContainer to="/projects">
            <Nav.Link>Projects</Nav.Link>
          </LinkContainer>

          <LinkContainer to="/contact">
            <Nav.Link>Contact</Nav.Link>
          </LinkContainer>
        </Nav>
      </Container>
    </Navbar>
  );
};

export default NavBar;
