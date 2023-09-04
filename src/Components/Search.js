import React from "react";
import { useContext } from "react";
import axios from "axios";
import DisplayProducts from "./DisplayProducts";
import "./Home.css";

import CartContext from "../Context/Card/CartContext";
import { useEffect } from "react";
import { useState } from "react";
const Search = () => {
  const [products, setProducts] = useState([]);
  const {
    filterState: { searchQuery },
  } = useContext(CartContext);
  const fetchProducts = async () => {
    try {
      const response = await axios.get("https://fakestoreapi.com/products");
      setProducts(response.data);
    } catch (error) {
      console.error("Error fetching products:", error);
    }
  };
  useEffect(() => {
    fetchProducts();
  }, []);

  const transformProducts = () => {
    let sortedProducts = products;

    if (searchQuery) {
      sortedProducts = sortedProducts.filter((prod) =>
        prod.title.toLowerCase().includes(searchQuery)
      );
    }

    return sortedProducts;
  };

  return (
    <>
      <div className="home">
        <div className="productContainer">
          {transformProducts().map((prod) => (
            <DisplayProducts prod={prod} key={prod.id} />
          ))}
        </div>
      </div>
    </>
  );
};

export default Search;
