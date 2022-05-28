import React from "react";
import "./Services.css";
import { Col, Container, Row } from "react-bootstrap";
import serviceImg from "../../../assests/service-section.png";
import useServices from "../../../hooks/useServices";

const Services = () => {
  const [services] = useServices();
  console.log(services);
  return (
    <>
      <h1 className="fw-bold text-center mt-5">Our Best Services</h1>
      <Container>
        <Row>
          <Col xs={12} md={5}>
            <img
              className="img-fluid d-flex align-items-center"
              src={serviceImg}
              alt="service img"
            />
          </Col>
          <Col xs={12} md={7}>
            card
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default Services;
