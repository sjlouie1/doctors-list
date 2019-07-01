import React, { Component } from "react";
import logo from "../assets/logo.svg"

const Menu = props => {
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
        <h3 id="nav-title">online</h3>
      </div>
      <div className="nav-categories">
        {categories.map((category, i) =>
          <div className={props.active === category ? "nav-category-active" : "nav-category"} key={"sidebar-" + i}>
            {category}
          </div>)
        }
      </div>
    </div>
  );
};

export default Menu;
