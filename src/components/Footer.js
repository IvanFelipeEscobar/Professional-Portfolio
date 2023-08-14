import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faGithub,
  faLinkedin,
} from "@fortawesome/free-brands-svg-icons";

const Footer = () => {
  return (
    <footer>

      <div className="footer__links">
        <a href="https://github.com/IvanFelipeEscobar">
          <FontAwesomeIcon
            icon={faGithub}
            size="2x"
            style={{ color: "#fff" }}
          />
        </a>
        <a href="https://www.linkedin.com/in/ivan-escobar-b0ab5b204/">
          <FontAwesomeIcon
            icon={faLinkedin}
            size="2x"
            style={{ color: "#fff" }}
          />
        </a>
      </div>
      <p>Ivan Escobar ~ 2023</p>
    </footer>
  );
};
export default Footer;
