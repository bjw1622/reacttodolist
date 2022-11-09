import { createSlice, current } from "@reduxjs/toolkit";

const counterSlice = createSlice({
  name: "counterSlice",
  initialState: { value: 0 },
  reducers: {
    upRequest: (state, action) => {
      console.log("reducer /  통신 요청");
    },
    upSuccess: (state, { payload }) => {
      console.log("Success / 통신 성공");
      state.value = payload.data;
    },
    upFailure: (state, action) => {
      console.log("Failure / 통신 실패");
    },
  },
});
export const counterReducer = counterSlice.reducer;
export const counterAction = counterSlice.actions;
