import React from "react";
import { ContactUs } from "../ContactUs/ContactUs";

import "./Footer.scss";

export const Footer = () => {
  return (
    <>
      <ContactUs />

      <div className="copyright">
        <p>© 2019 Genius Web Agentur. Alle Rechte vorbehalten</p>
      </div>
    </>
  );
};
