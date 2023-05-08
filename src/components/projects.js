import { Card, Carousel } from "react-bootstrap"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faCode } from "@fortawesome/free-solid-svg-icons"
import { faGithub } from "@fortawesome/free-brands-svg-icons"
const Projects = ({projects}) => {
    return (
        <Card className="mt-3">
          <Card.Title className='m-3'><h2>Projects <FontAwesomeIcon icon={faCode}/></h2>
          </Card.Title>
          
            <Carousel variant="dark">
            
                {
                    projects.map( p => (
                        <Carousel.Item key={p.title} className="item">
                            <img  className="projectPic d-block" src={process.env.PUBLIC_URL + p.src} alt={p.title}/>
                            <Card.Body>
                            <Carousel.Caption>
                                <h3><a href={p.link}>{p.title}</a></h3>
                                <a href={p.github}><FontAwesomeIcon icon={faGithub} /> GitHub Repo</a>
                            </Carousel.Caption>
                            </Card.Body>
                        </Carousel.Item>
                    ))
                }
            </Carousel>
          
        </Card>
    )
}
export default Projects