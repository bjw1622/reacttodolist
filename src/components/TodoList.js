import React, { useEffect, useState } from "react";
import styled from "styled-components";
import AddList from "./todoList/AddList";
import EntryDeleteList from "./todoList/EntryDeleteList";
import TodoBoard from "./todoList/TodoBoard";
import { v4 as uuidv4 } from "uuid";
import moment from "moment/moment";
import { useDispatch, useSelector } from "react-redux";
import { Calendar } from "react-calendar";
import { todoListAction } from "./todoList/TodoListSlice";
const TodoListStyle = styled.div`
   {
    width: 512px;
    border-radius: 16px;
    box-shadow: 0 0 8px 0 rgba(0, 0, 0, 0.04);
    margin: 15px auto 32px auto;
    background: darkgray;
    display: flex;
    flex-direction: column;

    h1 {
      margin: 20px 0px 20px 10px;
      font-size: 36px;
      color: white;
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

  const [value, onChange] = useState(new Date());

  const getTodoList = useSelector((state) => state.addList.list);

  useEffect(() => {
    dispatch(todoListAction.getTodoRequest());
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const id = uuidv4();

  const dispatch = useDispatch();

  const addTodoList = () => {
    if (addData.inputValue !== null && addData.inputValue.trim() !== "") {
      dispatch(todoListAction.addRequest(addData));
      setInputVal("");
    } else {
      alert("값을 올바르게 입력해주세요");
    }
  };

  const addData = {
    id,
    inputValue,
    check: false,
    addDate: moment(value).format("DD-MM-YYYY"),
  };

  const setInputVal = (e) => {
    setInputValue(e);
  };

  return (
    <>
      <Calendar
        onChange={onChange}
        value={value}
        tileClassName={({ date, view }) => {
          if (
            getTodoList.find(
              (x) => x.addDate === moment(date).format("DD-MM-YYYY")
            )
          ) {
            return "highlight";
          }
        }}
      />
      <TodoListStyle>
        <h1 style={{ margin: "0 auto", padding: "15px" }}>Todo List</h1>
        <input
          id="input-value"
          type="text"
          onChange={(e) => setInputVal(e.target.value)}
          value={inputValue}
          onKeyPress={(event) => {
            if (event.key === "Enter") {
              setInputVal(event.target.value);
              addTodoList();
            }
          }}
        />
        <AddList addData={addData} setInputVal={setInputVal}></AddList>
        <EntryDeleteList></EntryDeleteList>
        <TodoBoard dateValue={value}></TodoBoard>
      </TodoListStyle>
    </>
  );
};
export default TodoList;
