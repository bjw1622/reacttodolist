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

function* deleteEntryTodo(action, payload) {
  try {
    yield call(api.deleteEntryTodo);
    yield put({
      type: todoListAction.deleteEntrySuccess,
    });
  } catch (error) {
    yield put(todoListAction.deleteEntryFailure());
  }
}

function* putTodoInputValue(action, payload) {
  try {
    const putTodoList = yield call(api.putTodoInputValue, action.payload);
    yield put({
      type: todoListAction.putInputValueSuccess,
      payload: putTodoList,
    });
  } catch (error) {
    yield put(todoListAction.putInputValueFailure());
  }
}

function* putTodoCheck(action, payload) {
  try {
    const putTodoList = yield call(api.putTodoCheck, action.payload);
    yield put({
      type: todoListAction.putCheckSuccess,
      payload: putTodoList.data,
    });
  } catch (error) {
    yield put(todoListAction.putCheckFailure());
  }
}

export function* watchTodoList() {
  yield takeLatest(todoListAction.addRequest, addTodo);
  yield takeLatest(todoListAction.getTodoRequest, getTodo);
  yield takeLatest(todoListAction.deleteRequest, deleteTodo);
  yield takeLatest(todoListAction.deleteEntryRequest, deleteEntryTodo);
  yield takeLatest(todoListAction.putInputValueRequest, putTodoInputValue);
  yield takeLatest(todoListAction.putCheckRequest, putTodoCheck);
}
