import React from "react";
import "./TodoItem.css"
import styled from 'styled-components';
import TodoCheckBtn from "./TodoCheckBtn";
import TodoDeleteBtn from "./TodoDeleteBtn";
import TodoChangeBtn from "./TodoChangeBtn";

const TodoItemInput = styled.h4`
{
  margin: 15px auto auto auto;
}
`
// const checkClick = (id, check)=>{
//   const findId = todoList.findIndex(todoItem => todoItem.id === id);
//   let copyTodoList = [...todoList];
//   if(findId !== -1){
//     copyTodoList[findId] = {...todoList[findId],"check":!check};
//   }
//   setTodoList(copyTodoList);
// }



    // // 수정 method
    // const changeInput = (id)=>{
    //   const changeInputValue = prompt("수정 내용을 입력해주세요");
      
    //   if(changeInputValue !== null){
    //     const findId = todoList.findIndex(todoItem => todoItem.id === id);
    //     let copyTodoList = [...todoList];
    //     if(findId !== -1){
    //       copyTodoList[findId] = {...todoList[findId],"inputValue":changeInputValue};
    //     }
    //     setTodoList(copyTodoList);
    //   } 
    //   else if(changeInputValue.trim() !== ""){
    //     alert('올바른 값을 입력해주세요.');
    //   }
    // }

function TodoItem(props) {
  return (
    <div className="todo-item">
      <TodoCheckBtn id={props.id} check={props.check}/>
      <TodoItemInput>{props.item}</TodoItemInput>
      <TodoChangeBtn id={props.id} change={props.change}/>
      <TodoDeleteBtn id={props.id}/>
    </div>
  )
}
export default TodoItem