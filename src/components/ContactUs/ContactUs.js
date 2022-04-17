import React from "react";

import Form from "./Form/Form";
import ContactDetails from "./ContactDetails/ContactDetails";

import "./ContactUs.scss";

export const ContactUs = () => {
  return (
    <div className="contact-us">
      <ContactDetails />

      <Form />
    </div>
  );
};
