import React from "react";
import { configureStore } from "@reduxjs/toolkit";
import { Provider } from "react-redux";
import Counter from "./components/counter/Counter";
import Index from "./components/Index";
import { counterReducer } from "./components/counter/Slice";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import TodoList from "./components/TodoList";
import { todoList } from "./components/todoList/TodoListSlice";
import CalendarUI from "./components/calendar/CalendarUI";
import { CalendarSliceReducer } from "./components/calendar/CalendarSlice";

const store = configureStore({
  reducer: {
    counter: counterReducer,
    addList: todoList,
    calendarReducer: CalendarSliceReducer,
  },
});

export default function App() {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />}></Route>
          <Route path="/count" element={<Counter />}></Route>
          <Route path="/todolist" element={<TodoList />}></Route>
          <Route path="/calendar" element={<CalendarUI />}></Route>
        </Routes>
      </BrowserRouter>
    </Provider>
  );
}
