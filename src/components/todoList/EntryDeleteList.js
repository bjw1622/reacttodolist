import Button from "@mui/material/Button";
import { useDispatch } from "react-redux";
import { todoListAction } from "./TodoListSlice";

const EntryDeleteList = () => {
  const dispatch = useDispatch();
  const DeleteTotalList = () => {
    if (window.confirm("전체 삭제 하시겠습니까?")) {
      dispatch(todoListAction.deleteEntryRequest());
    }
  };
  return (
    <Button variant="contained" color="error" onClick={DeleteTotalList}>
      전체 삭제
    </Button>
  );
};
export default EntryDeleteList;
