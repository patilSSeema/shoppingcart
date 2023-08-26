import React, { useContext } from "react";
import "./DisplayProducts.css";
import CartContext from "../Context/Card/CartContext";
import Rating from "./Rating";
const DisplayProducts = ({ prod }) => {
  const { addToCart, removeItem, cartItems } = useContext(CartContext);
  // console.log(cartItems);
  return (
    <div className="product-list">
      <div className="product">
        <img src={prod.image} alt={prod.title} />
        <h4>{prod.title}</h4>
        <p>${prod.price}</p>
        <p>
          <Rating
            rate={prod.rating.rate}
            onClick={(i) => i + 0}
            style={{ cursor: "pointer" }}
          />
        </p>
        {cartItems.some((p) => p.id === prod.id) ? (
          <button
            className="add-to-cart-button"
            onClick={() => removeItem(prod.id)}
          >
            Remove From Cart
          </button>
        ) : (
          <button
            className="add-to-cart-button"
            onClick={() => addToCart(prod)}
          >
            Add to Cart
          </button>
        )}
      </div>
    </div>
  );
};

export default DisplayProducts;
