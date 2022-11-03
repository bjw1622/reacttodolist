import { createSlice } from "@reduxjs/toolkit";

const CalendarSlice = createSlice({
  name: "calendarSlice",
  initialState: {},
  reducers: {},
});
export const CalendarSliceReducer = CalendarSlice.reducer;
export const CalendarSliceAction = CalendarSlice.actions;
