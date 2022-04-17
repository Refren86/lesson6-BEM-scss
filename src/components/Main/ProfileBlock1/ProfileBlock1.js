import React from "react";

export const ProfileBlock1 = ({ image, heading, text }) => {
  return (
    <div className="profile__container">
      <div className="profile__image__block">
        <div className="profile__image">
          <img src={image} alt="profile_image" />
        </div>

        <h3 className="profile__image__title">{heading}</h3>
      </div>

      <div className="profile__description__block">
        <h2 className="profile__description__heading">{heading}</h2>

        <p className="profile__description">{text}</p>
      </div>
    </div>
  );
};
