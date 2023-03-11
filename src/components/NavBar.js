import React from "react";
import "../styles/NavBar.css";
import menu from "../assets/images/menu-regular-36.png";
import { Link } from "react-router-dom";

const NavBar = () => {
  let token = localStorage.getItem("token");

  console.log(token)
  return (
    <div className="navBar">
      <img src={menu} alt="menuLogo" />
      <ul>
        <Link to="/" className="link">
          <li>Home</li>
        </Link>
        {!token ? (
          <>
            <Link to="/register" className="link">
              <li>Register</li>
            </Link>
            <Link to="/login" className="link">
              <li>Login</li>
            </Link>
          </>
        ) : (
          <Link to="/login" className="link">
            <li>Logout</li>
          </Link>
        )}
      </ul>
    </div>
  );
};

export default NavBar;
