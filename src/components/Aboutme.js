// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { faHatWizard } from "@fortawesome/free-solid-svg-icons";
import pp from "../images/pp.png";
import TypingAnimation from "./TypingAnimation";
const AboutMe = () => {
  return (<>
    <div className="animation-space"><TypingAnimation/></div>
    <div className="about-section">
      <figure>
        <img src={pp} alt="ivan escobar" className="my-pic" />{" "}
        <figcaption> Hey! I'm Felipe</figcaption>
      </figure>
      <p>
      I'm delighted to welcome you to my coding journey. With over 15 years of
      experience as an automotive mechanic, I've developed a deep appreciation
      for problem-solving, attention to detail, and a strong work ethic.
      However, my passion for creating elegant and efficient solutions in the
      digital realm led me to explore the world of web development.
     
      <br />
      Problem solving is an everyday part of the Automotive industry and I am
      proficient in it, and enjoy the thrill of overcoming a difficult endeavor.
      Efficient communication skills are required in order to properly convey to
      the technician the cutomer's concern, and to help the customer understand
      what repairs are required.
      <br />I am passionate about software development and I am eager to
      continue to grow as a developer!</p>
    </div></>
  );
};
export default AboutMe;
