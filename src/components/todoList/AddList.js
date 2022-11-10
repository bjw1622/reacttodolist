import { useDispatch } from "react-redux";
import { todoListAction } from "./TodoListSlice";
import Button from "@mui/material/Button";

const AddList = (props) => {
  const dispatch = useDispatch();
  const addTodoList = () => {
    if (
      props.addData.inputValue !== null &&
      props.addData.inputValue.trim() !== ""
    ) {
      dispatch(todoListAction.addRequest(props.addData));
      props.setInputVal("");
    } else {
      alert("값을 올바르게 입력해주세요");
    }
  };
  return (
    <Button variant="contained" onClick={addTodoList}>
      추가
    </Button>
  );
};
export default AddList;
