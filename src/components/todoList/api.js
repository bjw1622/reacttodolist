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
const api = {
  getTodo,
  postTodo,
  deleteTodo,
};
export default api;
