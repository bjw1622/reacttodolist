import { takeLatest, put, call, delay } from "redux-saga/effects";
import api from "./api";
import { todoListAction } from "./TodoListSlice";

function* addTodo(action, payload) {
  try {
    yield call(api.postTodo, action.payload);
    yield put({ type: todoListAction.addSuccess, payload: action.payload });
  } catch (error) {
    yield put(todoListAction.addFailure());
  }
}

export function* watchTodoList() {
  yield takeLatest(todoListAction.addRequest, addTodo);
}
