import { REQUEST, SUCCESS, FAILURE } from "../../utils/reduxUtils";
import ItemActionTypes from "./item.types";
import _ from "lodash";

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
  selectedItems: [],
  selectedTotalPrice: 0,
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

    case REQUEST(ItemActionTypes.ADD_ITEM):
      return {
        ...state,
        error: null,
      };
    case SUCCESS(ItemActionTypes.ADD_ITEM):
      const newSelectedItems = [...state.selectedItems];
      const item = _.find(
        state.selectedItems,
        (item) => item.data.name === action.payload.item.name
      );
      if (item) {
        item.count += 1;
        state.selectedTotalPrice += item.data.price * item.count;
      } else {
        newSelectedItems.push({
          data: action.payload.item,
          count: 1,
        });
        state.selectedTotalPrice += action.payload.item.price;
      }
      return {
        ...state,
        selectedItems: newSelectedItems,
        error: null,
      };
    case FAILURE(ItemActionTypes.ADD_ITEM):
      return {
        ...state,
        error: action.payload,
      };

    case REQUEST(ItemActionTypes.DECREASE_ITEM):
      return {
        ...state,
        error: null,
      };
    case SUCCESS(ItemActionTypes.DECREASE_ITEM):
      let newItems = [...state.selectedItems];
      const selectedItem = _.find(
        state.selectedItems,
        (item) => item.data.name === action.payload.item.name
      );

      if (selectedItem) {
        selectedItem.count--;
        state.selectedTotalPrice -= action.payload.item.price;
        if (selectedItem.count <= 0) {
          newItems = _.remove(
            state.selectedItems,
            ({ data }) => data.name !== selectedItem.data.name
          );
        }
      }
      return {
        ...state,
        selectedItems: newItems,
        error: null,
      };
    case FAILURE(ItemActionTypes.DECREASE_ITEM):
      return {
        ...state,
        error: action.payload,
      };

    default:
      return state;
  }
}
