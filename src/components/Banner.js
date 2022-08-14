
import { Container, Row, Col } from "react-bootstrap";
import headerImg from "../assets/img/header-img.svg";
import 'animate.css';
import TrackVisibility from 'react-on-screen';


export const Banner = ({ translate }) => {

 
  

  return (
    <div>
      {translate === "en" ? (
        <section className="banner" id="home">
          <Container>
            <Row className="aligh-items-center">
              <Col xs={12} md={6} xl={7}>
                <TrackVisibility>
                  {({ isVisible }) =>
                    <div className={isVisible ? "animate__animated animate__fadeIn" : ""}>
                      <span className="tagline">Welcome to my Portfolio</span>
                      <h1>Hi! I'm  Geraldin Marquez </h1>
                      <span className="txt-rotate" ><span className="wrap"  >   
                      </span> FrontEnd Developer</span>
                      <p>I am a full stack web developer focused on the front-end side of developing web applications and platforms.
                        Always willing to improve my skills,creating projects,measuring myself to the challenges and with the motivation to continue learning.
                      </p>
                      <div className="cta">
                        <a href="https://drive.google.com/file/d/1PgU4cV_zbBn5KVoXlZCOHAkA4zf0QsYP/view?usp=sharing" download="CV" target="_blank" rel="noreferrer" className="btn-cv"> CV ESP</a>
                        <a href="https://drive.google.com/file/d/1JgMxBgwTtaaj3mhPv2A7NXRXQJUmPjo-/view?usp=sharing" download="CV" target="_blank" rel="noreferrer" className="btn-cv">CV ENG</a>
                      </div>
         
                    </div>}
                </TrackVisibility>
              </Col>
              <Col xs={12} md={6} xl={5}>
                <TrackVisibility>
                  {({ isVisible }) =>
                    <div className={isVisible ? "animate__animated animate__zoomIn" : ""}>
                      <img src={headerImg} alt="Header Img" />
                    </div>}
                </TrackVisibility>
              </Col>
            </Row>
          </Container>
          <div className="squares1"></div>
          <div className="squares2"></div>

          <div className="squares3"></div>

          <div className="squares4"></div>

        </section>) : (
        <section className="banner" id="home">
          <Container>
            <Row className="aligh-items-center">
              <Col xs={12} md={6} xl={7}>
                <TrackVisibility>
                  {({ isVisible }) =>
                    <div className={isVisible ? "animate__animated animate__fadeIn" : ""}>
                      <span className="tagline">Bienvenido a mi portafolio</span>
                      <h1>Hi! I'm  Geraldin Marquez </h1>
                      <span className="txt-rotate"><span className="wrap">
                      FrontEnd Developer
                        </span></span>
                      <p> Soy una desarrolladora  web Full Stack enfocada en el front-end del desarrollo de aplicaciones y plataformas web,
                      en la cual, siempre estoy dispuesta en mejorar mis habilidades, creando proyectos, midiéndome a retos y con la motivación de seguir aprendiendo.
                      </p>
                      <div className="cta">
                        <a href="https://drive.google.com/file/d/1PgU4cV_zbBn5KVoXlZCOHAkA4zf0QsYP/view?usp=sharing" download="CV" target="_blank" rel="noreferrer" className="btn-cv"> CV ESP</a>
                        <a href="https://drive.google.com/file/d/1JgMxBgwTtaaj3mhPv2A7NXRXQJUmPjo-/view?usp=sharing" download="CV" target="_blank" rel="noreferrer" className="btn-cv"> CV ENG</a>
                      </div>


                    </div>}
                </TrackVisibility>
              </Col>
              <Col xs={12} md={6} xl={5}>
                <TrackVisibility>
                  {({ isVisible }) =>
                    <div className={isVisible ? "animate__animated animate__zoomIn" : ""}>
                      <img src={headerImg} alt="Header Img" />
                    </div>}
                </TrackVisibility>
              </Col>
            </Row>
          </Container>
          <div className="squares1"></div>
          <div className="squares2"></div>

          <div className="squares3"></div>

          <div className="squares4"></div>

        </section>

      )}
    </div>
  );
}


