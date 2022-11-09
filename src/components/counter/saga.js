import {
  all,
  fork,
  takeLatest,
  delay,
  put,
  takeEvery,
} from "redux-saga/effects";
import { counterAction } from "./Slice";

function* up(action) {
  try {
    yield delay(3000);
    yield console.log("up실행중");
  } catch (error) {
    yield console.log("saga / logIn2");
  }
}

// 이벤트 리스너 같은 역할을 한다.
export function* watchCounter() {
  yield takeEvery(counterAction.upRequest, up);
}
