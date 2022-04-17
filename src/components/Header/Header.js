import React from "react";

import { Navigation } from "../Navigation/Navigation";

import "./Header.scss";
import company_image from "../../utils/images/header.png";

export const Header = () => {
  return (
    <header className="header">
      <div className="header__container">
        <div className="header__logo">GENIUS</div>

        <div className="header__right">
          <Navigation />

          <div className="header__language">
            <select
              className="header__language__select"
              name="languages"
              id="languages-select"
            >
              <option value="english">EN</option>
              <option value="ukrainian">UA</option>
              <option value="german">GE</option>
            </select>
          </div>
        </div>
      </div>

      <div className="header__img">
        <img src={company_image} alt="company_photo" />
      </div>
    </header>
  );
};
