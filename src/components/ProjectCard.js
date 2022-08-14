import { Col } from "react-bootstrap";

export const ProjectCard = ({ title, description, imgUrl,button1,button2 }) => {
  return (
    
    <Col size={12} md={6}>
      <div className="proj-imgbx">
        <img src={imgUrl} />
        <div className="proj-txtx">
          <h4 className="title-u">{title}</h4>
          <span className="title-u">{description}</span>
          <div className="bu">
          <div className="bu-cv"> {button1}</div>
       
         
            </div>
        </div>
      </div>
    </Col>
  )
}
