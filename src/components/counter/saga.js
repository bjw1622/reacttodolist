import { all, fork, takeLatest, delay, put } from "redux-saga/effects";
import { counterAction } from "./Slice";

function* up(action) {
  try {
    yield console.log("saga / logIn1");
  } catch (error) {
    yield console.log("saga / logIn2");
  }
}

// 이벤트 리스너 같은 역할을 한다.
export function* watchCounter() {
  yield takeLatest(counterAction.up, up);
}

// export default function* userSaga() {
//   yield all([fork(watchCounter)]);
// }
