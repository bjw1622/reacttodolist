import {useDispatch,useSelector}from "react-redux"
import { todoListAction } from "./TodoList";
import Button from '@mui/material/Button';
import TodoBoard from "../TodoBoard";

function AddList(props){
    const dispatch = useDispatch();
	const addList = useSelector((state)=>{
		return state.addList;
	})
	const addTodoList = () => {
		dispatch(todoListAction.add(props.addData))
	}
    return ( 
		<>
			<Button variant="contained" onClick={addTodoList}>추가</Button>
			<TodoBoard todoList={addList}/>
		</>
	)
  }
  export default AddList;