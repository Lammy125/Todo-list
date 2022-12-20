import React from "react";
import dateLogo from "../assets/images/calendar-regular-24.png";

const InputTodo = () => {
  return (
    <div className="bottomBorder">
      <div className="todoInput">
        <input type="text" placeholder="Add new.." />
        <img src={dateLogo} alt="calendar" />
        <button className="btn">Add</button>
      </div>
    </div>
  );
};

export default InputTodo;
