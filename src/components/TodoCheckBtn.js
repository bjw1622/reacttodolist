import React from "react";
import styled from 'styled-components';
const TodoCheckBtnSyled = styled.input`
{
    width:30px!important;
}`
const TodoCheckBtn = (props)=>{
    return(
        <TodoCheckBtnSyled type="checkbox" onChange={()=>props.checkClick(props.id,props.check)} checked={props.check}>
        </TodoCheckBtnSyled>
        )
}
export default TodoCheckBtn