import React from "react";
import "./Services.css";
import { Col, Container, Row } from "react-bootstrap";
import serviceImg from "../../../assests/service-section.gif";
import useServices from "../../../hooks/useServices";
import ServiceCard from "../ServiceCard/ServiceCard";

const Services = () => {
  const [services] = useServices();
  // console.log(services, "home");
  const homeServices = services.slice(0, 4);
  return (
    <div className="py-4">
      <h1 className="fw-bold text-center mb-5 ">
        Our Best <span >Services</span>
      </h1>
      <Container>
        <Row>
          <Col xs={12} md={5} className="d-flex align-items-center">
            <img className="img-fluid" src={serviceImg} alt="service img" />
          </Col>
          <Col xs={12} md={7}>
            <Row className="g-4">
              {homeServices.map((service) => (
                <ServiceCard key={service.id} service={service}></ServiceCard>
              ))}
            </Row>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Services;
