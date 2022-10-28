import React,{useState} from "react";
import TodoBoard from "./TodoBoard";
import {v4 as uuidv4} from 'uuid';

const TodoList = ()=>{
    
    const [inputValue, setInputValue] = useState("");

    const [todoList, setTodoList] = useState([]);
  
    const id = uuidv4();
    const checked = false;
    const addData = {
      id,
      inputValue,
      checked,
    }
    const setInputVal = (e)=>{
      setInputValue(e.target.value);
    }
    const addItem = () => {
      setTodoList([...todoList, addData]);
      setInputValue("");
    }
    const DeleteList = (id)=>{
        if(window.confirm("삭제 하시겠습니까?")){
          setTodoList(todoList.filter((todo) => todo.id !== id));
        }
      }
    return(
        <>
        <input type="text" onChange={setInputVal} value={inputValue}/>
        <button onClick={addItem}>추가</button>
        <TodoBoard todoList={todoList} delete={DeleteList} check={addData.checked} />
        </>
    )
}
export default TodoList;