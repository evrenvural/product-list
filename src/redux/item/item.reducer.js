import { REQUEST, SUCCESS, FAILURE } from "../../utils/reduxUtils";
import ItemActionTypes from "./item.types";

const InitialState = {
  item: [],
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
        recentlyPlayedSongs: action.payload,
        error: null,
      };
    case FAILURE(ItemActionTypes.GET_ITEMS):
      return {
        ...state,
        error: action.payload,
      };

    default:
      return state;
  }
}
