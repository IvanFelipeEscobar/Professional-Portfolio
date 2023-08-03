import React from "react";
import SubmitForm from "./SubmitForm";
import { Card } from "react-bootstrap";

const Contact = () => {
  return (
    //contact html here
    <div className="profile-section">
      
      <Card.Body>
        <SubmitForm />
      </Card.Body>
    </div>
  );
};

export default Contact;
