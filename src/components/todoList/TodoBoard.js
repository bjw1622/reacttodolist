import React from "react";
import { useSelector } from "react-redux";
import TodoItem from "./TodoItem"

function TodoBoard() {
  const totalList = useSelector((state)=>{
    return state.addList;
  })
  return (
    <div>
      {totalList.list.map((item) => {
        return <TodoItem key={item.id} id={item.id} item={item.inputValue}/>
      })}
    </div>
  )
}
export default TodoBoard