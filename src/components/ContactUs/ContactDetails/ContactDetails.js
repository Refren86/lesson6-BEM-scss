import React from "react";

import location from "../../../utils/icons/location.svg";
import envelope from "../../../utils/icons/envelope.svg";
import phone from "../../../utils/icons/phone.svg";

const ContactDetails = () => {
  return (
    <div className="contact-details">
      <div className="contact-details__background">
        <div className="contact-details__background__content" style={{}}>
          <div className="contact-details__item">
            <div className="contact-details__item__icon">
              <img src={location} alt="checkpoint" />
            </div>

            <h4 className="contact-details__item__text">
              Poststr, 45, 44890 Hamburg
            </h4>
          </div>

          <div className="contact-details__item">
            <div className="contact-details__item__icon">
              <img src={envelope} alt="envelope" />
            </div>

            <h4 className="contact-details__item__text">hello@tratata.de</h4>
          </div>

          <div className="contact-details__item">
            <div className="contact-details__item__icon">
              <img src={phone} alt="phone" />
            </div>

            <h4 className="contact-details__item__text">040 380-33- 44</h4>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactDetails;
