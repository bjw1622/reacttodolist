import Axios from "axios";

const getBoardList = () => {
  return Axios.get("https://localhost:44347/Board/IndexBoardList", {});
};

const api = {
  getBoardList,
};
export default api;
