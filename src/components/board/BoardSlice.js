import { createSlice } from "@reduxjs/toolkit";

const boardSlice = createSlice({
  name: "boardSlice",
  initialState: {
    list: [],
  },
  reducers: {},
});

export const boardReducer = boardSlice.reducer;
export const boardAction = boardSlice.actions;
