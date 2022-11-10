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
const api = {
  getTodo,
  postTodo,
  deleteTodo,
  deleteEntryTodo,
};
export default api;
