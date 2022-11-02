import React from "react";
import { useDispatch } from "react-redux";
import { todoListAction } from "./TodoListSlice";

const TodoDeleteBtn = (props) => {
  const dispatch = useDispatch();
  const DeleteList = () => {
    if (window.confirm("삭제 하시겠습니까?")) {
      dispatch(todoListAction.delete(props.id));
    }
  };
  return <button onClick={() => DeleteList()}>삭제</button>;
};
export default TodoDeleteBtn;
