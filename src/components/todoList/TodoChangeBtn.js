import React from "react";
import { useDispatch } from "react-redux";
import { todoListAction } from "./TodoListSlice";
import styled from "styled-components";
const ChangeBtnStyle = styled.button`
   {
    width: 39px;
    height: 38px;
    border: 0px;
    padding: 0px;
    margin-top: 3px;
    margin-bottom: 3px;
  }
`;
const TodoChangeBtn = (props) => {
  const dispatch = useDispatch();

  const changeInput = () => {
    const changeInputValue = prompt("수정 내용을 입력해주세요");
    if (changeInputValue !== null) {
      dispatch(todoListAction.change({ id: props.id, changeInputValue }));
    } else if (changeInputValue === null) {
      return;
    } else if (changeInputValue.trim() === "") {
      alert("올바른 값을 입력해주세요.");
    }
  };
  return <ChangeBtnStyle onClick={changeInput}>수정</ChangeBtnStyle>;
};
export default TodoChangeBtn;
