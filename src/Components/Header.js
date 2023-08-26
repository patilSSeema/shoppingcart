import {
  Badge,
  Button,
  Container,
  Dropdown,
  Form,
  Nav,
  Navbar,
} from "react-bootstrap";
import React, { useContext } from "react";
import { AiOutlineShoppingCart, AiFillDelete } from "react-icons/ai";
import { Link } from "react-router-dom";
import CartContext from "../Context/Card/CartContext";
import "./Header.css";
const Header = () => {
  const { cartItems, removeItem } = useContext(CartContext);
  const { filterDispatch } = useContext(CartContext);
  return (
    <div>
      <Navbar expand="lg" bg="dark" variant="dark">
        <Container>
          <Navbar.Brand>
            <Link to="/">
              <img
                src="/img/logoShoping1.png"
                width="160"
                height="50"
                className="d-inline-block align-top"
                alt="logo"
              />
            </Link>
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav>
              <Nav.Link to="/">Mens</Nav.Link>
              <Nav.Link href="#link">Women</Nav.Link>
              <Nav.Link href="#link">Kids</Nav.Link>
              <Nav.Link href="#link">Wishlist</Nav.Link>
              <Form className="d-flex">
                <Form.Control
                  type="search"
                  placeholder="Search"
                  className="me-2"
                  aria-label="Search"
                  onChange={(e) => {
                    filterDispatch({
                      type: "FILTER_BY_SEARCH",
                      payload: e.target.value,
                    });
                  }}
                />
                <Button variant="success">Search</Button>
              </Form>
              <span className="mx-2"></span>
              <span className="mx-2"></span>
              <Dropdown >
                <Dropdown.Toggle variant="primary">
                  <AiOutlineShoppingCart color="white" fontSize="25px" />
                  <Badge>{cartItems.length}</Badge>
                </Dropdown.Toggle>

                <Dropdown.Menu style={{ minWidth: 370 }}>
                  {cartItems.length > 0 ? (
                    <>
                      {cartItems.map((prod) => (
                        <span className="cartitem" key={prod.id}>
                          <img
                            src={prod.image}
                            className="cartItemImg"
                            alt={prod.title}
                          />
                          <div className="cartItemDetail">
                            <span>{prod.title}</span>
                            <span>${prod.price}</span>
                          </div>
                          <AiFillDelete
                            fontSize="20px"
                            style={{ cursor: "pointer" }}
                            onClick={() => removeItem(prod.id)}
                          />
                        </span>
                      ))}
                      <Link to="/cart">
                        <Button style={{ width: "95%", margin: "0 10px" }}>
                          Go To Cart
                        </Button>
                      </Link>
                    </>
                  ) : (
                    <span style={{ padding: "10px" }}>cart is empty</span>
                  )}
                </Dropdown.Menu>
              </Dropdown>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
};

export default Header;
