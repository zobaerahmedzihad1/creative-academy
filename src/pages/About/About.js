import React from "react";
import { Button, Col, Container, Row } from "react-bootstrap";
import aboutUs from "../../assests/about-us.gif";

const About = () => {
  return (
    <>
      <Container>
        <Row className="d-flex align-items-center">
          <Col>
            <img src={aboutUs} alt="img" />
          </Col>
          <Col>
            <h1 className="fw-bold">Creative Team that Gets Excited About</h1>
            <p>
              Brotula California flyingfish bonytail chub redmouth whalefish
              cookiecutter shark whitebait zander basking shark Asiatic
              glassfish coolie loach sprat pelican gulper, archerfish loosejaw
              Blind goby. Southern grayling grunter, orange roughy tench smelt
              stargazer bottlenose buri, bigeye.
            </p>
            <Button className="btn btn-primary">Explore More</Button>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default About;
