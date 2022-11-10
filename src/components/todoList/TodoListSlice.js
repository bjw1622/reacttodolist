import { createSlice, current } from "@reduxjs/toolkit";

const todoListSlice = createSlice({
  name: "todoListSlice",
  initialState: {
    list: [],
  },
  reducers: {
    getTodoRequest: (state, action) => {
      console.log("getTodoRequest");
    },
    getTodoSuccess: (state, { payload }) => {
      console.log("getTodoSuccess");
      state.list = payload;
    },
    getTodoFailure: (state, action) => {
      console.log("getTodoFailure");
    },

    addRequest: (state, action) => {
      console.log("addRequest");
    },
    addSuccess: (state, { payload }) => {
      console.log("addSuccess");
      state.list = payload;
    },
    addFailure: (state, action) => {
      console.log("addFailure");
    },
    deleteRequest: (state, action) => {
      console.log("deleteRequest");
    },
    deleteSuccess: (state, { payload }) => {
      console.log("deleteSuccess");
      state.list = payload;
    },
    deleteFailure: (state, action) => {
      console.log("deleteFailure");
    },
    deleteEntryRequest: (state, action) => {
      console.log("deleteEntryRequest");
    },
    deleteEntrySuccess: (state, { payload }) => {
      console.log("deleteEntrySuccess");
      state.list = [];
    },
    deleteEntryFailure: (state, action) => {
      console.log("deleteEntryFailure");
    },
    change: (state, action) => {
      const findId = state.list.findIndex(
        (todoItem) => todoItem.id === action.payload.id
      );
      if (findId !== -1) {
        state.list[findId].inputValue = action.payload.changeInputValue;
        state.list[findId].check = false;
      }
    },
    check: (state, action) => {
      const findId = state.list.findIndex(
        (todoItem) => todoItem.id === action.payload
      );
      if (findId !== -1) {
        state.list[findId].check = !state.list[findId].check;
      }
    },
  },
});
export const todoList = todoListSlice.reducer;
export const todoListAction = todoListSlice.actions;
