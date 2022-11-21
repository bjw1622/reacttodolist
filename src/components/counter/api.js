import Axios from "axios";

const getCount = () => {
  return Axios.get("http://localhost:3001/count");
};
const postCount = () => {
  return Axios.post("http://localhost:3001/count");
};
const getBoardList = () => {
  console.log("API call");
  return Axios.get("http://localhost:3001/getBoardList");
};
const api = {
  getCount,
  postCount,
  getBoardList,
};

export default api;
