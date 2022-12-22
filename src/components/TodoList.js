import React from "react";
import TodoItem from "./TodoItem";

const TodoList = ({ todos }) => {
  return (
    <div className="listTop">
      <div className="todoList">
        {todos?.map((item) => (
          <TodoItem item={item} />
        ))}
      </div>
    </div>
  );
};

export default TodoList;
