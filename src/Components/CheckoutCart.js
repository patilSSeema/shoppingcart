import { useEffect, useState, useContext } from "react";

import "./Checkout.css";
import { Link, useNavigate } from "react-router-dom";
import CartContext from "../Context/Card/CartContext";
import PaymentCheckout from "./PaymentCheckout";
import { Form } from "react-bootstrap";
const CheckoutCart = () => {
  const GlobalState = useContext(CartContext);
  const { cartItems, removeItem } = useContext(CartContext);
  const [selectedPaymentMethod, setSelectedPaymentMethod] = useState("");
  const navigate = useNavigate();
  const handleContinue = () => {
    navigate("/success");
    cartItems.forEach((item) => removeItem(item.id));
  };

  return (
    <>
      <div className="main-div">
        <div className="summary-details">
          <p className="checkout-img">
            {cartItems.map((prod) => {
              return (
                <>
                  <p>
                    <img src={prod.image} />
                    <span>{prod.title}</span>
                  </p>
                </>
              );
            })}
          </p>
        </div>
        <hr />
        <div className="payment-div">
          <div>Amount Payable :- $ {GlobalState.price}</div>
          <h5> Select Payment Method</h5>
          <p>
            <button onClick={handleContinue}>Cash on Delivery</button>
          </p>
          <PaymentCheckout />
        </div>
      </div>
    </>
  );
};

export default CheckoutCart;
