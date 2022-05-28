import React from "react";
import "./Header.css";
import { Carousel, Col, Container, Row } from "react-bootstrap";
import slider1 from "../../../assests/slider1.png";
import slider2 from "../../../assests/slider2.png";

const Header = () => {
  return (
    <div
      className="bg-light d-flex align-items-center"
      style={{ height: "90vh" }}
    >
      <Container>
        <Carousel>
          <Carousel.Item>
            <Row>
              <Col sm={12} md={6}>
                <h1 className="banner_header">Development is our Goal Ever</h1>
              </Col>
              <Col sm={12} md={6}>
                {" "}
                <img
                  className="d-block w-100 banner_img"
                  src={slider1}
                  alt="First slide"
                />
              </Col>
            </Row>
          </Carousel.Item>
          <Carousel.Item>
            <Row>
              <Col sm={12} md={6}>
                <h1 className="banner_header">Development is our Goal Ever</h1>
              </Col>
              <Col sm={12} md={6}>
                {" "}
                <img
                  className="d-block w-100"
                  src={slider2}
                  alt="First slide"
                />
              </Col>
            </Row>
          </Carousel.Item>
        </Carousel>
      </Container>
    </div>
  );
};

export default Header;
