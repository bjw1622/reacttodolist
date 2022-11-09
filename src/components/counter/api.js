import Axios from "axios";

const getCount = () => {
  return Axios.get("http://localhost:3001/count");
};
const postCount = () => {
  return Axios.post("http://localhost:3001/count");
};
const api = {
  getCount,
  postCount,
};

export default api;
