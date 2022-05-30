import React, { useState } from "react";
import "./Contact.css";
import { toast } from "react-toastify";
import { Button, Col, Container, Form, Row } from "react-bootstrap";
import { AiOutlinePhone } from "react-icons/ai";
import { HiOutlineMail } from "react-icons/hi";
import { GoLocation } from "react-icons/go";

const Contact = () => {
  const [formData, setFormData] = useState("");

  const handleFormSubmit = (event) => {
    event.preventDefault();

    const email = event.target.email.value;
    const phone = event.target.phone.value;
    const address = event.target.address.value;
    const message = event.target.message.value;

    const info = { email, phone, address, message };
    setFormData(info);
    toast.success("Successfully Send !", {
      position: "top-center",
      autoClose: 1500,
      hideProgressBar: true,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
    });
    event.target.reset();
  };

  return (
    <div>
      <div className="text-center pt-4">
        <h3 className="fw-bold">Get In Touch</h3>
        <p>Please fill the form. Our team will contact you.</p>
      </div>
      <Row>
        <Col sm={3} md={3}>
          {/* <Container> */}
            <div className="support_contact mt-5 ms-5">
              <div className="p-4">
                <h4 className="fw-bold mb-4">Support Contact</h4>
                <div className="d-flex mb-3">
                  <AiOutlinePhone className="icon" />
                  <div className="ps-4">
                    <h5 className="fw-bold">Phone</h5>
                    <h6>Mobile : (+880) 1623171474</h6>
                    <h6>Hotline : (+880) 1630704167</h6>
                  </div>
                </div>

                <div className="d-flex mb-3">
                  <HiOutlineMail className="icon" />
                  <div className="ps-4">
                    <h5 className="fw-bold">Email</h5>
                    <h6>creative@fake.com</h6>
                    <h6>academy@fake.com</h6>
                  </div>
                </div>

                <div className="d-flex mb-3">
                  <GoLocation className="icon" />
                  <div className="ps-4">
                    <h5 className="fw-bold">Location</h5>
                    <h6>Dhanmondi, Dhaka</h6>
                    <h6>Bangladesh.</h6>
                  </div>
                </div>
                
              </div>
            </div>
          {/* </Container> */}
        </Col>
        <Col sm={9} md={9}>
          <Form
            className="w-75 mx-auto shadow p-3 m-5 bg-white rounded"
            onSubmit={handleFormSubmit}
          >
            <div className="d-flex">
              <Form.Group
                hasValidation
                className="mb-3 w-50 me-4"
                controlId="formBasicEmail"
              >
                <Form.Label>Email address</Form.Label>
                <Form.Control
                  name="email"
                  type="email"
                  required
                  autoComplete="off"
                  placeholder="Enter email"
                />
              </Form.Group>

              <Form.Group className="mb-3 w-50" controlId="formBasicEmail">
                <Form.Label>Phone</Form.Label>
                <Form.Control
                  name="phone"
                  required
                  type="number"
                  placeholder="Enter phone"
                  autoComplete="off"
                />
              </Form.Group>
            </div>
            <Form.Group className="mb-3" controlId="formBasicPassword">
              <Form.Label>Address</Form.Label>
              <Form.Control
                required
                name="address"
                type="text"
                placeholder="Address"
                autoComplete="off"
              />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicPassword">
              <Form.Label>Your Message</Form.Label>
              <Form.Control
                required
                name="message"
                as="textarea"
                type="text"
                placeholder="Leave a message here"
                autoComplete="off"
                className="pb-5"
              />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicCheckbox">
              <Form.Check type="checkbox" label="I'm not a Robot" />
            </Form.Group>

            <Button variant="primary" type="submit">
              Send
            </Button>
          </Form>
        </Col>
      </Row>
    </div>
  );
};

export default Contact;
