import React from "react";
import styled from "styled-components";
import TodoCheckBtn from "./TodoCheckBtn";
import TodoDeleteBtn from "./TodoDeleteBtn";
import TodoChangeBtn from "./TodoChangeBtn";

const TodoItemStyle = styled.div`
   {
    width: 510px;
    height: 50px;
    display: flex;
    margin-top: 2px;
    color: white;
    opacity: ${(props) => (props.check ? "0.3" : "1")};
  }
`;

const TodoItemInput = styled.h6`
   {
    margin: 15px auto auto auto;
    text-decoration: ${(props) =>
      props.check ? "line-through black 3px" : "none"};
  }
`;

const HrStyle = styled.hr`
   {
    margin: auto;
    border: 1px solid #7c7575;
    width: 90%;
    textalign: center;
  }
`;

const TodoItem = (props) => {
  return (
    <>
      <TodoItemStyle check={props.check}>
        <TodoCheckBtn id={props.id} check={props.check} />
        <TodoItemInput check={props.check}>{props.item}</TodoItemInput>
        <div>
          <TodoChangeBtn id={props.id} />
          <TodoDeleteBtn id={props.id} />
        </div>
      </TodoItemStyle>
      <HrStyle />
    </>
  );
};
export default TodoItem;
