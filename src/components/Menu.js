import React, { Component } from "react";
import logo from "../assets/logo.png";

const Menu = () => {
  return (
    <div className="menu">
      <div className="info">
        <img src={logo} alt="Doc Fusion logo" />
        <p className="info-txt">
          Welcome to Doc Fusion, your ultimate resource for finding doctors in
          your area that best suit your medical needs.
          <br />
          <br />
          Click on a doctor's card to view their details. You may also filter doctors by their name, speciality, or gender using the search bar
          at the top of this page.
        </p>
      </div>
    </div>
  );
};

export default Menu;
