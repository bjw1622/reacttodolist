import { MdDone, MdDelete } from 'react-icons/md';
const TodoItem = ()=>{
    return (
        <div className="TodoItem">
            <button>체크</button>
            <div>react todo list 만들기</div>
            <button>
                <MdDelete/>
            </button>  
        </div>
    )
}
export default TodoItem;