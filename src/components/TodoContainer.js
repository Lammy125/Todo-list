import React, { useState } from "react";
import Header from "./Header";
import InputTodo from "./InputTodo";
import NavBar from "./NavBar";
import TodoList from "./TodoList";

const TodoContainer = () => {
  const [todos, setTodos] = useState([
    {
      id: 1,
      text: "Have Fun",
      status: false,
    },
    {
      id: 2,
      text: "Study React",
      status: false,
    },
  ]);
  return (
    <div className="todoContainer">
      <NavBar />
      <div className="todoBody">
        <Header />
        <InputTodo setTodos={setTodos} todos={todos} />
        <TodoList todos={todos} />
      </div>
    </div>
  );
};

export default TodoContainer;
