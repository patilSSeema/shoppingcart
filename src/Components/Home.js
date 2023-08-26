import React, { useState, useEffect, useContext } from "react";
import axios from "axios";
import DisplayProducts from "./DisplayProducts";
import "./Home.css";
import Filters from "./Filters";
import CartContext from "../Context/Card/CartContext";

const Home = () => {
  const [products, setProducts] = useState([]);
const {
  filterState: { selectedCategory },
} = useContext(CartContext);
  const {
    filterState: { byRating, sort, searchQuery },
  } = useContext(CartContext);
  // const fetchProducts = async () => {
  //   try {
  //     const response = await axios.get("https://fakestoreapi.com/products");
  //     setProducts(response.data);
  //   } catch (error) {
  //     console.error("Error fetching products:", error);
  //   }
  // };

  const fetchProducts = async () => {
    try {
      let url = "https://fakestoreapi.com/products";

      if (selectedCategory) {
        url += `?category=${selectedCategory}`;
      }
      console.log(url);
      const response = await axios.get(url);
      setProducts(response.data);
    } catch (error) {
      console.error("Error fetching products:", error);
    }
  };

  console.log(products);
  useEffect(() => {
    fetchProducts();
  }, []);

  const transformProducts = () => {
    let sortedProducts = products;

    if (sort) {
      sortedProducts = sortedProducts.sort((a, b) =>
        sort === "lowToHigh" ? a.price - b.price : b.price - a.price
      );
    }

    if (byRating) {
      sortedProducts = sortedProducts.filter(
        (prod) => prod.rating.rate >= byRating
      );
    }

    if (searchQuery) {
      sortedProducts = sortedProducts.filter((prod) =>
        prod.title.toLowerCase().includes(searchQuery)
      );
    }

    if (selectedCategory) {
      sortedProducts = sortedProducts.filter(
        (prod) => prod.category === selectedCategory
      );
    }

    return sortedProducts;
  };

  return (
    <div className="home">
      <Filters />
      <div className="productContainer">
        {transformProducts().map((prod) => (
          <DisplayProducts prod={prod} key={prod.id} />
        ))}
      </div>
    </div>
  );
};

export default Home;
