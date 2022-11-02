import {useDispatch}from "react-redux"
import { todoListAction } from "./TodoListSlice";
import Button from '@mui/material/Button';

function AddList(props){
    const dispatch = useDispatch();
	const addTodoList = () => {
		if(props.addData.inputValue !== null && props.addData.inputValue.trim() !== "")
      {
		    dispatch(todoListAction.add(props.addData))
        // TODO inputvalue는 usestate인데 어떻게 처리??
        // setInputValue ="" 
      }
    else{
      alert('값을 올바르게 입력해주세요');
    }  
	}
    return ( 
			<Button variant="contained" onClick={addTodoList}>추가</Button>
	  )
  }
  export default AddList;