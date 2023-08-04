// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { faHatWizard } from "@fortawesome/free-solid-svg-icons";
import { Col, Row } from "react-bootstrap";
import pp from "../images/pp.png";
import TypingAnimation from "./TypingAnimation";
const AboutMe = () => {
  return (
    <div className="center-section">
      <TypingAnimation />
      <Row>
        <Col className="pic-box" xs={12} sm={6} md={4}>
          <figure>
            <img src={pp} alt="ivan escobar" className="my-pic" />
          </figure>
        </Col>
        <Col className="text-box" xs={12} sm={6} md={8}>
          <p>
            I am a mechanic with 15 years of experience who transitioned into
            web development through a Flex Full Stack Web Development Bootcamp
            at the Georgia Institute of Technology. My expertise lies in the
            MERN stack, encompassing MongoDB, Express, React, and Node.js. My
            skillset includes HTML, CSS, JavaScript, Bootstrap, jQuery, and
            server-side rendering with Handlebars.js. I'm familiar with both SQL
            (MySQL and Sequelize as an ORM) and NoSQL (MongoDB with Mongoose as
            the ODM) databases. I excel in building RESTful APIs, consuming them
            using tools like Postman, and developing modern, high-performance
            applications with React. I've also explored TypeScript for enhanced
            code maintainability. With a unique blend of mechanical and software
            knowledge, I'm eager to take on new challenges and continue to grow
            as a software development professional.
          </p>
        </Col>
      </Row>
    </div>
  );
};
export default AboutMe;
