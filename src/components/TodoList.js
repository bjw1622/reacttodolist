import React,{useState} from "react";
import TodoBoard from "./TodoBoard";

const TodoList = ()=>{
    
    const [inputValue, setInputValue] = useState("");

    const [todoList, setTodoList] = useState([]);
  
    const id = todoList.length;
    const addData = {
      id,
      inputValue,
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
        <TodoBoard todoList={todoList} delete={DeleteList} />
        </>
    )
}
export default TodoList;