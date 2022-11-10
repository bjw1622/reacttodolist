import Axios from "axios";

const getTodo = () => {
  return Axios.get("http://localhost:3001/todo");
};
const postTodo = (addTodo) => {
  return Axios.post("http://localhost:3001/todo", addTodo);
};
const deleteTodo = (itemId) => {
  return Axios.delete("http://localhost:3001/todo", {
    data: {
      Id: itemId,
    },
  });
};
const deleteEntryTodo = () => {
  return Axios.delete("http://localhost:3001/todoEntry");
};
const putTodoInputValue = (putData) => {
  return Axios.put("http://localhost:3001/todoInputValue", {
    data: {
      Id: putData.id,
      InputValue: putData.changeInputValue,
    },
  });
};
const api = {
  getTodo,
  postTodo,
  deleteTodo,
  deleteEntryTodo,
  putTodoInputValue,
};
export default api;
