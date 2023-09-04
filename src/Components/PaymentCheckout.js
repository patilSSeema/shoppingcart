import React from "react";
import { useContext } from "react";
import StripeCheckout from "react-stripe-checkout";
import CartContext from "../Context/Card/CartContext";
import { useNavigate } from "react-router-dom";
import "./Checkout.css";
const PaymentCheckout = () => {
  const navgate = useNavigate();
  const { cartItems, removeItem } = useContext(CartContext);
  const GlobalState = useContext(CartContext);
  const onToken = (token) => {
    console.log(token);
    cartItems.forEach((item) => removeItem(item.id));
    navgate("/success");
  };

  return (
    <div>
      <StripeCheckout
        token={onToken}
        name="Shopping App"
        image="https://picsum.photos/id/237/200/300"
        email="info@vidhub.co"
        currency="USD"
        amount={GlobalState.price * 100}
        stripeKey="pk_test_51NlX9SSD8Ov2RNJa2Ov0XSbaiC7tEfvootO9UR0mFx5DdWZc9U2NCYgKKlJGktc4WqKuGRd0qxqz7pGgzTR7buRG00hPTQ6ZT8"
      />
    </div>
  );
};

export default PaymentCheckout;
