import {
  ADD_TO_CART,
  SHOW_HIDE_CART,
  REMOVE_ITEM,
  CHANGE_CART_QTY,
} from "../Types";
import React from "react";

const CartReducer = (state, action) => {
  switch (action.type) {
    case SHOW_HIDE_CART: {
      return {
        ...state,
        showCart: !state.showCart,
      };
    }
    case ADD_TO_CART: {
      const updatedCart = [...state.cartItems, { ...action.payload, qty: 1 }];
      localStorage.setItem("cart", JSON.stringify(updatedCart)); // Store in local storage
      return { ...state, cartItems: updatedCart };
      // return {
      //   ...state,
      //   cartItems: [...state.cartItems, { ...action.payload, qty: 1 }],
      // };
    }
    case REMOVE_ITEM: {
      const updatedCart = state.cartItems.filter(
        (item) => item.id !== action.payload
      );
      localStorage.setItem("cart", JSON.stringify(updatedCart)); // Update local storage
      return { ...state, cartItems: updatedCart };
      // return {
      //   ...state,
      //   cartItems: state.cartItems.filter((item) => item.id !== action.payload),
      // };
    }
    case CHANGE_CART_QTY:
      return {
        ...state,
        cart: state.cartItems.filter((c) =>
          c.id === action.payload.id ? (c.qty = action.payload.qty) : c.qty
        ),
      };

    default:
      return state;
  }
};

export default CartReducer;
