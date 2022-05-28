import ItemActionTypes from "./item.types";
import { REQUEST, SUCCESS, FAILURE } from "../../utils/reduxUtils";

export const GetItems = {
  request: () => ({
    type: REQUEST(ItemActionTypes.GET_ITEMS),
  }),
  success: (items) => ({
    type: SUCCESS(ItemActionTypes.GET_ITEMS),
    payload: items,
  }),
  failure: (error) => ({
    type: FAILURE(ItemActionTypes.GET_ITEMS),
    payload: error,
  }),
};
