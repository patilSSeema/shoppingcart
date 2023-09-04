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
import { BiUserCircle, BiLogOut } from "react-icons/bi";
import { Link, useNavigate } from "react-router-dom";
import CartContext from "../Context/Card/CartContext";
import "./Header.css";
import { auth } from "../firebase";
import { useEffect } from "react";
import { useState } from "react";
const Header = () => {
  const { cartItems, removeItem } = useContext(CartContext);
  const { filterDispatch } = useContext(CartContext);
  const [userName, setUserName] = useState("");
  const navigate = useNavigate();
  //signout
  const handleSignOut = async () => {
    try {
      await auth.signOut(); // Sign out the user
      navigate.push("/");
    } catch (error) {
      console.error("Error signing out:", error);
    }
  };
  useEffect(() => {
    auth.onAuthStateChanged((user) => {
      if (user) {
        setUserName(user.displayName);
        console.log(user.displayName);
      } else {
        setUserName("");
      }
      console.log(user);
    });
  });

  const handleCategoryChange = (category) => {
    console.log("Selected Category:", category);
    filterDispatch({ type: "SET_CATEGORY", payload: category });
  };
  return (
    <div>
      <Navbar expand="lg" className="nav-bar" variant="primary">
        <Container>
          <Navbar.Brand>
            <Link to="/">
              <img
                src="/img/logo.jpg"
                width="160"
                height="50"
                className="d-inline-block align-top"
                alt="logo"
              />
            </Link>
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="nav-items">
              <Nav.Link>
                <Link className="link" to="/products">
                  <p onClick={() => handleCategoryChange("")}>Product</p>
                </Link>
              </Nav.Link>
              &nbsp;&nbsp;&nbsp;
              <Nav.Link>
                <Link className="link" to="/products">
                  <p onClick={() => handleCategoryChange("men's clothing")}>
                    Men
                  </p>
                </Link>
              </Nav.Link>
             
              <Nav.Link>
                <Link className="link" to="/products">
                  <p onClick={() => handleCategoryChange("women's clothing")}>
                    Women
                  </p>
                </Link>
              </Nav.Link>
              
              <Nav.Link>
                <Link className="link" to="/products">
                  <p onClick={() => handleCategoryChange("electronics")}>
                    Electronics
                  </p>
                </Link>
              </Nav.Link>
              <Nav.Link>
                <Link className="link" to="/products">
                  <p onClick={() => handleCategoryChange("jewelery")}>
                    Jewelery
                  </p>
                </Link>
              </Nav.Link>
              <Nav.Link>
                <Link className="link" to="/search">
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
                </Link>
              </Nav.Link>
              <Nav.Link>
                <Dropdown>
                  <Dropdown.Toggle variant="primary">
                    <AiOutlineShoppingCart color="white" fontSize="25px" />
                    <Badge>{cartItems.length}</Badge>
                  </Dropdown.Toggle>

                  <Dropdown.Menu style={{ minWidth: 300 }}>
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
              </Nav.Link>
             
              <Nav.Link>
                {auth.currentUser ? (
                  <Dropdown>
                    <Dropdown.Toggle variant="info" id="dropdown-basic">
                      <BiUserCircle size={25} />
                      <span>Profile</span>
                    </Dropdown.Toggle>

                    <Dropdown.Menu>
                      <Dropdown.Item>{userName}</Dropdown.Item>
                      <Dropdown.Divider />
                      <Dropdown.Item>
                        <button className="signoutbtn" onClick={handleSignOut}>
                          <BiLogOut /> Sign out
                        </button>
                      </Dropdown.Item>
                    </Dropdown.Menu>
                  </Dropdown>
                ) : (
                  <Link to="/login">
                    <Button varient="primary">Login</Button>
                  </Link>
                )}
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
};

export default Header;
