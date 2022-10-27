import './App.css'
import React, { useState } from 'react';
import TodoBoard from "./components/TodoBoard"
function App() {

  const [inputValue, setInputValue] = useState("");

  const [todoList, setTodoList] = useState([]);

  const setInputVal = (event)=>{
    setInputValue(event.target.value)
  }
  const addItem = () => {
    setTodoList([...todoList, inputValue])
  }
  return (
    <main>
      <input type="text" onChange={setInputVal}/>
      <button onClick={addItem}>추가</button>
      <TodoBoard todoList={todoList} />
    </main >
  )
}
export default App;