import { createSlice } from "@reduxjs/toolkit";

const boardSlice = createSlice({
  name: "boardSlice",
  initialState: {
    list: [],
  },
  reducers: {
    getBoardListRequest: (state, action) => {
      console.log("getBoardListRequest");
    },
    getBoardListSuccess: (state, { payload }) => {
      console.log("getBoardListSuccess");
      state.list = payload;
    },
    getBoardListFailure: (state, action) => {
      console.log("getBoardListFailure");
    },
    addBoardRequest: (state, action) => {
      console.log("addBoardRequest");
    },
    addBoardSuccess: (state, { payload }) => {
      console.log("addBoardSuccess");
      if (payload.data !== -1) {
        alert("글 작성이 완료 되었습니다.");
        // window.location.href("http://localhost:3000/board");
      }
    },
    addBoardFailure: (state, action) => {
      console.log("addBoardFailure");
    },
  },
});

export const boardReducer = boardSlice.reducer;
export const boardAction = boardSlice.actions;
