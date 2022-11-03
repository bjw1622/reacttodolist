import React, { useState } from "react";
import styled from "styled-components";
import AddList from "./todoList/AddList";
import EntryDeleteList from "./todoList/EntryDeleteList";
import TodoBoard from "./todoList/TodoBoard";
import { v4 as uuidv4 } from "uuid";
import moment from "moment/moment";
const TodoListStyle = styled.div`
   {
    width: 512px;
    height: 768px;
    border-radius: 16px;
    box-shadow: 0 0 8px 0 rgba(0, 0, 0, 0.04);
    margin: 96px auto 32px auto;
    background: gray;
    display: flex;
    flex-direction: column;

    h1 {
      margin: 20px 0px 20px 10px;
      font-size: 36px;
      color: #343a40;
    }

    input {
      padding: 12px;
      border-radius: 4px;
      border: 1px solid #dee2e6;
      width: 100%;
      outline: none;
      font-size: 18px;
      box-sizing: border-box;
    }

    button {
      margin: 10 auto 0 auto;
    }
  }
`;
const TodoList = () => {
  const [inputValue, setInputValue] = useState("");

  const id = uuidv4();

  const addData = {
    id,
    inputValue,
    check: false,
    addDate: moment(new Date()).format("DD-MM-YYYY"),
  };

  const setInputVal = (e) => {
    setInputValue(e);
  };

  return (
    <TodoListStyle>
      <h1>Todo List</h1>
      <input
        id="input-value"
        type="text"
        onChange={(e) => setInputVal(e.target.value)}
        value={inputValue}
      />
      <AddList addData={addData} setInputVal={setInputVal}></AddList>
      <EntryDeleteList></EntryDeleteList>
      <TodoBoard></TodoBoard>
    </TodoListStyle>
  );
};
export default TodoList;
