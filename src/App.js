import React from "react";
import { configureStore } from "@reduxjs/toolkit";
import { Provider } from "react-redux";
import Counter from "./components/counter/Counter";
import Index from "./components/index";
import { counterReducer } from "./components/counter/Slice";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import TodoList from "./components/TodoList";
import { todoAddList } from "./components/todoList/TodoListSlice";

const store = configureStore({
  reducer: {
    counter: counterReducer,
    addList: todoAddList,
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
        </Routes>
      </BrowserRouter>
    </Provider>
  );
}
