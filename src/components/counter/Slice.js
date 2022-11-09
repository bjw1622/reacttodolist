import { createSlice } from "@reduxjs/toolkit";

const counterSlice = createSlice({
  name: "counterSlice",
  initialState: { value: 0 },
  reducers: {
    getCounstRequest: (state, action) => {
      console.log("getCounstRequest /  통신 요청");
    },
    getCounstSucess: (state, { payload }) => {
      console.log("getCounstSucess /  통신 성공");
      console.log(payload.data);
      state.value = payload.data;
    },
    getCounstFailure: (state, action) => {
      console.log("getCounstFailure /  통신 실패");
    },
    upRequest: (state, action) => {
      console.log("upRequest /  통신 요청");
    },
    upSuccess: (state, { payload }) => {
      console.log("upSuccess / 통신 성공");
      state.value = payload.data;
    },
    upFailure: (state, action) => {
      console.log("upFailure / 통신 실패");
    },
  },
});
export const counterReducer = counterSlice.reducer;
export const counterAction = counterSlice.actions;
