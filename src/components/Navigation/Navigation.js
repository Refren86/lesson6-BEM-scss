import React from "react";
import { Link } from "react-router-dom";

import "./Navigation.scss";

export const Navigation = () => {
  return (
    <nav className="nav">
      <Link to="/preise">PREISE</Link>
      <Link to="/refrenzen">REFRENZEN</Link>
      <Link to="/kontakt">KONTAKT</Link>
    </nav>
  );
};
