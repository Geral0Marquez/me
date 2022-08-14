import { Container, Row} from "react-bootstrap";
import { MailchimpForm } from "./MailchimpForm";
import Whasap from "@iconscout/react-unicons/icons/uil-whatsapp";
import Gitub from "@iconscout/react-unicons/icons/uil-github";
import Link from "@iconscout/react-unicons/icons/uil-linkedin";

export const Footer = () => {
  return (
    <footer className="footer" 
    >
      <Container>
        <Row className="align-items-center">
          <MailchimpForm />
          <div  className="text-center text-sm-end">
            <div className="social-icon">
              <a href="https://www.linkedin.com/feed/"><Link className="img" color="white" size="100" /></a>
              <a href="https://github.com/Geral0Marquez"><Gitub className="img" color="white" size="100" /></a>
              <a href="https://wa.me/3107924787"><Whasap className="img" color="white" size="100" /></a>
            </div>
            <p>Geraldin Marquez 2022. All Rights Reserved</p>
          </div>
        </Row>
      </Container>
      
      <div className="burbujas">
            <div className="burbuja"></div>
            <div className="burbuja"></div>
            <div className="burbuja"></div>
            <div className="burbuja"></div>
            <div className="burbuja"></div>
            <div className="burbuja"></div>
            <div className="burbuja"></div>
            <div className="burbuja"></div>
            <div className="burbuja"></div>
            <div className="burbuja"></div>
        </div>
    </footer>
  )
}
