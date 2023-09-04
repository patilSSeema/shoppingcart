import React, { useContext, useEffect, useState } from "react";
import ListGroup from "react-bootstrap/ListGroup";
import { AiOutlineShoppingCart, AiFillDelete } from "react-icons/ai";
import CartContext from "../Context/Card/CartContext";
import { Button, Col, Form, Image, Row } from "react-bootstrap";
import Rating from "./Rating";
import "./Cart.css";
import { Link } from "react-router-dom";
const Cart = () => {
  const GlobalState = useContext(CartContext);
  const { showHideCart, removeItem, cartItems, changeCartQty } =
    useContext(CartContext);
  const [total, setTotal] = useState();
  
  useEffect(() => {
    const calculatedTotal = cartItems.reduce((acc, curr) => {
      console.log("Item price:", curr.price);
      console.log("Item qty:", curr.qty);
      return acc + parseFloat(curr.price) * curr.qty;
    }, 0);
    console.log("Calculated total:", calculatedTotal);
    setTotal(calculatedTotal.toFixed(2));
  }, [cartItems, changeCartQty]);
  console.log(total);
  const handleData = () => {
    GlobalState.SetPrice(total);
    // cartItems.forEach((item) => removeItem(item.id));
  };

  return (
    <div className="home">
      <div className="productContainer">
        <ListGroup>
          {cartItems.map((prod) => (
            <ListGroup.Item key={prod.id}>
              <Row>
                <Col md={2}>
                  <Image src={prod.image} alt={prod.name} fluid rounded />
                </Col>
                <Col md={2}>
                  <span>{prod.title}</span>
                </Col>
                <Col md={2}>₹ {prod.price}</Col>
                <Col md={2}>
                  <Rating
                    rate={prod.rating.rate}
                    onClick={(i) => i + 0}
                    style={{ cursor: "pointer" }}
                  />
                </Col>
                <Col md={2}>
                  <Form.Control
                    as="select"
                    // value={prod.qty}
                    onChange={(e) => changeCartQty(prod.id, e.target.value)}
                  >
                    {[...Array(5).keys()].map((x) => (
                      <option key={x + 1}>{x + 1}</option>
                    ))}
                  </Form.Control>
                </Col>
                <Col md={2}>
                  <Button
                    type="button"
                    variant="light"
                    onClick={() => removeItem(prod.id)}
                  >
                    <AiFillDelete fontSize="20px" />
                  </Button>
                </Col>
              </Row>
            </ListGroup.Item>
          ))}
        </ListGroup>
      </div>
      <div className="filters summary">
        <span className="title">Subtotal ({cartItems.length}) items</span>
        <p>Discount :0.00</p>
        <p>Delivery Charges : free Delivery</p>
        <span style={{ fontWeight: 700, fontSize: 20 }}>Total: $ {total}</span>
        <Link to={cartItems.length > 0 ? "/checkoutCart" : "#"}>
          <Button
            type="button"
            disabled={cartItems.length === 0}
            onClick={handleData}
          >
            Proceed to Buy ({cartItems.length}) items
          </Button>
        </Link>
      </div>
    </div>
  );
};

export default Cart;
