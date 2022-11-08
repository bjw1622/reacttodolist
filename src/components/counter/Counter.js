import { counterAction } from "./Slice";
import { useDispatch, useSelector } from "react-redux";
import styled from "styled-components";
import React, { useEffect } from "react";
import Axios from "axios";
import { v4 as uuidv4 } from "uuid";
import moment from "moment";
import { todoListAction } from "../todoList/TodoListSlice";

const CounterBtn = styled.button`
   {
    opacity: ${(count) => (count === 2 ? "0.1" : "1")};
  }
`;
let inputCount = 1;
const Counter = () => {
  const dispatch = useDispatch();

  const addData = {
    addDate: moment(new Date()).format("DD-MM-YYYY"),
    check: false,
    id: uuidv4(),
    inputValue: `test${inputCount++}`,
  };

  const totalList = useSelector((state) => {
    return state.addList;
  });

  // Axios get방식
  useEffect(() => {
    async function getData() {
      const value = await Axios.get("http://localhost:3001/todo");
      console.log(value);
      console.log(totalList);
      console.log("useEffect 실행");
    }
    getData();
  }, [totalList]);

  // Axios post방식
  const btnClick = () => {
    Axios.post(`http://localhost:3001/todo`, addData)
      .then((res) => {
        dispatch(todoListAction.add(addData));
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const count = useSelector((state) => {
    return state.counter.value;
  });

  const incremntEvent = () => {
    dispatch(counterAction.up(2));
  };
  return (
    <>
      <div>
        <br />
        <CounterBtn onClick={incremntEvent}>+</CounterBtn> {count}
      </div>
      <button onClick={btnClick}>post 테스트</button>
    </>
  );
};
export default Counter;
