import { useEffect, useState, useContext } from "react";

import "./Checkout.css";
import { Link, useNavigate } from "react-router-dom";
import CartContext from "../Context/Card/CartContext";
import PaymentCheckout from "./PaymentCheckout";
const Checkout = () => {
  const GlobalState = useContext(CartContext);
  const { cartItems } = useContext(CartContext);

  const navigate = useNavigate();
  const handleContinue = () => {
    navigate("/sucess");
  };

  return (
    <>
      <div className="main-div">
        <div className="summary-details">
          <p className="checkout-img">
            <img src={GlobalState.image} />
            <span>{GlobalState.productName}</span>
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

export default Checkout;
