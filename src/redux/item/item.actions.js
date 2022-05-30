import ItemActionTypes from "./item.types";
import { REQUEST, SUCCESS, FAILURE } from "../../utils/reduxUtils";

export const GetItems = {
  request: () => ({
    type: REQUEST(ItemActionTypes.GET_ITEMS),
  }),
  success: (items, totalCount) => ({
    type: SUCCESS(ItemActionTypes.GET_ITEMS),
    payload: { items, totalCount },
  }),
  failure: (error) => ({
    type: FAILURE(ItemActionTypes.GET_ITEMS),
    payload: error,
  }),
};

export const ChangeFilter = {
  request: (filter) => ({
    type: REQUEST(ItemActionTypes.CHANGE_FILTER),
    payload: { filter },
  }),
  success: (filter) => ({
    type: SUCCESS(ItemActionTypes.CHANGE_FILTER),
    payload: { filter },
  }),
  failure: (error) => ({
    type: FAILURE(ItemActionTypes.CHANGE_FILTER),
    payload: error,
  }),
};
