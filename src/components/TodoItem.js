import React from "react";
import TodoChangeBtn from "./TodoChangeBtn";
import TodoCheckBtn from "./TodoCheckBtn";
import TodoDeleteBtn from "./TodoDeleteBtn";
import "./TodoItem.css"
import styled from 'styled-components';

const TodoItemInput = styled.h4`
{
  margin: 15px auto auto auto;
}
`
function TodoItem(props) {
  return (
    <div className="todo-item">
      <TodoCheckBtn id={props.id} check={props.check} checkClick={props.checkClick}/>
      <TodoItemInput>{props.item}</TodoItemInput>
      <TodoChangeBtn id={props.id} change={props.change}/>
      <TodoDeleteBtn id={props.id} delete={props.delete}/>
    </div>
  )
}
export default TodoItem