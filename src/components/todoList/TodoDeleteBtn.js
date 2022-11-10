import React from "react";
import { useDispatch } from "react-redux";
import { todoListAction } from "./TodoListSlice";
import Button from "@mui/material/Button";

const TodoDeleteBtn = (props) => {
  const dispatch = useDispatch();
  const DeleteList = () => {
    if (window.confirm("삭제 하시겠습니까?")) {
      dispatch(todoListAction.deleteRequest(props.id));
    }
  };
  return (
    <Button
      style={{ marginTop: "6px" }}
      variant="contained"
      color="error"
      onClick={() => DeleteList()}
    >
      삭제
    </Button>
  );
};
export default TodoDeleteBtn;
