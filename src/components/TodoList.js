import React, { useState } from "react";
import TodoBoard from "./TodoBoard";
import { v4 as uuidv4 } from "uuid";
import styled from "styled-components";
import Button from "@mui/material/Button";
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

  const [todoList, setTodoList] = useState([]);

  const id = uuidv4();

  const addData = {
    id,
    inputValue,
    check: false,
  };
  // 수정 method
  const changeInput = (id) => {
    const changeInputValue = prompt("수정 내용을 입력해주세요");
    if (changeInputValue !== null) {
      const findId = todoList.findIndex((todoItem) => todoItem.id === id);
      let copyTodoList = [...todoList];
      if (findId !== -1) {
        copyTodoList[findId] = {
          ...todoList[findId],
          inputValue: changeInputValue,
        };
      }
      setTodoList(copyTodoList);
    } else if (changeInputValue.trim() !== "") {
      alert("올바른 값을 입력해주세요.");
    }
  };
  // 체크 박스 상태 method
  const checkClick = (id, check) => {
    const findId = todoList.findIndex((todoItem) => todoItem.id === id);
    let copyTodoList = [...todoList];
    if (findId !== -1) {
      copyTodoList[findId] = { ...todoList[findId], check: !check };
    }
    setTodoList(copyTodoList);
  };

  const setInputVal = (e) => {
    setInputValue(e.target.value);
  };

  const addItem = () => {
    if (addData.inputValue !== null && addData.inputValue.trim() !== "") {
      setTodoList([...todoList, addData]);
      setInputValue("");
    } else {
      alert("값을 올바르게 입력해주세요");
    }
  };

  const DeleteList = (id) => {
    if (window.confirm("삭제 하시겠습니까?")) {
      setTodoList(todoList.filter((todo) => todo.id !== id));
    }
  };

  // 삭제 method
  const DeleteTotalList = () => {
    if (window.confirm("전체 삭제 하시겠습니까?")) {
      setTodoList([]);
    }
  };

  return (
    <TodoListStyle>
      <h1>Todo List</h1>
      <input type="text" onChange={setInputVal} value={inputValue} />
      <Button variant="contained" onClick={addItem}>
        추가
      </Button>
      <Button variant="contained" color="error" onClick={DeleteTotalList}>
        전체 삭제
      </Button>
      <>
        <TodoBoard
          todoList={todoList}
          delete={DeleteList}
          change={changeInput}
          checkClick={checkClick}
        />
      </>
    </TodoListStyle>
  );
};
export default TodoList;
