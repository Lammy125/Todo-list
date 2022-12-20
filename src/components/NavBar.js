import React from 'react';
import "../styles/NavBar.css";
import menu from "../assets/images/menu-regular-36.png";

const NavBar = () => {
  return (
    <div className='navBar'>
      <img src={menu} alt="menuLogo"/>
        <ul>
            <li>Home</li>
            <li>About</li>
        </ul>
    </div>
  )
}

export default NavBar