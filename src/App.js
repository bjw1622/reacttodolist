import "./App.css";
import TodoTemplate from './TodoTemplate'
import TodoList from "./TodoList";

function App() {
  return (
    <div className="Body-background">
      <TodoTemplate>
        <TodoList/>
        </TodoTemplate>
    </div>
  );
}

export default App;
