import React from "react";
import SubmitForm from "./SubmitForm";

const Contact = () => {
  return (
    //contact html here
    <div className="center-section">
      <div className="contact__title">
        <h1>Get in contact with me...</h1>
        <p>
          Like what you see? Don't like what you see? Want to have a chat. Wether you want me to
          build something for you or you'd like to talk about building
          something together. Don't hesitate to reach out.
        </p>
      </div>
        <SubmitForm />
      
    </div>
  );
};

export default Contact;
