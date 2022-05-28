import { all, call, put, takeLatest } from "redux-saga/effects";
import { REQUEST, SUCCESS, FAILURE } from "../../utils/reduxUtils";
import ItemActionTypes from "./item.types";
import * as itemActions from "./item.actions";

function* getItems() {
  try {
    // const {
    //   data: { data, error }
    // } = yield call(PlayedSongHistoryService.getRecentlyPlayed, userId)
    // if (data) {
    //   yield put(homeActions.GetRecentlyPlayedSongs.success(data))
    // } else if (error) {
    //   yield put(homeActions.GetRecentlyPlayedSongs.failure(error))
    // }
  } catch (error) {
    // console.log({ error })
    // yield put(homeActions.GetRecentlyPlayedSongs.failure(error))
  }
}

export default function* itemSaga() {
  yield all([takeLatest(REQUEST(ItemActionTypes.GET_ITEMS), getItems)]);
}
