import React from "react";
import { MdDoneOutline } from "react-icons/md";
import "./Checkout.css";
import { useState } from "react";
import { useEffect } from "react";
import { Link } from "react-router-dom";
const SucessPage = () => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Simulate loading time with a setTimeout
    const loadingTimer = setTimeout(() => {
      setIsLoading(false);
    }, 3000);

    return () => {
      clearTimeout(loadingTimer);
    };
  }, []);
  return (
    <>
      {" "}
      {isLoading ? (
        <>
          <div className="submitsCSS">
            <div className="loader"></div>
          </div>
        </>
      ) : (
        <div className="success-style">
          <MdDoneOutline color="green" />
          <span> Order placed, thank you!</span>
          <p>Conformation will be sent to your email.</p>
          <Link to="/">
            <h5>Click here To continue Shopping...</h5>
          </Link>
        </div>
      )}
    </>
  );
};

export default SucessPage;
