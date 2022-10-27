import React from "react";
import "./TodoItem.css"
function TodoItem(props) {
  return (
    <div className="todo-item">
      {props.item}
    </div>
  )
}
export default TodoItem