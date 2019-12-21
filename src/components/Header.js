import React from "react";
import { Link } from "react-router-dom";
import Logo from "../images/logo.jpg";

const Header = () => {
  return (
    <div className="header">
      <div className="header-user">
        <img className="header-logo" src={Logo} alt="logo meilleur taux" />

        <div className="header-text">
          Crédit immobilier: 5mn pour obtenir le meilleur taux
        </div>
      </div>
      <Link className="admin" to="/Login">
        <span>ADMIN</span>
      </Link>
    </div>
  );
};

export default Header;
