import React from "react";
import TodoCheckBtn from "./TodoCheckBtn";
import TodoDeleteBtn from "./TodoDeleteBtn";
import "./TodoItem.css"
function TodoItem(props) {
  return (
    <div className="todo-item">
        <TodoCheckBtn btnText={"미완료"}/>
      {props.item}
      <TodoDeleteBtn id={props.id} delete={props.delete}/>
    </div>
  )
}
export default TodoItem