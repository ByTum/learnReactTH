import axios from "axios";
import { PRODUCTS_FETCH } from "./types";

export const productsFetch = () => {
  return (dispatch) => {
    axios.get("http://localhost:3001/products").then((res) => {
      dispatch({ type: PRODUCTS_FETCH, payload: res.data });
    }); // return is function by reduxThunk
  };
};

export const productsDelete = (id) => {
  return (dispatch) => {
    axios.delete("http://localhost:3001/products/" + id).then((res) => {
      axios.get("http://localhost:3001/products").then((res) => {
        dispatch({ type: PRODUCTS_FETCH, payload: res.data });
      });
    });
  };
};
