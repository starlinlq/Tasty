import { STORE_PRODUCTS, ADD_TO_CART_SUCCESS } from "./actionTypes";
import commerce from "../commerce/commerce";
import axios from "axios";

const setProducts = ({ product }) => {
  return { type: STORE_PRODUCTS, payLoad: product };
};

export const getProducts = () => (dispatch) => {
  commerce.products
    .list()
    .then((product) => dispatch(setProducts(product)))
    .catch((err) => console.log(err));
};
