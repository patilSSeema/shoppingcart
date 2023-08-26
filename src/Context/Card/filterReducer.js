const filterReducer = (state, action) => {
  switch (action.type) {
    case "SORT_BY_PRICE":
      return { ...state, sort: action.payload };

    case "FILTER_BY_RATING":
      return { ...state, byRating: action.payload };

    case "FILTER_BY_SEARCH":
      return { ...state, searchQuery: action.payload };
    case "CLEAR_FILTER":
      return {
        byRating: 0,
        searchQuery: "",
      };
    case "SET_CATEGORY":
      return { ...state, selectedCategory: action.payload };
    case "CLEAR_FILTER":
      return {
        byRating: 0,
        searchQuery: "",
        selectedCategory: "",
      };
    default:
      return state;
  }
};

export default filterReducer;
