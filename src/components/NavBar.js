import { Nav, Navbar, Container } from "react-bootstrap";
import { LinkContainer } from "react-router-bootstrap";

const NavBar = () => {
  return (
    <Navbar expand="sm" className="p-1 navbar" bg="black" data-bs-theme="dark">
      <Container className="m-auto">
        <LinkContainer to="/">
          <Navbar.Brand className="nav__brand">Ivan Felipe Escobar</Navbar.Brand>
        </LinkContainer>
      </Container>

      <Nav className="m-3 links">
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
    </Navbar>
  );
};

export default NavBar;
