import axios from "axios";
import React, { createContext, useContext, useReducer } from "react";

export const countContext = createContext();
export const useCount = () => useContext(countContext);

let INIT_STATE = {
  products: [],
  counter: 0,
};

function reducer(state = INIT_STATE, action) {
  switch (action.type) {
    case "GET_PRODUCT":
      return { ...state, products: action.payload };

    case "COUNTER":
      return { ...state, counter: action.payload };
    default:
      return state;
  }
}

const CountContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, INIT_STATE);

  const API = "https://jsonplaceholder.typicode.com/posts";

  const getProducts = async () => {
    let { data } = await axios.get(API);
    dispatch({
      type: "GET_PRODUCT",
      payload: data,
    });
  };

  const getPlus = () => {
    let res = state.counter + 1;
    dispatch({
      type: "COUNTER",
      payload: res,
    });
  };

  let values = {
    getProducts,
    products: state.products,
    getPlus,
    counter: state.counter,
  };

  return (
    <countContext.Provider value={values}>{children}</countContext.Provider>
  );
};

export default CountContextProvider;
