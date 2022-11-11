import { takeLatest, put, call } from "redux-saga/effects";
import api from "./api";
import { boardAction, boardReducer } from "./BoardSlice";

function* getTodo(action) {
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

export function* watchBoardList() {
  yield takeLatest(boardAction.getBoardListRequest, getTodo);
}
