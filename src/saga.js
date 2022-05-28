import { all, fork } from "redux-saga/effects";
import itemSaga from "./redux/item/item.saga";

function* rootSaga() {
  yield all([fork(itemSaga)]);
}

export default rootSaga;
