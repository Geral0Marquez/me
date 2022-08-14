
import React from "react";
import colorSharp from "../assets/img/color-sharp.png"
import 'react-slideshow-image/dist/styles.css'
import { Slide } from "react-slideshow-image";
import { useContext } from "react";
import { themeContext } from "../Context";

import {
  CircularProgressbar,
  buildStyles
} from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";
import ProgressProvider from "./ProgressProvider"




export const Skills = ({ translate }) => {
  const style = {
    textAlign: 'center',
    padding: '2px 10px',

  };

  const theme = useContext(themeContext);
  const darkMode = theme.state.darkMode;

  const [valueEnd, setValueEnd] = React.useState(66);


  const properties = {
    duration: 3500,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    indicators: false,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3
        }
      },
      {
        breakpoint: 500,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2
        }
      }
    ]
  };


  return (
    <div style={{
      background: darkMode ? "#fff" : "",
      color: darkMode ? "white" : "",
  
    }}>
      {translate === "en" ? (
        <section className="skill" id="skills" >
          <div className="container">
            <div className="row">

              {/* yahan change hy darkmode ka */}


              <div className="col-12" >

                <div className="skill-bx wow zoomIn " style={{
                  background: darkMode ? "white" : "",
                  color: darkMode ? "black" : "",
                  borderColor: darkMode? "black": "",
                }}>

                  <h2 className="title-skill">Skills</h2>

                  <Slide {...properties} >



                    <div style={style}>


                      <div className="item" style={{ width: "78%" }} >
                        <ProgressProvider valueStart={10} valueEnd={valueEnd}>
                          {value => <CircularProgressbar

                            value={95}
                            text={`${95}%`}
                            styles={buildStyles({
                              pathColor: "#6C10FA",
                              trailColor: "#A800EB",
                              textColor: "#AF02F0",

                            })}


                          />}
                        </ProgressProvider>

                        <h5>Web designer and user interfaces</h5>

                      </div>
                    </div>

                    <div style={style}>
                      <div className="item" style={{ width: "78%" }}>
                        <ProgressProvider valueStart={10} valueEnd={valueEnd}>
                          {value => <CircularProgressbar
                            value={89}
                            text={`${89}%`}
                            styles={buildStyles({
                              pathColor: "#6C10FA",
                              trailColor: "#A800EB",
                              textColor: "#AF02F0",
                            })}


                          />}
                        </ProgressProvider>

                        <h5>Full-stack development</h5>

                      </div>
                    </div>

                    <div style={style}>


                      <div className="item" style={{ width: "78%" }}>
                        <ProgressProvider valueStart={10} valueEnd={valueEnd}>
                          {value => <CircularProgressbar
                            value={95}
                            text={`${95}%`}
                            styles={buildStyles({
                              pathColor: "#6C10FA",
                              trailColor: "#A800EB",
                              textColor: "#AF02F0",
                            })}


                          />}
                        </ProgressProvider>

                        <h5>Assertiveness, adaptability, persistence</h5>

                      </div>
                    </div>


                    <div style={style}>


                      <div className="item" style={{ width: "78%" }}>
                        <ProgressProvider valueStart={10} valueEnd={valueEnd}>
                          {value => <CircularProgressbar
                            value={92}
                            text={`${92}%`}
                            styles={buildStyles({
                              pathColor: "#6C10FA",
                              trailColor: "#A800EB",
                              textColor: "#AF02F0",
                            })}


                          />}
                        </ProgressProvider>

                        <h5>Problem resolution</h5>

                      </div>
                    </div>



                  </Slide>


                </div>
              </div>

            </div>

          </div >
          <img className="background-image-left" src={colorSharp} alt="Image" />

        </section >) : (
        <section className="skill" id="skills"
          style={{
            background: darkMode ? "#FFF" : "",
            color: darkMode ? "white" : "",
          }}
        >
          <div className="container">
            <div className="row" >

              {/* yahan change hy darkmode ka */}


              <div className="col-12">

                <div className="skill-bx wow zoomIn "
                style={{
                  background: darkMode ? "white" : "",
                  color: darkMode ? "black" : "",
                }}>

                  <h2 className="title-skill">Habilidades</h2>

                  <Slide {...properties} >
                    <div style={style}>


                      <div className="item" style={{ width: "78%" }} >
                        <ProgressProvider valueStart={10} valueEnd={valueEnd}>
                          {value => <CircularProgressbar
                            value={95}
                            text={`${95}%`}
                            styles={buildStyles({
                              pathColor: "#6C10FA",
                              trailColor: "#A800EB",
                              textColor: "#AF02F0",
                            })}


                          />}
                        </ProgressProvider>

                        <h5>Diseñador web e interfaces de usuario</h5>

                      </div>
                    </div>

                    <div style={style}>
                      <div className="item" style={{ width: "78%" }}>
                        <ProgressProvider valueStart={10} valueEnd={valueEnd}>
                          {value => <CircularProgressbar
                            value={89}
                            text={`${89}%`}
                            styles={buildStyles({
                              pathColor: "#6C10FA",
                              trailColor: "#A800EB",
                              textColor: "#AF02F0",
                            })}


                          />}
                        </ProgressProvider>

                        <h5> Desarrollador Full-stack </h5>

                      </div>
                    </div>

                    <div style={style}>


                      <div className="item" style={{ width: "78%" }}>
                        <ProgressProvider valueStart={10} valueEnd={valueEnd}>
                          {value => <CircularProgressbar
                            value={95}
                            text={`${95}%`}
                            styles={buildStyles({
                              pathColor: "#6C10FA",
                              trailColor: "#A800EB",
                              textColor: "#AF02F0",
                            })}


                          />}
                        </ProgressProvider>

                        <h5>Asertividad, adaptabilidad, persistencia</h5>

                      </div>
                    </div>


                    <div style={style}>


                      <div className="item" style={{ width: "78%" }}>
                        <ProgressProvider valueStart={10} valueEnd={valueEnd}>
                          {value => <CircularProgressbar
                            value={92}
                            text={`${92}%`}
                            styles={buildStyles({
                              pathColor: "#6C10FA",
                              trailColor: "#A800EB",
                              textColor: "#AF02F0",
                            })}


                          />}
                        </ProgressProvider>

                        <h5>Resolución de problemas</h5>

                      </div>
                    </div>



                  </Slide>


                </div>
              </div>

            </div>

          </div >
          <img className="background-image-left" src={colorSharp} alt="Image" />
    
        </section >)}
    </div>
  )
}
