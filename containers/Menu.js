import React, { Component } from "react";
import '../dist/style.css';


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
        {/* <img>LOGO HERE</img>
        <img>PATINT IMG</img> */}
        <p>online</p>
      </div>
      <div className="categories">
        {categories.map(category => {
           return category === "Doctor Search" ? <div className="category" id="selected">{category}</div>:<div className="category">{category}</div>;
        })}
      </div>
    </div>
  );
};

export default Menu;
