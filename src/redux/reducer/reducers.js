import { ACTION_TYPES } from "../action/actionTypes";
import { combineReducers } from "redux";

const initialState = {
  products: [{ Id: "", Title: "", Price: "", Photo: "" }],
  favorities: [{ Id: "", Title: "", Price: "", Photo: "" }],
};

export function Reducers(state = initialState, action) {
  switch (action.type) {
    case ACTION_TYPES.ADD_CART:
      const findInCart = state.products.find(
        (item) => item.Id === action.products.Id
      );
      return findInCart !== undefined
        ? state
        : {
            ...state,
            products: [...state.products, action.products],
          };
    case ACTION_TYPES.REMOVE_CART:
      return {
        ...state,
        products: [
          ...state.products.filter((item) => item.Id !== action.products.Id),
        ],
      };
    case ACTION_TYPES.REMOVE_ALL_CART:
      return {
        ...state,
        products: [
          ...state.products.filter((item) => item.Id === action.products.Id),
        ],
      };
      // wishlist
    case ACTION_TYPES.ADD_WISHLIST:
      const findInWsihlist = state.favorities.find(
        (item) => item.Id === action.favorities.Id
      );
      return findInWsihlist !== undefined
        ? state
        : {
            ...state,
            favorities: [...state.favorities, action.favorities],
          };
    case ACTION_TYPES.REMOVE_WISHLIST:
      return {
        ...state,
        favorities: [
          ...state.favorities.filter((item) => item.Id !== action.favorities.Id),
        ],
      };
    case ACTION_TYPES.REMOVE_ALL_WISHLIST:
      return {
        ...state,
        favorities: [
          ...state.favorities.filter((item) => item.Id === action.favorities.Id),
        ],
      };
    default:
      return state;
  }
}

export const reducers = combineReducers({
  add: Reducers,
});
