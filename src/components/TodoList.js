import React from "react";

const TodoList = () => {
  const todos = [
    {
      id: 1,
      text: "Have Fun",
      status: false,
    },
    {
      id: 2,
      text: "Study React",
      status: true,
    },
  ];
  return (
    <div className="listTop">
      <div className="todoList">
        {todos?.map((item) => (
          <div className="todoItems">
            <input type="checkbox" checked={item.status} className="inputItem" />
            {item.text}
          </div>
        ))}
      </div>
    </div>
  );
};

export default TodoList;
