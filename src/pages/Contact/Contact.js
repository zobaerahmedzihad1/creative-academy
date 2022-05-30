import React, { useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { Button, Form } from "react-bootstrap";

const Contact = () => {
  const [formData, setFormData] = useState('');

  const handleFormSubmit = (event) => {
    event.preventDefault();

    const email = event.target.email.value;
    const phone = event.target.phone.value;
    const address = event.target.address.value;
    const message = event.target.message.value;

    const info = { email, phone, address, message };
    setFormData(info);
    event.target.reset();
  };

  return (
    <div>
      <div className="text-center pt-4">
        <h3 className="fw-bold">Get In Touch</h3>
        <p>Please fill the form. Our team will contact you.</p>
      </div>
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
            //  {
            //    if(!formData.email){
            //     isInvalid
            //    }
            //  }
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
    </div>
  );
};

export default Contact;
