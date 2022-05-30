import { REQUEST, SUCCESS, FAILURE } from "../../utils/reduxUtils";
import ItemActionTypes from "./item.types";

const InitialState = {
  items: [],
  totalItemCount: 0,
  filter: {
    page: 1,
    type: "mug",
    sortAndOrder: "price,asc",
    checkedBrands: [],
    checkedTags: [],
  },
  error: null,
  isLoading: false,
};

export default function itemReducer(state = InitialState, action = {}) {
  switch (action.type) {
    case REQUEST(ItemActionTypes.GET_ITEMS):
      return {
        ...state,
        error: null,
      };
    case SUCCESS(ItemActionTypes.GET_ITEMS):
      return {
        ...state,
        items: action.payload.items,
        totalItemCount: action.payload.totalCount,
        error: null,
      };
    case FAILURE(ItemActionTypes.GET_ITEMS):
      return {
        ...state,
        error: action.payload,
      };

    case REQUEST(ItemActionTypes.CHANGE_FILTER):
      return {
        ...state,
        error: null,
      };
    case SUCCESS(ItemActionTypes.CHANGE_FILTER):
      return {
        ...state,
        filter: {
          ...state.filter,
          ...action.payload.filter,
        },
        error: null,
      };
    case FAILURE(ItemActionTypes.CHANGE_FILTER):
      return {
        ...state,
        error: action.payload,
      };

    default:
      return state;
  }
}
