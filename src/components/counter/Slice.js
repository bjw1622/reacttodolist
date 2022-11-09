import { createSlice } from "@reduxjs/toolkit";

const counterSlice = createSlice({
  name: "counterSlice",
  initialState: { value: 0 },
  reducers: {
    upRequest: (state, action) => {
      state.value = state.value + action.payload;
      console.log("upRequest 요청 action");
    },
    upSuccess: (state, action) => {
      console.log("Success");
    },
    upFailure: (state, action) => {
      console.log("Failure");
    },
  },
});
export const counterReducer = counterSlice.reducer;
export const counterAction = counterSlice.actions;
