
import React from "react";
import{configureStore} from '@reduxjs/toolkit'
import {Provider} from 'react-redux';
import Counter from "./components/counter/Counter";
import Index from "./components/index";
import { counterReducer } from "./components/counter/Slice";
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import TodoList from './components/TodoList';
const store = configureStore({
  reducer:{
    counter: counterReducer
  }
})

export default function App(){
    return(
      <Provider store={store}>
        {/* <div>
            <Counter></Counter>
        </div> */}
        <BrowserRouter>
				
				<Routes>
					<Route path="/" element={<Index />}></Route>
					<Route path="/count" element={<Counter />}></Route>
					<Route path="/todolist" element={<TodoList />}></Route>
					{/* 상단에 위치하는 라우트들의 규칙을 모두 확인, 일치하는 라우트가 없는경우 처리 */}
				</Routes>
			</BrowserRouter>
      </Provider>
    );
}