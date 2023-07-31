// import { Nav, Navbar, Container } from "react-bootstrap";
// import { LinkContainer } from "react-router-bootstrap";
import { Link } from "react-router-dom";
const NavBar = () => {
  const linkStyle = {
    textDecoration: "none",
    color: `aliceblue`,
  };
  return (
    <div className="main-header">
      <div className="nav__brand">
        <Link to="/" style={linkStyle}>
          <h1>Ivan Felipe Escobar</h1>
        </Link>
      </div>
      <nav className="nav">
        <ul className="nav__links">
          <li className="nav__link">
            <Link to="/aboutme" style={linkStyle}>
              About
            </Link>
          </li>
          <li className="nav__link">
            <Link to="/projects" style={linkStyle}>
              Projects
            </Link>
          </li>
          <li className="nav__link">
            <Link to="/contact" style={linkStyle}>
              Contact
            </Link>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default NavBar;
