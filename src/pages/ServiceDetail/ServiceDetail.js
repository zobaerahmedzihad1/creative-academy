import React, { useEffect, useState } from "react";
import { Button, Card } from "react-bootstrap";
import { Link, useParams } from "react-router-dom";
// import useServices from "../../hooks/useServices";
import { FaMoneyBill } from "react-icons/fa";
import { AiOutlineArrowLeft } from "react-icons/ai";

const ServiceDetail = () => {
  const { id } = useParams();
  // console.log(typeof id);

  const [services, setServices] = useState([]);
  useEffect(() => {
    fetch(
      "https://raw.githubusercontent.com/farhan-nahid/creative-academy/main/public/allServices.json "
    )
      .then((res) => res.json())
      .then((data) => setServices(data));
  }, []);

  const selectedService = services.find((service) => service.id === Number(id));
  // if (selectedService.id) {
  //   var { img, title, description, price } = selectedService;
  // }
  return (
    <div>
      <Card
        style={{ width: "40rem" }}
        className="shadow py-5 mb-1 bg-white rounded mx-auto mt-5 service_card"
      >
        <Card.Img
          variant="top"
          className="cardImg m-auto p-3"
          src={selectedService?.img}
        />
        <Card.Body className="text-center">
          <Card.Title className="fw-bold">{selectedService?.title}</Card.Title>
          <Card.Text style={{ fontWeight: "500" }} className="text-start">
            {selectedService?.description}
          </Card.Text>
          <h4>
            {" "}
            <FaMoneyBill /> {selectedService?.price} $
          </h4>
          <Link to="/home">
            <Button variant="primary">
              <AiOutlineArrowLeft className="fs-5 fw-bold" /> Back Home{" "}
            </Button>
          </Link>
        </Card.Body>
      </Card>
    </div>
  );
};

export default ServiceDetail;
