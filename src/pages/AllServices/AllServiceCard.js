import React from "react";
import { FaMoneyBill } from "react-icons/fa";
import { BsFillCartPlusFill } from "react-icons/bs";
import { Button, Card, Col } from "react-bootstrap";
import { Link } from "react-router-dom";

const AllServiceCard = ({ service }) => {
  const { id, img, title, description, price } = service;
  return (
    <>
      <Col xm={12} sm={12} md={6} lg={4}>
        <Card
          style={{ width: "23rem" }}
          className="shadow bg-white rounded service_card"
        >
          <Card.Img variant="top" className="cardImg m-auto p-3" src={img} />
          <Card.Body className="text-center">
            <Card.Title className="fw-bold">{title}</Card.Title>
            <Card.Text style={{ fontWeight: "500" }} className="text-start">
              {description}
            </Card.Text>
            <h4>
              {" "}
              <FaMoneyBill /> {price} $
            </h4>
            <Link to={`/service/${id}`}>
              <Button variant="primary" className="mt-4">
                Enroll Now <BsFillCartPlusFill className="fs-5" />{" "}
              </Button>
            </Link>
          </Card.Body>
        </Card>
      </Col>
    </>
  );
};

export default AllServiceCard;
