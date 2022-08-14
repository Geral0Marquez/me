import { Container, Row, Col, Tab, Nav } from "react-bootstrap";
import projImg1 from "../assets/img/ecom.PNG";
import projImg2 from "../assets/img/rik.PNG";
import projImg3 from "../assets/img/W.PNG";
import projImg4 from "../assets/img/Pokedex.PNG";
import colorSharp2 from "../assets/img/color-sharp2.png";
import 'animate.css';
import TrackVisibility from 'react-on-screen';
import nodee from "../assets/img/node.png";
import react from "../assets/img/react.png";
import java from "../assets/img/java.png";
import hero from "../assets/img/hero.png";
import bost from "../assets/img/bost.png";
import html from "../assets/img/htmln.png"
import css from "../assets/img/css.png";
import elee from "../assets/img/elee.png";
import redux from "../assets/img/redux.png";
import router from "../assets/img/router.png"
import g from "../assets/img/G.png";


export const Portfolio = ({ translate }) => {




  return (
    <div >
      {translate === "en" ? (
        <section className="project" id="project">
          <Container  >
            <Row>
              <Col size={12}>
                <TrackVisibility>
                  {({ isVisible }) =>
                    <div className={isVisible ? "animate__animated animate__fadeIn" : ""}>
                      <h2 className="space" >Portfolio</h2>

                      <Tab.Container id="projects-tabs" defaultActiveKey="first">
                        <Nav variant="pills" className="nav-pills mb-5 justify-content-center align-items-center" id="pills-tab" >                          <Nav.Item>
                            <Nav.Link eventKey="first" >Proyects</Nav.Link>

                          </Nav.Item>

                          <Nav.Item>
                            <Nav.Link eventKey="third">Technologies</Nav.Link>
                          </Nav.Item>
                        </Nav>

                        <Tab.Content id="slideInUp" className={isVisible ? "animate__animated animate__slideInUp" : ""}>
                          <Tab.Pane eventKey="first">
                            <Row>
                              <Col size={12} md={6}>
                                <div className="proj-imgbx">
                                  <img src={projImg1} alt="" />
                                  <div className="proj-txtx">
                                    <h4 >E-comerce</h4>
                                    <span>Online site for buying & selling products</span>
                                    <div className="bu">
                                      <div className="bu-cv">
                                        <a href="https://gregarious-rolypoly-66a07c.netlify.app/" >See proyect</a></div>


                                    </div>
                                  </div>
                                </div>
                              </Col>
                              <Col size={12} md={6}>
                                <div className="proj-imgbx">
                                  <img src={projImg2} alt="" />
                                  <div className="proj-txtx">
                                    <h4 >Rick & Morty</h4>
                                    <span>Look for all the Rick & Morty's worlds by their ID</span>
                                    <div className="bu">
                                      <div className="bu-cv">
                                        <a href="https://exquisite-chimera-fa48da.netlify.app/" >See proyect</a></div>


                                    </div>
                                  </div>
                                </div>
                              </Col>
                              <Col size={12} md={6}>
                                <div className="proj-imgbx">
                                  <img src={projImg3} alt="" />
                                  <div className="proj-txtx">
                                    <h4 >Weather App</h4>
                                    <span>Activate your location to know how the weather is anywhere</span>
                                    <div className="bu">
                                      <div className="bu-cv">
                                        <a href="https://fanciful-khapse-305e9b.netlify.app/" >See proyect</a></div>


                                    </div>
                                  </div>
                                </div>
                              </Col>
                              <Col size={12} md={6}>
                                <div className="proj-imgbx">
                                  <img src={projImg4} alt="" />
                                  <div className="proj-txtx">
                                    <h4 >Pokedex</h4>
                                    <span>See your favorite pokemon information</span>
                                    <div className="bu">
                                      <div className="bu-cv">
                                        <a href="https://polite-bombolone-83315b.netlify.app/" >See proyect</a></div>


                                    </div>
                                  </div>
                                </div>
                              </Col>

                            </Row>
                          </Tab.Pane>

                          <Tab.Pane eventKey="third">
                            <div id='tecnologias-link'>
                              <div className='tecnologias' id='tecnologias'>
                                <div id='tecnologias-pc'>

                                  <div className='tecnologies animate__animated animate__backInLeft'  >

                                    <div><img src={react} alt="" className='react' />
                                      <div className='title-tecno'>React</div>
                                    </div>
                                    <div><img src={java} alt="" className='js' />
                                      <div className='title-tecno'>JavaScript</div>
                                    </div>
                                    <div><img src={html} alt="" className='html5' />
                                      <div className='title-tecno'>Html5</div>
                                    </div>
                                    <div><img src={css} alt="" className='css3' />
                                      <div className='title-tecno'>Css3</div>
                                    </div>
                                    <div><img src={bost} alt="" className='boostrap' />
                                      <div className='title-tecno'>Boostrap</div>
                                    </div>
                                    <div><img src={hero} alt="" className='hero' />
                                      <div className='title-tecno'>Heroku</div>
                                    </div>
                                    <div><img src={redux} alt="" className='redux' />
                                      <div className='title-tecno'>Redux</div>
                                    </div>
                                    <div><img src={router} alt="" className='rodom' />
                                      <div className='title-tecno'>React Router</div>
                                    </div>
                                    <div>< img src={g} alt="" className='mui' />
                                      <div className='title-tecno'>GitHub</div>
                                    </div>
                                    <div><img src={elee} alt="" className='pro' />
                                      <div className='title-tecno'>PostgreSQL</div>
                                    </div>
                                    <div><img src={nodee} alt="" className='node' />
                                      <div className='title-tecno'>Node.js</div>
                                    </div>


                                  </div>
                                </div>
                              </div>
                            </div>


                          </Tab.Pane>
                        </Tab.Content>
                      </Tab.Container>
                    </div>}
                </TrackVisibility>
              </Col>
            </Row>
          </Container>
          <img className="background-image-right" src={colorSharp2} alt=""></img>
        </section>) : (
        <section className="project" id="project">
          <Container>
            <Row>
              <Col size={12}>
                <TrackVisibility>
                  {({ isVisible }) =>
                    <div className={isVisible ? "animate__animated animate__fadeIn" : ""}>
                      <h2 className="space">Portafolio</h2>

                      <Tab.Container id="projects-tabs" defaultActiveKey="first">
                        <Nav variant="pills" className="nav-pills mb-5 justify-content-center align-items-center" id="pills-tab">
                          <Nav.Item>
                            <Nav.Link eventKey="first">Proyectos</Nav.Link>

                          </Nav.Item>

                          <Nav.Item>
                            <Nav.Link eventKey="third">Tecnologías</Nav.Link>
                          </Nav.Item>
                        </Nav>

                        <Tab.Content id="slideInUp" className={isVisible ? "animate__animated animate__slideInUp" : ""}>
                          <Tab.Pane eventKey="first">
                            <Row>

                              <Col size={12} md={6}>
                                <div className="proj-imgbx">
                                  <img src={projImg1}  alt=""/>
                                  <div className="proj-txtx">
                                    <h4 >E-comerce</h4>
                                    <span>Sitio en línea para comprar y vender productos</span>
                                    <div className="bu">
                                      <div className="bu-cv">
                                        <a href="https://gregarious-rolypoly-66a07c.netlify.app/" >Ver proyecto</a></div>


                                    </div>
                                  </div>
                                </div>
                              </Col>
                              <Col size={12} md={6}>
                                <div className="proj-imgbx">
                                  <img src={projImg2} alt="" />
                                  <div className="proj-txtx">
                                    <h4 >Rick & Morty</h4>
                                    <span>Busca todos los mundos de Rick & Morty por su ID</span>
                                    <div className="bu">
                                      <div className="bu-cv">
                                        <a href="https://exquisite-chimera-fa48da.netlify.app/" >Ver proyecto</a></div>


                                    </div>
                                  </div>
                                </div>
                              </Col>
                              <Col size={12} md={6}>
                                <div className="proj-imgbx">
                                  <img src={projImg3} alt="" />
                                  <div className="proj-txtx">
                                    <h4 >Weather App</h4>
                                    <span> Activa tu ubicación para saber cómo está el clima en cualquier lugar</span>
                                    <div className="bu">
                                      <div className="bu-cv">
                                        <a href="https://fanciful-khapse-305e9b.netlify.app/" >Ver proyecto</a></div>


                                    </div>
                                  </div>
                                </div>
                              </Col>
                              <Col size={12} md={6}>
                                <div className="proj-imgbx">
                                  <img src={projImg4} alt="" />
                                  <div className="proj-txtx">
                                    <h4 >Pokedex</h4>
                                    <span>Consulta la información de tu Pokémon favorito</span>
                                    <div className="bu">
                                      <div className="bu-cv">
                                        <div className="hand"><a href="https://polite-bombolone-83315b.netlify.app/" >Ver proyecto</a></div></div>


                                    </div>
                                  </div>
                                </div>
                              </Col>

                            </Row>
                          </Tab.Pane>

                          <Tab.Pane eventKey="third">
                            <div id='tecnologias-link'>
                              <div className='tecnologias' id='tecnologias'>
                                <div id='tecnologias-pc'>

                                  <div className='tecnologies animate__animated animate__backInLeft'  >

                                    <div><img src={react} alt="" className='react' />
                                      <div className='title-tecno'>React</div>
                                    </div>
                                    <div><img src={java} alt="" className='js' />
                                      <div className='title-tecno'>JavaScript</div>
                                    </div>
                                    <div><img src={html} alt="" className='html5' />
                                      <div className='title-tecno'>Html5</div>
                                    </div>
                                    <div><img src={css} alt="" className='css3' />
                                      <div className='title-tecno'>Css3</div>
                                    </div>
                                    <div><img src={bost} alt="" className='boostrap' />
                                      <div className='title-tecno'>Boostrap</div>
                                    </div>
                                    <div><img src={hero} alt="" className='hero' />
                                      <div className='title-tecno'>Heroku</div>
                                    </div>
                                    <div><img src={redux} alt="" className='redux' />
                                      <div className='title-tecno'>Redux</div>
                                    </div>
                                    <div><img src={router} alt="" className='rodom' />
                                      <div className='title-tecno'>React Router</div>
                                    </div>
                                    <div>< img src={g} alt="" className='mui' />
                                      <div className='title-tecno'>GitHub</div>
                                    </div>
                                    <div><img src={elee} alt="" className='pro' />
                                      <div className='title-tecno'>PostgreSQL</div>
                                    </div>
                                    <div><img src={nodee} alt="" className='node' />
                                      <div className='title-tecno'>Node.js</div>
                                    </div>


                                  </div>
                                </div>
                              </div>
                            </div>


                          </Tab.Pane>
                        </Tab.Content>
                      </Tab.Container>
                    </div>}
                </TrackVisibility>
              </Col>
            </Row>
          </Container>
          <img className="background-image-right" src={colorSharp2} alt=""></img>
        </section>
      )}

    </div>
  )
}
