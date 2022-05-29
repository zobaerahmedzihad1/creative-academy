import React from "react";
import "./Footer.css";
import { Col, Container, Row } from "react-bootstrap";
import { FaFacebookSquare } from "react-icons/fa";
import { FaInstagramSquare } from "react-icons/fa";
import { FaTwitterSquare } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { Link } from "react-router-dom";

const Footer = () => {
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
            Dhaka
          </Col>
          <Col xs={12} sm={6} md={3}>
            work phone
          </Col>
          <Col xs={12} sm={6} md={3}>
            stay in touch
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Footer;
