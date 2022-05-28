import React from "react";
import "./Header.css";
import { Button, Carousel, Col, Container, Row } from "react-bootstrap";
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
            <Row className="my-5 py-5 g-5">
              <Col xs={12} sm={12} md={6}>
                <h1 className="banner_header">Development is our Goal Ever</h1>
                <p>
                  We are a boutique digital transformation consultancy and
                  software development company.
                </p>
                <Button variant="primary">Start Free Trail</Button>
              </Col>
              <Col xs={12} sm={12} md={6}>
                {" "}
                <img
                  className="d-block banner_img"
                  src={slider1}
                  alt="First slide"
                />
              </Col>
            </Row>
          </Carousel.Item>
          <Carousel.Item>
            <Row className="my-5 py-5 g-5">
              <Col xs={12} sm={12} md={6}>
                <h1 className="banner_header">Development is our Goal Ever</h1>
                <p>
                  We are a boutique digital transformation consultancy and
                  software development company.
                </p>
                <Button variant="primary">Start Free Trail</Button>
              </Col>
              <Col xs={12} sm={12} md={6}>
                {" "}
                <img
                  className="d-block banner_img"
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
