import Axios from "axios";

const getBoardList = () => {
  return Axios.get("/Board/IndexBoardList", {});
};

const writeBoard = (putData) => {
  return Axios.post("/Board/WriteBoard", {
    Title: putData.Title,
    Content: putData.Content,
    Email: putData.Email,
  });
};

const api = {
  getBoardList,
  writeBoard,
};
export default api;
