import React from "react";
import { Link } from "react-router-dom";
import Logo from "../images/logo.jpg";

const Header = () => {
  return (
    <div className="header">
      <img className="header-logo" src={Logo} alt="logo meilleur taux" />
      <Link to="/Login">
        <span className="admin">ADMIN</span>
      </Link>

      <p className="header-text">
        Crédit immobilier: 5mn pour obtenir le meilleur taux
      </p>
    </div>
  );
};

export default Header;
