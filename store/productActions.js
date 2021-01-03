import { STORE_PRODUCTS } from "./actionTypes";
import commerce from "../commerce/commerce";

const setProducts = ({ product }) => {
  return { type: STORE_PRODUCTS, payLoad: product };
};

export const getProducts = () => (dispatch) => {
  commerce.products
    .list()
    .then((product) => dispatch(setProducts(product)))
    .catch((err) => console.log(err));
};
