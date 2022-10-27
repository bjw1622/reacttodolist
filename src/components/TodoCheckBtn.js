import React,{useState} from "react";
import { FaRegCircle,FaRegCheckCircle } from "react-icons/fa";
const TodoCheckBtn = (props)=>{
    const [checkImg,SetCheckImg] = useState(<FaRegCircle/>)
    const btnClick = ()=>{
        SetCheckImg(<FaRegCheckCircle/>);
    }
    return(
        <button onClick={btnClick}>
            {checkImg}
        </button>
        )
}
export default TodoCheckBtn