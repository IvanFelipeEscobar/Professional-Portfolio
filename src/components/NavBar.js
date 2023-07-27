// import { Nav, Navbar, Container } from "react-bootstrap";
// import { LinkContainer } from "react-router-bootstrap";
import { Link } from "react-router-dom";
const NavBar = () => {
  return (
    // <Navbar expand="sm">

    //   <Container>
    //     <Navbar.Brand>
    //       <h1>Ivan Felipe Escobar</h1>
    //     </Navbar.Brand>
    //     <Nav className="me-auto">
    //       <LinkContainer to="/">
    //         <Nav.Link>Home</Nav.Link>
    //       </LinkContainer>
    //       <LinkContainer to="/aboutme">
    //         <Nav.Link>About</Nav.Link>
    //       </LinkContainer>
    //       <LinkContainer to="/projects">
    //         <Nav.Link>Projects</Nav.Link>
    //       </LinkContainer>
    //       <LinkContainer to="/contact">
    //         <Nav.Link>Contact</Nav.Link>
    //       </LinkContainer>
    //     </Nav>
    //   </Container>

    // </Navbar>
    <nav className="main-nav">
      <Link to="/">
        <div className="man-nav__brand">Ivan Felipe Escobar</div>
      </Link>
      <ul className="main-nav__links">
        <li className="main-nav__link">
          <Link to="/aboutme">About</Link>
        </li>
        <li className="main-nav__link">
          <Link to="/projects">Projects</Link>
        </li>
        <li className="main-nav__link">
          <Link to="/contact">Contact</Link>
        </li>
      </ul>
    </nav>
  );
};

export default NavBar;
