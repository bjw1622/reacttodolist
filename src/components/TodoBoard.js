import React from "react";
import TodoItem from "./TodoItem"

function TodoBoard(props) {
  return (
    <div>
      {props.todoList.list.map((item) => {
        return <TodoItem key={item.id} item={item.inputValue}/>
      })}
    </div>
  )
}
export default TodoBoard