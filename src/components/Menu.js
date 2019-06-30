import React, { Component } from "react";
import logo from "../assets/logo.svg"

const Menu = () => {
  const categories = [
    "Dashboard",
    "Appointments",
    "Calendar",
    "Doctor Search",
    "Payments",
    "Messages",
    "Settings"
  ];

  return (
    <div className="menu">
      <div className="patient-info">
    <img src={logo} alt="Doc Fusion logo"/>
        <p>online</p>
      </div>
      <div className="categories">
        {categories.map((category, i) => {
          return category === "Doctor Search" ? (
            <div className="category" id="selected" key={"sidebar-" + i}>
              {category}
            </div>
          ) : (
            <div className="category" key={"sidebar-" + i}>
              {category}{" "}
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Menu;
