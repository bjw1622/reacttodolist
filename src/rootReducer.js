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

export default rootReducer;
