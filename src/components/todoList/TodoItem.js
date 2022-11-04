import React from "react";
import "./TodoItem.css";
import styled from "styled-components";
import TodoCheckBtn from "./TodoCheckBtn";
import TodoDeleteBtn from "./TodoDeleteBtn";
import TodoChangeBtn from "./TodoChangeBtn";

const TodoItemInput = styled.h4`
   {
    margin: 15px auto auto auto;
  }
`;
const TodoItem = (props) => {
  return (
    <>
      <div className="todo-item">
        <TodoCheckBtn id={props.id} check={props.check} />
        <TodoItemInput>{props.item}</TodoItemInput>
        <div>
          <TodoChangeBtn id={props.id} />
          <TodoDeleteBtn id={props.id} />
        </div>
      </div>
      <hr
        style={{
          margin: "auto",
          border: "1px solid #7c7575",
          width: "92%",
          textAlign: "center",
        }}
      />
    </>
  );
};
export default TodoItem;
