import { createSlice } from "@reduxjs/toolkit";

const todoListSlice = createSlice({
  name: "todoListSlice",
  initialState: {
    list: [
      {
        addDate: "02-11-2022",
        check: false,
        id: "saddasdasd-sadada-sdadasd1",
        inputValue: "Test1",
      },
      {
        addDate: "11-11-2022",
        check: false,
        id: "saddasdasd-sadada-sdadasd2",
        inputValue: "Test2",
      },
      {
        addDate: "24-11-2022",
        check: false,
        id: "saddasdasd-sadada-sdadasd3",
        inputValue: "Test3",
      },
    ],
  },
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
