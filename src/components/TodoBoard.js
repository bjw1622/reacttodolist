import React from "react";
import TodoItem from "./TodoItem"

function TodoBoard(props) {
  return (
    <div>
      {props.todoList.map((item) => {
        return <TodoItem key={item.id} item={item.inputValue} delete={props.delete} id={item.id} />
      })}
    </div>
  )
}
export default TodoBoard