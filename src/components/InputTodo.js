import React, {useState} from "react";
import dateLogo from "../assets/images/calendar-regular-24.png";

const InputTodo = ({setTodos, todos}) => {

  const addTodoItem = () => {
    setTodos(
      [
        ...todos,
        {
          text:inputValue,
          status:false
        }
      ]
    )
    setInputValue("");
  }
  const [inputValue, setInputValue] = useState("")
  return (
    <div className="bottomBorder">
      <div className="todoInput">
        <input 
        type="text" 
        placeholder="Add new.."
        value={inputValue}
        onChange={(e)=> {setInputValue(e.target.value)}}
        />
        <img src={dateLogo} alt="calendar" />
        <button className="btn" onClick={addTodoItem}>Add</button>
      </div>
    </div>
  );
};

export default InputTodo;
