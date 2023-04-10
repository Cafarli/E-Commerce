import { ACTION_TYPES } from "../action/actionTypes";

export const addCartAction = (id, title, price, photo) => {
  return {
    type: ACTION_TYPES.ADD_CART,
    products: { Id: id, Title: title, Price: price, Photo: photo },
  };
};
export const removeCartAction = (id) => {
  return {
    type: ACTION_TYPES.REMOVE_CART,
    products: { Id: id },
  };
};
export const removeAllCartAction = (id) => {
  return {
    type: ACTION_TYPES.REMOVE_ALL_CART,
    products: { Id: id },
  };
};

export const addWishlistAction = (id, title, price, photo) => {
  return {
    type: ACTION_TYPES.ADD_WISHLIST,
    favorities: { Id: id, Title: title, Price: price, Photo: photo },
  };
};
export const removeWishlistAction = (id) => {
  return {
    type: ACTION_TYPES.REMOVE_WISHLIST,
    favorities: { Id: id },
  };
};
export const removeAllWishlistAction = (id) => {
  return {
    type: ACTION_TYPES.REMOVE_ALL_WISHLIST,
    favorities: { Id: id },
  };
};
 