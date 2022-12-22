import React from 'react';


const TodoItem = (props) => {
  return (
    <div className="todoItems">
            <input type="checkbox" checked={props.item.status} className="inputItem" />
            {props.item.text}
          </div>
  )
}

export default TodoItem