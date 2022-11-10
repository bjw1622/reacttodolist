import React from "react";
import { useDispatch } from "react-redux";
import { todoListAction } from "./TodoListSlice";
import Button from "@mui/material/Button";

const TodoChangeBtn = (props) => {
  const dispatch = useDispatch();

  const changeInput = () => {
    const changeInputValue = prompt("수정 내용을 입력해주세요");
    if (changeInputValue !== null) {
      dispatch(
        todoListAction.putInputValueRequest({ id: props.id, changeInputValue })
      );
    } else if (changeInputValue === null) {
      return;
    } else if (changeInputValue.trim() === "") {
      alert("올바른 값을 입력해주세요.");
    }
  };
  return (
    <Button
      style={{ marginTop: "6px", marginRight: "3px" }}
      variant="contained"
      color="success"
      onClick={changeInput}
    >
      수정
    </Button>
  );
};
export default TodoChangeBtn;
