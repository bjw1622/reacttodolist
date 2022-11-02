import { createSlice } from "@reduxjs/toolkit";

const todoListSlice = createSlice({
  name:'todoListSlice',
  initialState:{list:[]},
  reducers:{
    add:(state,action)=>{
      state.list.push(action.payload);
    },
    entryDelete:(state,action)=>{
      state.list=[];
    },
    delete:(state,action)=>{
      state.list = (state.list.filter((list)=>list.id !== action.payload))
    }
}
})
export const todoAddList = todoListSlice.reducer;
export const todoListAction = todoListSlice.actions;