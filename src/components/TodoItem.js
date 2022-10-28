import React from "react";
import TodoChangeBtn from "./TodoChangeBtn";
import TodoCheckBtn from "./TodoCheckBtn";
import TodoDeleteBtn from "./TodoDeleteBtn";

import "./TodoItem.css"
function TodoItem(props) {
  return (
    <div className="todo-item">
        <TodoCheckBtn/>
      {props.item}
      <TodoChangeBtn id={props.id} change={props.change}/>
      <TodoDeleteBtn id={props.id} delete={props.delete}/>
    </div>
  )
}
export default TodoItem