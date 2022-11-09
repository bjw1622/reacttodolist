import { takeLatest, delay, put, call } from "redux-saga/effects";
import api from "./api";
import { counterAction } from "./Slice";

function* up(action) {
  try {
    const count = yield call(api.getCount);
    yield put({ type: counterAction.upSuccess, payload: count });
  } catch (error) {
    yield put(counterAction.upFailure());
  }
}

// 이벤트 리스너 같은 역할을 한다.
export function* watchCounter() {
  yield takeLatest(counterAction.upRequest, up);
}
