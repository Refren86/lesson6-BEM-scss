import React from "react";

export const ProfileBlock2 = ({ image, heading, text }) => {
  return (
    <div className="profile__container">
      <div className="profile__description__block profile__description__block--left">
        <h2 className="profile__description__heading profile__description__heading--left">
          {heading}
        </h2>

        <p className="profile__description profile__description--left">
          {text}
        </p>
      </div>

      <div className="profile__image__block profile__image__block--right">
        <div className="profile__image">
          <img src={image} alt="profile_image" />
        </div>

        <h3 className="profile__image__title">{heading}</h3>
      </div>
    </div>
  );
};
