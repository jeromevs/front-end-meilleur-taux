import React from "react";
import Logo from "../images/logo.jpg";

const Header = () => {
  return (
    <div className="header">
      <img className="header-logo" src={Logo} alt="logo meilleur taux" />
      <p className="header-text">
        Crédit immobilier: 5mn pour obtenir le meilleur taux
      </p>
    </div>
  );
};

export default Header;
