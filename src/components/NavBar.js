import React from "react";
import "../styles/NavBar.css";
import menu from "../assets/images/menu-regular-36.png";
import { Link } from "react-router-dom";

const NavBar = () => {
  return (
    <div className="navBar">
      <img src={menu} alt="menuLogo" />
      <ul>
        <li>Home</li>
        <li>About</li>
        <Link to="/register">
          <li>Register</li>
        </Link>
      </ul>
    </div>
  );
};

export default NavBar;
