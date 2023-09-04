import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { BiRightArrowAlt } from "react-icons/bi";
import { FiTruck } from "react-icons/fi";
import { BsCurrencyRupee } from "react-icons/bs";
import { LiaPercentageSolid } from "react-icons/lia";
import { RiCustomerServiceLine } from "react-icons/ri";
import CartContext from "../Context/Card/CartContext";
import "./Index.css";

const Index = () => {
  const { filterDispatch } = useContext(CartContext);

  const handleCategoryChange = (category) => {
    console.log("Selected Category:", category);
    filterDispatch({ type: "SET_CATEGORY", payload: category });
  };
  return (
    <div>
      <div className="top-banner">
        <div className="container">
          <div className="details">
            <h2>The Best Trending Womenwere</h2>
            <Link
              to="/products"
              onClick={() => handleCategoryChange("women's clothing")}
              className="link"
            >
              Shop Now <BiRightArrowAlt />
            </Link>
          </div>
          <div className="img-box">
            <img src="./img/Women.jpg" alt="W-banner" />
          </div>
        </div>
      </div>
      <div className="product-cat">
        <div className="container">
          <div className="box">
            <div className="image-container">
              <img src="./img/Men.jpg" alt="MF" />
              <Link to="/products">
                <div
                  class="overlay-text"
                  onClick={() => handleCategoryChange("men's clothing")}
                >
                  MENSWERE
                </div>
              </Link>
            </div>
          </div>
          <div className="box">
            <div className="image-container">
              <img src="./img/ladies.jpg" alt="MF" />
              <Link to="/products">
                <div
                  class="overlay-text"
                  onClick={() => handleCategoryChange("women's clothing")}
                >
                  WOMENWERE
                </div>
              </Link>
            </div>
          </div>

          <div className="box">
            <div className="image-container">
              <img src="./img/electronics.jpg" alt="MF" />
              <Link to="/products">
                <div
                  class="overlay-text"
                  onClick={() => handleCategoryChange("electronics")}
                >
                  Electronics
                </div>
              </Link>
            </div>
          </div>
          <div className="box">
            <div className="image-container">
              <img src="./img/Jewellry.webp" alt="MF" />
              <Link to="/products">
                <div
                  class="overlay-text"
                  onClick={() => handleCategoryChange("jewelery")}
                >
                  Jewellry
                </div>
              </Link>
            </div>
          </div>
        </div>
      </div>
      <div className="about">
        <div className="container">
          <div className="box">
            <div className="icon">
              <FiTruck />
            </div>
            <div className="details">
              <h3>Free Shipping</h3>
            </div>
          </div>
          <div className="box">
            <div className="icon">
              <BsCurrencyRupee />
            </div>
            <div className="details">
              <h3>Return & Refund</h3>
              <p>Upto 1000</p>
            </div>
          </div>
          <div className="box">
            <div className="icon">
              <LiaPercentageSolid />
            </div>
            <div className="details">
              <h3>Member Discount</h3>
              <p>On every Order</p>
            </div>
          </div>
          <div className="box">
            <div className="icon">
              <RiCustomerServiceLine />
            </div>
            <div className="details">
              <h3>Customer Support</h3>
              <p>24 * 7 Support</p>
            </div>
        </div>
          </div>
      </div>
    </div>
  );
};

export default Index;
