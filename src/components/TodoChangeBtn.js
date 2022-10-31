import React from"react";
import styled from 'styled-components';

const TodoChangeBtnSyled = styled.button`
{
    width:50px!important;
    height:30px!important;
    margin:10 auto 10 auto!important;
}`
const TodoChangeBtn = (props)=>{
    return(
        <TodoChangeBtnSyled onClick={()=>{props.change(props.id)}}>수정</TodoChangeBtnSyled>
    );
}
export default TodoChangeBtn