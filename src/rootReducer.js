import { all } from "redux-saga/effects";
import { counterReducer } from "./components/counter/Slice";
import { CalendarSliceReducer } from "./components/calendar/CalendarSlice";
import { boardReducer } from "./components/board/BoardSlice";
import { todoList } from "./components/todoList/TodoListSlice";
import { combineReducers } from "redux";

const rootReducer = combineReducers({
  counter: counterReducer,
  calendarReducer: CalendarSliceReducer,
  boardReducer: boardReducer,
  addList: todoList,
});

export function* rootSaga() {
  yield all([]); // all 은 배열 안의 여러 사가를 동시에 실행시켜줍니다.
}

export default rootReducer;
