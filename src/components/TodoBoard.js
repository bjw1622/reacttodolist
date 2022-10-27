import React from "react";
import TodoItem from "./TodoItem"

function TodoBoard(props) {
  return (
    <div>
      {props.todoList.map((item) => {
        return <TodoItem item={item} />
      })}
    </div>
  )
}
export default TodoBoard