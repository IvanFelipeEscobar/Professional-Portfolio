import React from "react";
import SubmitForm from "./SubmitForm";
import { Card } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFileZipper } from "@fortawesome/free-solid-svg-icons";

const Contact = () => {
  return (
    //contact html here
    <div className="profile-section">
      <Card.Title className="m-3">
        <h2>
          Contact <FontAwesomeIcon icon={faFileZipper} />
        </h2>
      </Card.Title>
      <Card.Body>
        <SubmitForm />
      </Card.Body>
    </div>
  );
};

export default Contact;
