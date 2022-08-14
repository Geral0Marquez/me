
import { Container, Row, Col } from "react-bootstrap";
import contactImg from "../assets/img/contact-img.svg";
import 'animate.css';
import validate from './validateInfo';
import TrackVisibility from 'react-on-screen';
import useForm from "./useForm"
import { useContext } from "react";
import { themeContext } from "../Context";

export const Contact = ({ translate }) => {


  const { handleChange, values, errors, handleSubmit} = useForm( validate);
  const theme = useContext(themeContext);
  const darkMode = theme.state.darkMode;
 

 

  return (
    <div
    style={{
      background: darkMode ? " linear-gradient(90.21deg, #AA367C -5.91%, #4A2FBD 111.58%)" : "",
    }}>
      {translate === "en" ? (
        <section className="contact" id="connect">
          <Container>
            <Row className="align-items-center">
              <Col size={12} md={6}>
                <TrackVisibility>
                  {({ isVisible }) =>
                    <img className={isVisible ? "animate__animated animate__zoomIn" : ""} src={contactImg} alt="Contact Us" />
                  }
                </TrackVisibility>
              </Col>
              <Col size={12} md={6}>
                <TrackVisibility>
                  {({ isVisible }) =>
                    <div className={isVisible ? "animate__animated animate__fadeIn" : ""}>
                      <h2>Get In Touch</h2>
                      <form onSubmit={handleSubmit} className="form">

                        <Row>
                          <Col size={12} sm={6} className="px-1">
                            <input type="text"
                              id="firstName"
                              name="firstName"
                              placeholder="First Name"
                              value={values.firstName}
                              onChange={handleChange} />
                            {errors.firstName && <p>{errors.firstName}</p>}
                          </Col>
                          <Col size={12} sm={6} className="px-1">
                            <input type="text"
                              id="lastName"
                              name="lastName"
                              placeholder="Last Name"
                              value={values.lastName}
                              onChange={handleChange} />
                            {errors.lastName && <p>{errors.lastName}</p>}
                          </Col>
                          <Col size={12} sm={6} className="px-1">
                            <input type="email"
                              id="email"
                              name="email"
                              placeholder="Email Address"
                              value={values.email}
                              onChange={handleChange} />
                            {errors.email && <p>{errors.email}</p>}
                          </Col>
                          <Col size={12} sm={6} className="px-1">
                            <input type="tel"
                              name="phone"
                              id="phone"
                              value={values.phone}
                              placeholder="Phone No."
                              onChange={handleChange} />
                            {errors.phone && <p>{errors.phone}</p>}
                          </Col>
                          <Col size={12} className="px-1">
                            <textarea rows="6"
                              id="message"
                              value={values.message}
                              placeholder="Message"
                              name="message"
                              onChange={handleChange}>

                            </textarea>
                            {errors.message && <p>{errors.message}</p>}
                            <button type="submit"><span>Send</span></button>
                          </Col>
                        </Row>

                      </form>
                    </div>}
                </TrackVisibility>
              </Col>
            </Row>
          </Container>
        </section>
      ) : (
        <section className="contact" id="connect">
          <Container>
            <Row className="align-items-center">
              <Col size={12} md={6}>
                <TrackVisibility>
                  {({ isVisible }) =>
                    <img className={isVisible ? "animate__animated animate__zoomIn" : ""} src={contactImg} alt="Contact Us" />
                  }
                </TrackVisibility>
              </Col>
              <Col size={12} md={6}>
                <TrackVisibility>
                  {({ isVisible }) =>
                    <div className={isVisible ? "animate__animated animate__fadeIn" : ""}>
                      <h2>Ponerse en contacto</h2>
                      <form onSubmit={handleSubmit} className="form">
                        <Row>
                          <Col size={12} sm={6} className="px-1">
                            <input type="text"
                              id="firstName"
                              name="firstName"
                              value={values.firstName}
                              onChange={handleChange}
                              placeholder="Primer Nombre"
                            />
                            {errors.firstName && <p>{errors.firstName}</p>}
                          </Col>
                          <Col size={12} sm={6} className="px-1">
                            <input type="text"
                              id="lastName"
                              name="lastName"
                              value={values.lastName}
                              placeholder="Apellido"
                              onChange={handleChange}
                            />
                            {errors.lastName && <p>{errors.lastName}</p>}
                          </Col>
                          <Col size={12} sm={6} className="px-1">
                            <input type="email"
                              id="email"
                              name="email"
                              value={values.email}
                              placeholder="Correo"
                              onChange={handleChange} />
                            {errors.email && <p>{errors.email}</p>}
                          </Col>
                          <Col size={12} sm={6} className="px-1">
                            <input type="tel"
                              id="phone"
                              name="phone"
                              value={values.phone}
                              placeholder="Teléfono No."
                              onChange={handleChange}
                            />
                            {errors.phone && <p>{errors.phone}</p>}
                          </Col>

                          <Col size={12} className="px-1">
                            <textarea rows="6"
                              placeholder="Mensaje"
                              id="message"
                              name="message"
                              value={values.message}
                              onChange={handleChange} />
                            {errors.message && <p>{errors.message}</p>}

                            <button type="submit"><span>Enviar</span></button>
                          </Col>

                        </Row>
                      </form>
                    </div>}
                </TrackVisibility>
              </Col>
            </Row>
          </Container>
        </section>

      )}
    </div>
  )
}
