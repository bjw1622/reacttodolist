import { createSlice } from "@reduxjs/toolkit";

const CalendarSlice = createSlice({
  name: "calendarSlice",
  initialState: {
    Month: new Date().getMonth() + 1,
    Date: new Date().getDate(),
  },
  reducers: {},
});
export const CalendarSliceReducer = CalendarSlice.reducer;
export const CalendarSliceAction = CalendarSlice.actions;
