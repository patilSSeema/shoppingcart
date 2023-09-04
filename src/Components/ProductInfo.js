import axios from "axios";
import { useContext, useEffect, useState } from "react";
import { AiFillStar } from "react-icons/ai";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import "./ProductInfo.css";
import CartContext from "../Context/Card/CartContext";
import { Link } from "react-router-dom";
function ProductInfo({ children, id }) {
  const { addToCart, removeItem, cartItems } = useContext(CartContext);
  const GlobalState = useContext(CartContext);
  const [show, setShow] = useState(false);
  const [content, setContent] = useState();
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  console.log(id);
  const fetchProductsid = async () => {
    try {
      const response = await axios.get(
        `https://fakestoreapi.com/products/${id}`
      );
      setContent(response.data);
    } catch (error) {
      console.error("Error fetching products:", error);
    }
  };
  console.log(content);
  useEffect(() => {
    fetchProductsid();
  }, []);
  const handleData = () => {
    GlobalState.SetProductName(content.title);
    GlobalState.SetPrice(content.price);
    GlobalState.SetImage(content.image);
  };
  const responsiveStyle = {
    width: "70%",
  };

  return (
    <>
      <button className="main-btn" onClick={handleShow}>
        {children}
      </button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>
            <h6>{content && content.title}</h6>
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div className="model-body">
            <div className="img-box">
              {content && content.image && <img src={content.image} />}
            </div>
            <p className="overview">{content && content.description}</p>
            <p>Price:${content && content.price}</p>
            <p>
              <span>
                <Button variant="success">
                  {content && content.rating.rate}
                  <AiFillStar color="yellow" size={12} />
                </Button>
              </span>
              <span style={{ color: "gray" }}>
                {content && content.rating.count} Ratings
              </span>
            </p>
          </div>
        </Modal.Body>
        <Modal.Footer>
          <Link to="/checkout">
            <Button variant="warning" className="buy-now" onClick={handleData}>
              Buy Now
            </Button>
          </Link>
          {cartItems.some((p) => p.id === id) ? (
            <button
              className="add-to-cart-button"
              onClick={() => removeItem(id)}
            >
              Remove From Cart
            </button>
          ) : (
            <button
              className="add-to-cart-button"
              onClick={() => addToCart(content)}
            >
              Add to Cart
            </button>
          )}
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default ProductInfo;
