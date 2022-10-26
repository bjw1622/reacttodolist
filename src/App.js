import "./App.css";
import TodoTemplate from './TodoTemplate'
import TodoList from "./TodoList";
import TodoHead from "./TodoHead";
import TodoCreate from "./TodoCreate";

const App = () => {
  return (
    <div>
      <TodoTemplate>
        <TodoHead></TodoHead>
        <TodoList></TodoList>
        <TodoCreate></TodoCreate>
      </TodoTemplate>
    </div>
  );
}
export default App;
