import { Carousel } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
const Projects = ({ projects }) => {
  return (
    <div className="center-section">
      <div className="project__title">
        <h1>Projects...</h1>
        <p></p>
      </div>
      <Carousel
        className="carousel"
        indicators={false}
        pause="hover"
      >
        {projects.map((p) => (
          <Carousel.Item key={p.title}>
            <div className="carousel__item">
              <img
                className="projectPic"
                src={process.env.PUBLIC_URL + p.src}
                alt={p.title}
              />

              <a href={p.link} className="carousel__item--project-title">{p.title}</a>
              <p>{p.description}</p>
              <a href={p.github}>
                <FontAwesomeIcon icon={faGithub} /> GitHub Repo
              </a>
            </div>
          </Carousel.Item>
        ))}
      </Carousel>
    </div>
  );
};
export default Projects;
