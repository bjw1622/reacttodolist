import React from"react";
import { useDispatch } from "react-redux";
import { todoListAction } from "./TodoListSlice";

const TodoChangeBtn = (props)=>{
    const dispatch = useDispatch();
    
    const changeInput = ()=>{
        const changeInputValue = prompt("수정 내용을 입력해주세요");
        if(changeInputValue !== null){
            dispatch(todoListAction.change(props.id,changeInputValue))
        } 
        else if(changeInputValue.trim() !== ""){
            alert('올바른 값을 입력해주세요.');
        }
    }

    return(
        <button onClick={changeInput}>수정</button>
    );
    
}
export default TodoChangeBtn