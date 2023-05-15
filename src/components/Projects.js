import { Card, Carousel } from "react-bootstrap"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faCode } from "@fortawesome/free-solid-svg-icons"
import { faGithub } from "@fortawesome/free-brands-svg-icons"
const Projects = ({projects}) => {
    return (
        <Card className="m-3 card">
          <Card.Title className='m-3'><h2>Projects <FontAwesomeIcon icon={faCode}/></h2>
          </Card.Title>
          
            <Carousel variant="dark">
            
                {
                    projects.map( p => (
                        <Carousel.Item key={p.title} >
                            <Card className="item m-5">
                            <img  className="projectPic" src={process.env.PUBLIC_URL + p.src} alt={p.title}/>
                            
                            <Card.Text>
                                <h3><a href={p.link}>{p.title}</a></h3>
                                <a href={p.github}><FontAwesomeIcon icon={faGithub} /> GitHub Repo</a>
                            </Card.Text>
                            </Card>
                        </Carousel.Item>
                    ))
                }
            </Carousel>
          
        </Card>
    )
}
export default Projects
