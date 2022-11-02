import { createSlice } from "@reduxjs/toolkit";

const todoListSlice = createSlice({
  name: "todoListSlice",
  initialState: { list: [] },
  reducers: {
    add: (state, action) => {
      state.list.push(action.payload);
    },
    entryDelete: (state, action) => {
      state.list = [];
    },
    delete: (state, action) => {
      state.list = state.list.filter((list) => list.id !== action.payload);
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
