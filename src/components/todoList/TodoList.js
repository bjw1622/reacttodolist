import { createSlice } from "@reduxjs/toolkit";

const todoListSlice = createSlice({
  name:'todoListSlice',
  initialState:{list:[]},
  reducers:{
    add:(state,action)=>{
      state.list.push(action.payload);
    }
  }
})
export const todoAddList = todoListSlice.reducer;
export const todoListAction = todoListSlice.actions;