import React from "react";
import "./Footer.css";
import { ToastContainer, toast } from "react-toastify";
import { Button, Col, Container, Form, Row } from "react-bootstrap";
import { FaFacebookSquare } from "react-icons/fa";
import { FaInstagramSquare } from "react-icons/fa";
import { FaTwitterSquare } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FiSend } from "react-icons/fi";

const Footer = () => {
  const handleEmailSubmit = (e) => {
    const email = e.target.email.value;
    if (!email) {
      notify();
    } 

    e.preventDefault();
    e.target.reset();
  };

  const notify = () =>
    toast.success("Email Send Successfully !", {
      position: "top-center",
      autoClose: 1500,
      hideProgressBar: true,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
    });

  return (
    <div className="bg-light py-5 mt-5">
      <Container>
        <Row g-3>
          <Col xs={12} sm={6} md={3}>
            <h4 className="fw-bold">Creative Academy</h4>
            <div className="social_icons mb-2">
              <span>
                <a
                  href="https://www.facebook.com/zobaerahmedzihad"
                  target="_blank."
                >
                  <FaFacebookSquare className="social_icon" />
                </a>
              </span>
              <span>
                <a href="https://www.instagram.com" target="_blank.">
                  <FaInstagramSquare className="social_icon" />
                </a>
              </span>
              <span>
                <a href="https://www.twitter.com" target="_blank.">
                  <FaTwitterSquare className="social_icon" />
                </a>
              </span>
              <span>
                <a href="https://www.instagram.com/" target="_blank.">
                  <FaLinkedin className="social_icon" />
                </a>
              </span>
            </div>
            <p className="copyright">
              Copyright © 2022 by ZIHAD. All Rights Reserved.
            </p>
          </Col>
          <Col xs={12} sm={6} md={3}>
            <h4 className="fw-bold">Germany</h4>
            <p>
              20095 Hamburg <br /> Germany
            </p>
            <h4 className="fw-bold">Bangladesh</h4>
            <p>Dhanmondi, Dhaka</p>
          </Col>
          <Col xs={12} sm={6} md={3}>
            <h4 className="fw-bold">WORK INQUIRIES</h4>
            <p>Interested in working with us? zobaerahmedzihad1@gmail.com</p>
            <h4 className="fw-bold">PHONE</h4>
            <div>
              <p className="font-weight-normal">
                +880 1623171474 <br />
                +880 1630704167
              </p>
            </div>
          </Col>
          <Col xs={12} sm={6} md={3}>
            <h4 className="fw-bold">STAY IN TOUCH</h4>
            <div class="input-group mb-3">
              <Form className="d-flex" onSubmit={handleEmailSubmit}>
                <input
                  type="email"
                  name="email"
                  class="form-control"
                  placeholder="Enter Your Email"
                  aria-label="Recipient's username"
                  aria-describedby="basic-addon2"
                  required
                  id="email"
                  autoComplete="off"
                />

                <Button
                  id="email"
                  class="btn btn-primary"
                  data-toggle="tooltip"
                  data-placement="top"
                  title="Send"
                  type="submit"
                >
                  <FiSend />
                </Button>

                {/* <button
                  id="email"
                  type="button"
                  class="btn btn-primary"
                  data-toggle="tooltip"
                  data-placement="top"
                  title="Send"
                >
                  <FiSend />
                </button> */}
              </Form>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Footer;
