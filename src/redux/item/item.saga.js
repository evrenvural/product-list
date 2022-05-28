import { all, call, put, takeLatest } from "redux-saga/effects";
import { REQUEST, SUCCESS, FAILURE } from "../../utils/reduxUtils";
import ItemActionTypes from "./item.types";
import * as itemActions from "./item.actions";
import ItemService from "./item.services";

function* getItems() {
  try {
    const response = yield call(ItemService.get);
    console.log({ response });
    // if (data) {
    //   yield put(itemActions.GetItems.success(data));
    // } else if (error) {
    //   yield put(itemActions.GetItems.failure(error));
    // }
  } catch (error) {
    console.log({ error });
    yield put(itemActions.GetItems.failure(error));
  }
}

export default function* itemSaga() {
  yield all([takeLatest(REQUEST(ItemActionTypes.GET_ITEMS), getItems)]);
}
