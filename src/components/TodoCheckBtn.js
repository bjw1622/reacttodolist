import React,{useState} from "react";

const TodoCheckBtn = (props)=>{
    
    const [completeState,setCompleteState] = useState("미완료");
    
    const clickCompleteState = ()=>{
        setCompleteState('완료');
    }
    return(
        <button onClick={clickCompleteState}>{completeState}</button>
    );
}
export default TodoCheckBtn