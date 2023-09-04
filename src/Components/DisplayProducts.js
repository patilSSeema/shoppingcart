import React, { useContext } from "react";
import "./DisplayProducts.css";
import CartContext from "../Context/Card/CartContext";
import Rating from "./Rating";
import ProductInfo from "./ProductInfo";
import { Button } from "react-bootstrap";
const DisplayProducts = ({ prod, onSelectedProduct }) => {
  const { addToCart, removeItem, cartItems } = useContext(CartContext);
  // console.log(cartItems);

  return (
    <div className="product-list">
      <div className="product">
        <ProductInfo id={prod.id}>
          <img src={prod.image} alt={prod.title} />
        </ProductInfo>
        <h6>{prod.title}</h6>
        <p>${prod.price}</p>
        <p>
          <Rating
            rate={prod.rating.rate}
            onClick={(i) => i + 0}
            style={{ cursor: "pointer" }}
          />
        </p>

        {/* {cartItems.some((p) => p.id === prod.id) ? (
          <Button
            variant="danger"
            className="add-to-cart-button"
            onClick={() => removeItem(prod.id)}
          >
            Remove From Cart
          </Button>
        ) : (
          <Button
            className="add-to-cart-button"
            onClick={() => addToCart(prod)}
          >
            Add to Cart
          </Button>
        )} */}
      </div>
    </div>
  );
};

export default DisplayProducts;
