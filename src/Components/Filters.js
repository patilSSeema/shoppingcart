import React, { useContext, useState } from "react";
import { Button, ButtonGroup, Form } from "react-bootstrap";
import "./Filters.css";
import Rating from "./Rating";
import CartContext from "../Context/Card/CartContext";

const Filters = () => {
  const [rate, setRate] = useState(3);
  const {
    filterState: { byRating, sort },
    filterDispatch,
  } = useContext(CartContext);

  const handleCategoryChange = (category) => {
    console.log("Selected Category:", category);
    filterDispatch({ type: "SET_CATEGORY", payload: category });
  };
  return (
    <div className="filter-product">
      {/* <div className="category-filter">
        <h4> Filter By Category</h4>
        <button onClick={() => handleCategoryChange("")}>All</button>
        <button onClick={() => handleCategoryChange("men's clothing")}>
          Men
        </button>
        <button onClick={() => handleCategoryChange("women's clothing")}>
          Women
        </button>
        <button onClick={() => handleCategoryChange("electronics")}>
          Electronics
        </button>

        <button onClick={() => handleCategoryChange("jewelery")}>
          Jewelery
        </button>
      </div> */}
      

      <span>
        <Form.Check
          inline
          label="Low To High"
          name="group1"
          type="radio"
          id={`inline-1`}
          className="custom-radio"
          onChange={() =>
            filterDispatch({
              type: "SORT_BY_PRICE",
              payload: "lowToHigh",
            })
          }
          checked={sort === "lowToHigh" ? true : false}
        />
        <Form.Check
          inline
          label="High to Low"
          name="group1"
          type="radio"
          id={`inline-2`}
          className="custom-radio"
          onChange={() =>
            filterDispatch({
              type: "SORT_BY_PRICE",
              payload: "highToLow",
            })
          }
          checked={sort === "highToLow" ? true : false}
        />
       
      </span>

      <label style={{ paddingRight: 10 }}>Rating:</label>
      <span>
        <Rating
          rate={byRating}
          onClick={(i) =>
            filterDispatch({
              type: "FILTER_BY_RATING",
              payload: i + 1,
            })
          }
          style={{ cursor: "pointer" }}
        />
      </span>

      {/* <Button
        className="clear-filter"
        variant="light"
        onClick={() =>
          filterDispatch({
            type: "CLEAR_FILTERS",
          })
        }
      >
        Clear All Filters
      </Button> */}
    </div>
  );
};

export default Filters;
