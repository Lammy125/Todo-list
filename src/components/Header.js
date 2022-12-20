import React from 'react';
import logo from "../assets/images/check-square-solid-60.png";

const Header = () => {
  return (
    <div className='todoHeader'>
        <img src={logo} alt="todoLogo"/>
        <h1>My Todo List</h1>
    </div>
  )
}

export default Header