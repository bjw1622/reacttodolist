import './App.css'
import React, {useState} from 'react';
import TodoBoard from "./components/TodoBoard"
function App() {

  const [inputValue, setInputValue] = useState("");

  const [todoList, setTodoList] = useState([]);

  const [id,setId] = useState(0);

  const addData = {
    id,
    inputValue,
  }

  const setInputVal = (e)=>{
    setInputValue(e.target.value);
  }

  const addItem = () => {
    setTodoList([...todoList, addData]);
    setInputValue("");
    setId(id+1);
  }

  const DeleteList = (id)=>{
    //
      setTodoList(todoList.filter((todo) => todo.id !== id));
    }
  
  return (
    <main>
      <input type="text" onChange={setInputVal} value={inputValue}/>
      <button onClick={addItem}>추가</button>
      <TodoBoard todoList={todoList} delete={DeleteList} />
    </main >
  )
}
export default App;