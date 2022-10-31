import React from 'react';
import styled from 'styled-components';

const TodoDeleteBtnSyled = styled.button`
{
    width:50px!important;
    height:30px!important;
}`
const TodoDeleteBtn = (props)=>{

    return(
        // <button onClick={props.delete(props.id)}>삭제</button>
        <TodoDeleteBtnSyled onClick={() => props.delete(props.id)}>삭제</TodoDeleteBtnSyled>
    );
}
export default TodoDeleteBtn