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

export const AddItem = {
  request: (item) => ({
    type: REQUEST(ItemActionTypes.ADD_ITEM),
    payload: { item },
  }),
  success: (item) => ({
    type: SUCCESS(ItemActionTypes.ADD_ITEM),
    payload: { item },
  }),
  failure: (error) => ({
    type: FAILURE(ItemActionTypes.ADD_ITEM),
    payload: error,
  }),
};

export const DecreaseItem = {
  request: (item) => ({
    type: REQUEST(ItemActionTypes.DECREASE_ITEM),
    payload: { item },
  }),
  success: (item) => ({
    type: SUCCESS(ItemActionTypes.DECREASE_ITEM),
    payload: { item },
  }),
  failure: (error) => ({
    type: FAILURE(ItemActionTypes.DECREASE_ITEM),
    payload: error,
  }),
};
