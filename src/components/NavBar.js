import React from "react";
import { NavLink } from "react-router-dom";

const itemStyle = {
  display: "block"
}

function NavBar() {
  return (
    <div className="navbar">
      <ul>
        <li>
          <NavLink exact to="/" style={itemStyle}>Home</NavLink>
        </li>
        <li>
          <NavLink to="/movies" style={itemStyle}>Movies</NavLink>
        </li>
        <li>
          <NavLink to="/directors" style={itemStyle}>Directors</NavLink>
        </li>
        <li>
          <NavLink to="/actors" style={itemStyle}>Actors</NavLink>
        </li>
      </ul>
    </div>
  )
}

export default NavBar;
