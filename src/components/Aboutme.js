import { Card } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHatWizard } from "@fortawesome/free-solid-svg-icons";
import pp from "../images/pp.png";
const AboutMe = () => {
  return (
    <Card className="m-3 card">
      <Card.Title className="m-3">
        <h2>
          About Me <FontAwesomeIcon icon={faHatWizard} />
        </h2>
      </Card.Title>
      <Card.Body className="m-3">
        <Card.Text>
          <span className="about-title">
            {" "}
            <img src={pp} alt="ivan escobar" />
            <h2>Hey! I'm Felipe</h2>
          </span>
          I am an aspiring Full Stack Web Developer leveraging over 15 years in
          the automotive industry. Recently earned a certificate in Web
          Development from the Georgia Institute of Technology, focusing on the
          MERN stack. Currently, I am the shop manager/lead technician at
          Maximotor, a small family-owned repair shop in Marietta, GA.
          <br />
          Problem solving is an everyday part of the Automotive industry and I
          am proficient in it, and enjoy the thrill of overcoming a difficult
          endeavor. Efficient communication skills are required in order to
          properly convey to the technician the cutomer's concern, and to help
          the customer understand what repairs are required.
          <br />I am passionate about software development and I am eager to
          continue to grow as a developer!
        </Card.Text>
      </Card.Body>
    </Card>
  );
};
export default AboutMe;
