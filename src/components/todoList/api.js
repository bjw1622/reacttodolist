import Axios from "axios";

const getTodo = () => {
  return Axios.get("http://localhost:3001/todo");
};
const postTodo = (addTodo) => {
  return Axios.post("http://localhost:3001/todo", addTodo);
};
const api = {
  getTodo,
  postTodo,
};
export default api;
