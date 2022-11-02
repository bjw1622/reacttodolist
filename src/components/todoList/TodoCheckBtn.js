import React from "react";
import { useDispatch } from "react-redux";
import styled from 'styled-components';
import { todoListAction } from "./TodoListSlice";
const TodoCheckBtnSyled = styled.input`
{
    width:30px!important;
}`
const TodoCheckBtn = (props)=>{
    const dispatch = useDispatch();
    const checkClick = ()=>{
        dispatch(todoListAction.check(props.id,props.check))
    }

    return(
        <TodoCheckBtnSyled type="checkbox" onChange={checkClick} checked={props.check}>
        </TodoCheckBtnSyled>
        )
}
export default TodoCheckBtn