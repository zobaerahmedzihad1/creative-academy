import React from "react";
import "./Footer.css";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { Col, Container, Row } from "react-bootstrap";
import { FaFacebookSquare } from "react-icons/fa";
import { FaInstagramSquare } from "react-icons/fa";
import { FaTwitterSquare } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FiSend } from "react-icons/fi";

const Footer = () => {
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
                <a href="https://www.facebook.com" target="_blank">
                  <FaFacebookSquare className="social_icon" />
                </a>
              </span>
              <span>
                <a href="https://www.instagram.com" target="_blank">
                  <FaInstagramSquare className="social_icon" />
                </a>
              </span>
              <span>
                <a href="https://www.twitter.com" target="_blank">
                  <FaTwitterSquare className="social_icon" />
                </a>
              </span>
              <span>
                <a href="https://www.instagram.com/" target="_blank">
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
          </Col>
          <Col xs={12} sm={6} md={3}>
            <h4 className="fw-bold">STAY IN TOUCH</h4>
            <div class="input-group mb-3">
              <input
                type="email"
                class="form-control"
                placeholder="Enter Your Email"
                aria-label="Recipient's username"
                aria-describedby="basic-addon2"
              />
              <div class="input-group-append">
                <button
                  type="button"
                  class="btn btn-primary"
                  data-toggle="tooltip"
                  data-placement="top"
                  title="Send"
                  onClick={notify}
                >
                  <FiSend />
                </button>
                <ToastContainer />
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Footer;
