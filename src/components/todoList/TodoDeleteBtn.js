import React from "react";
import { useDispatch } from "react-redux";
import { todoListAction } from "./TodoListSlice";
import styled from "styled-components";
const DelteBtnStyle = styled.button`
   {
    width: 39px;
    height: 38px;
    border: 0px;
    padding: 0px;
    margin-top: 3px;
    margin-bottom: 3px;
    margin-left: 2px;
  }
`;
const TodoDeleteBtn = (props) => {
  const dispatch = useDispatch();
  const DeleteList = () => {
    if (window.confirm("삭제 하시겠습니까?")) {
      dispatch(todoListAction.delete(props.id));
    }
  };
  return <DelteBtnStyle onClick={() => DeleteList()}>삭제</DelteBtnStyle>;
};
export default TodoDeleteBtn;
