import React from "react";
import "./Faq.css";
import { Accordion } from "react-bootstrap";

const Faq = () => {
  return (
    <>
      <h2 className="text-center fw-bold faq_heading py-5">
        We Answer on your Frequently Questions
      </h2>
      <div>
        <Accordion className="w-50 mx-auto " defaultActiveKey={["0"]} alwaysOpen>
          <Accordion.Item eventKey="0">
            <Accordion.Header>How can I enroll the course ?</Accordion.Header>
            <Accordion.Body>
              Start here if you are new to programming or new to Android
              development. These courses show you how to build Android apps
              using best practices recommended by Google. No programming
              experience needed.
            </Accordion.Body>
          </Accordion.Item>
          <Accordion.Item eventKey="1">
            <Accordion.Header>
              Do you have any discount coupon ?
            </Accordion.Header>
            <Accordion.Body>
              Yes. We provide discount coupon for our students.
            </Accordion.Body>
          </Accordion.Item>
          <Accordion.Item eventKey="2">
            <Accordion.Header>How can we see videos offline ?</Accordion.Header>
            <Accordion.Body>
              Most people now go online to watch videos but there will be times
              when you want to watch a video offline. It can be when you want to
              visit a public place that has no WiFi amenity and you wish to
              relax by watching your video there.
            </Accordion.Body>
          </Accordion.Item>
          <Accordion.Item eventKey="3">
            <Accordion.Header>
             Can you say something about app development course ?
            </Accordion.Header>
            <Accordion.Body>
              Yes. We provide discount coupon for our students.
            </Accordion.Body>
          </Accordion.Item>
        </Accordion>
      </div>
    </>
  );
};

export default Faq;
