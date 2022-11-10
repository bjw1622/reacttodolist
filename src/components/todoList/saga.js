import { takeLatest, put, call, delay } from "redux-saga/effects";
import api from "./api";
import { todoListAction } from "./TodoListSlice";

function* getTodo(action, payload) {
  try {
    const getTodoList = yield call(api.getTodo);
    yield put({
      type: todoListAction.getTodoSuccess,
      payload: getTodoList.data,
    });
  } catch (error) {
    yield put(todoListAction.getTodoFailure());
  }
}

function* addTodo(action, payload) {
  try {
    const addTodoList = yield call(api.postTodo, action.payload);
    yield put({ type: todoListAction.addSuccess, payload: addTodoList.data });
  } catch (error) {
    yield put(todoListAction.addFailure());
  }
}

function* deleteTodo(action, payload) {
  try {
    const addTodoList = yield call(api.deleteTodo, action.payload);
    yield put({
      type: todoListAction.deleteSuccess,
      payload: addTodoList.data,
    });
  } catch (error) {
    yield put(todoListAction.deleteFailure());
  }
}

export function* watchTodoList() {
  yield takeLatest(todoListAction.addRequest, addTodo);
  yield takeLatest(todoListAction.getTodoRequest, getTodo);
  yield takeLatest(todoListAction.deleteRequest, deleteTodo);
}
