import React from "react";
import { Container, Row } from "react-bootstrap";
import useServices from "../../hooks/useServices";
import AllServiceCard from "./AllServiceCard";

const Services = () => {
  const [services] = useServices();

  return (
    <div>
      <h1 className="fw-bold text-center py-5">Our All Service</h1>
      <Container>
        <Row className="g-4" >
          {services.map((service) => (
            <AllServiceCard key={service.id} service={service}></AllServiceCard>
          ))}
        </Row>
      </Container>
    </div>
  );
};

export default Services;
