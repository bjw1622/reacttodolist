import React,{useState} from "react";
import TodoBoard from "./TodoBoard";
import {v4 as uuidv4} from 'uuid';
import { render } from "@testing-library/react";

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

    // 삭제 method
    const DeleteTotalList = ()=>{
        if(window.confirm("전체 삭제 하시겠습니까?")){
          setTodoList([]);
        }
      } 

    // 수정 method
    const changeInput = (id)=>{
        const changeInputValue = prompt("수정 내용을 입력해주세요");
        // setTodoList(
        //   todoList.map((todo)=>{
        //     todo.id === id ? {todo,[inputValue]:changeInputValue} : {todo}
        //   })
        //   )
        const findId = todoList.findIndex(todoItem => todoItem.id === id);
        let copyTodoList = [...todoList];
        if(findId !== -1){
          copyTodoList[findId] = {...todoList[findId],inputValue:changeInputValue};
        }
        setTodoList(copyTodoList);
      } 
    return(
        <>
        <input type="text" onChange={setInputVal} value={inputValue}/>
        <button onClick={addItem}>추가</button>
        <button onClick={DeleteTotalList}>전체 삭제</button>
        <TodoBoard todoList={todoList} delete={DeleteList} check={addData.checked} change={changeInput} />
        </>
    )
}
export default TodoList;