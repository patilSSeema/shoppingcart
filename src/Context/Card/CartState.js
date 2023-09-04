import React, { useEffect, useReducer, useState } from "react";
import CartContext from "../Card/CartContext";

import {
  ADD_TO_CART,
  SHOW_HIDE_CART,
  REMOVE_ITEM,
  CHANGE_CART_QTY,
} from "../Types";
import CartReducer from "./CartReducer";
import filterReducer from "./filterReducer";
const CartState = ({ children }) => {
  const initialState = {
    showCart: false,
    cartItems: [],
  };

  const [state, dispatch] = useReducer(CartReducer, initialState);
  const [productName, setProductName] = useState("Movie");
  const [price, setPrice] = useState(0);
  const [image, setImage] = useState(); 
   const [orderProduct, setOrderProduct] = useState([]);

  const addToCart = (item, qty) => {
    dispatch({
      type: ADD_TO_CART,
      payload: item,
      // payload: {
      //   item: item,
      //   qty: qty,
      // },
    });
  };
  const showHideCart = () => {
    dispatch({ type: SHOW_HIDE_CART });
  };
  const removeItem = (id) => {
    dispatch({ type: REMOVE_ITEM, payload: id });
  };
  function SetProductName(title) {
    setProductName(title);
  }
  function SetPrice(TicketPrice) {
    setPrice(TicketPrice);
  }
  function SetImage(image) {
    setImage(image);
  }
  function SetOrderProduct() {
    setOrderProduct();
  }
  const changeCartQty = (id, qty) => {
    dispatch({
      type: CHANGE_CART_QTY,
      payload: {
        id: id,
        qty: qty,
      },
    });
  };

  // const calculateTotal = () => {
  //   return state.cartItems.reduce((total, item) => {
  //     return total + item.price * item.qty;
  //   }, 0);
  // };

  const [filterState, filterDispatch] = useReducer(filterReducer, {
    byRating: 0,
    searchQuery: "",
    selectedCategory: "",
  });

  return (
    <CartContext.Provider
      value={{
        // showCart: state.showCart,
        cartItems: JSON.parse(localStorage.getItem("cart")) || [],
        addToCart,
        showHideCart,
        removeItem,
        changeCartQty,
        filterState,
        filterDispatch,
        SetProductName,
        productName,
        SetPrice,
        price,
        SetImage,
        image,
        SetOrderProduct
      }}
    >
      {children}
    </CartContext.Provider>
  );
};

export default CartState;
