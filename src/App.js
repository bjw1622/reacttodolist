import React from "react";
import { configureStore } from "@reduxjs/toolkit";
import { Provider } from "react-redux";
import Counter from "./components/counter/Counter";
import { counterReducer } from "./components/counter/Slice";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import TodoList from "./components/TodoList";
import { todoList } from "./components/todoList/TodoListSlice";
import CalendarUI from "./components/calendar/CalendarUI";
import { CalendarSliceReducer } from "./components/calendar/CalendarSlice";
import Layout from "./components/Layout";

const store = configureStore({
  reducer: {
    counter: counterReducer,
    addList: todoList,
    calendarReducer: CalendarSliceReducer,
  },
});

const App = () => {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <Routes>
          <Route element={<Layout />}>
            <Route path="/count" element={<Counter />}></Route>
            <Route path="/" element={<TodoList />}></Route>
            <Route path="/calendar" element={<CalendarUI />}></Route>
          </Route>
        </Routes>
      </BrowserRouter>
    </Provider>
  );
};
export default App;
