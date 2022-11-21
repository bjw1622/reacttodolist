import { takeLatest, put, call } from "redux-saga/effects";
import api from "./api";
import { boardAction } from "./BoardSlice";

function* getBoardList(action) {
  try {
    const getBoardList = yield call(api.getBoardList);
    yield put({
      type: boardAction.getBoardListSuccess,
      payload: getBoardList.data,
    });
  } catch (error) {
    yield put({
      type: boardAction.getBoardListFailure,
    });
  }
}

function* addBoard(action) {
  try {
    const addBoard = yield call(api.writeBoard, action.payload);
    yield put({
      type: boardAction.addBoardSuccess,
      payload: addBoard,
    });
  } catch (error) {
    yield put({
      type: boardAction.addBoardFailure,
    });
  }
}

export function* watchBoardList() {
  yield takeLatest(boardAction.getBoardListRequest, getBoardList);
  yield takeLatest(boardAction.addBoardRequest, addBoard);
}
