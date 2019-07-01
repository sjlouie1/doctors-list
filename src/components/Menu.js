import React from "react";
import logo from "../assets/logo.png";

const Menu = () => {
  return (
    <div className="menu">
      <div className="info">
        <div className="menu-header">
        <img src={logo} alt="Doc Fusion logo" />
        <div className="info-txt">
          Welcome to Doc Fusion, your ultimate resource for finding doctors in
          your area that best suit your medical needs.
          <br />
          <br />
          <div className="desktop-caption">
          Click on a doctor's card to view their details. You may also filter doctors by their name, speciality, or gender using the search bar
          at the top of this page.
          </div>
        </div>
        </div>
      </div>
    </div>
  );
};

export default Menu;
