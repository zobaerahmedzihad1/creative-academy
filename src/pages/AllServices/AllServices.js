import React from "react";
import useServices from "../../hooks/useServices";
import { FaMoneyBill } from "react-icons/fa";
import { BsFillCartPlusFill } from "react-icons/bs";
import { Button, Card, Col, Row } from "react-bootstrap";
import { Link } from "react-router-dom";
import ServiceCard from "../Home/ServiceCard/ServiceCard";

const Services = () => {
  const [services] = useServices();

  return (
    <div>
      <h1 className="fw-bold text-center py-5">Our All Service</h1>
      <Row>
        
      </Row>
    </div>
  );
};

export default Services;
