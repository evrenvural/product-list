import { all, call, fork, put, takeLatest, select } from "redux-saga/effects";
import {
  REQUEST,
  SUCCESS,
  FAILURE,
  SERVICE_STATUSES,
} from "../../utils/reduxUtils";
import ItemActionTypes from "./item.types";
import * as itemActions from "./item.actions";
import ItemService from "./item.services";

function* getItems() {
  try {
    const filter = yield select((state) => state.item.filter);
    const response = yield call(ItemService.get, filter);

    if (response.status === SERVICE_STATUSES.ok) {
      yield put(
        itemActions.GetItems.success(
          response.data,
          Number(response.headers["x-total-count"])
        )
      );
    } else {
      yield put(itemActions.GetItems.failure("Service Error!"));
    }
  } catch (error) {
    console.log({ error });
    yield put(itemActions.GetItems.failure(error));
  }
}

function* changeFilter({ payload: { filter } }) {
  const newFilter = {
    page: 1,
  };
  console.log({ filter });
  if (filter.page) newFilter["page"] = filter.page;
  if (filter.type) newFilter["type"] = filter.type;
  if (filter.sortAndOrder) newFilter["sortAndOrder"] = filter.sortAndOrder;
  if (filter.checkedBrands) newFilter["checkedBrands"] = filter.checkedBrands;
  if (filter.checkedTags) newFilter["checkedTags"] = filter.checkedTags;

  yield put(itemActions.ChangeFilter.success(newFilter));
  yield fork(getItems);
}

export default function* itemSaga() {
  yield all([
    takeLatest(REQUEST(ItemActionTypes.GET_ITEMS), getItems),
    takeLatest(REQUEST(ItemActionTypes.CHANGE_FILTER), changeFilter),
  ]);
}
