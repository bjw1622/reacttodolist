import React from 'react';

const TodoDeleteBtn = (props)=>{
    return(
        <button onClick={() => props.delete(props.id)}>삭제</button>
    );
}
export default TodoDeleteBtn