import React from "react";
import { configureStore } from "@reduxjs/toolkit";
import { Provider } from "react-redux";
import Counter from "./components/counter/Counter";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import CalendarUI from "./components/calendar/CalendarUI";
import Layout from "./components/Layout";
import Index from "./components/board/Index";
import Write from "./components/board/Write";
import TodoList from "./components/TodoList";
import createSagaMiddleware from "redux-saga";
import rootReducer from "./rootReducer";
import { watchCounter } from "./components/counter/saga";
import { all } from "redux-saga/effects";
import { watchTodoList } from "./components/todoList/saga";

const sagaMiddleware = createSagaMiddleware(); // 사가 미들웨어를 만듭니다.

function* rootSaga() {
  yield all([watchCounter(), watchTodoList()]);
}

const store = () => {
  const store = configureStore({
    reducer: rootReducer,
    devTools: true,
    middleware: [sagaMiddleware],
  });

  sagaMiddleware.run(rootSaga);
  return store;
};

const App = () => {
  return (
    <Provider store={store()}>
      <BrowserRouter>
        <Routes>
          <Route element={<Layout />}>
            <Route path="/count" element={<Counter />}></Route>
            <Route path="/" element={<TodoList />}></Route>
            <Route path="/calendar" element={<CalendarUI />}></Route>
            <Route path="/board" element={<Index />}></Route>
            <Route path="/board/write" element={<Write />}></Route>
          </Route>
        </Routes>
      </BrowserRouter>
    </Provider>
  );
};
export default App;
