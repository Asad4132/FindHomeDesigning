import React from "react";
import { Container, Carousel, Row, Col, Button } from "react-bootstrap";
import "./login.styles.css";
import ezralogo from "../../assets/ezralogo.svg";
import bg1 from "../../assets/onboarding.svg";
import "bootstrap/dist/css/bootstrap.min.css";

function Login() {
  return (
    <Container fluid className="h-100">
      <Row className="h-100">
        <Col
          className="left-part p-0"
          style={{ width: "46.18%", height: "100%" }}
        >
          <Carousel className="h-100">
            <Carousel.Item>
              <img
                className="d-block w-100 h-100"
                src={bg1}
                alt="First slide"
              />
            </Carousel.Item>
            <Carousel.Item>
              <img
                className="d-block w-100 h-100"
                src={bg1}
                alt="Second slide"
              />
            </Carousel.Item>
            <Carousel.Item>
              <img
                className="d-block w-100 h-100"
                src={bg1}
                alt="Third slide"
              />
            </Carousel.Item>
          </Carousel>
          <div className="alignbtn-ezra">
            <div className="ezra-logo">
              <img src={ezralogo} alt="Ezra Logo" />
            </div>
            <button className="ezra-btn">Contact us</button>
          </div>
        </Col>
        <Col className="p-0" style={{ width: "53.82%", height: "100%" }}></Col>
        {/* Right part will go here */}
      </Row>
    </Container>
  );
}

export default Login;
