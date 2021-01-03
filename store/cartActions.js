import { ADD_TO_CART_SUCCESS } from "./actionTypes";

const AddProductToCart = (data) => {
  return { type: ADD_TO_CART_SUCCESS, payload: data.cart };
};

export const addToCart = (id) => async (dispatch, getState) => {
  const { cart } = getState();

  const url = new URL(`https://api.chec.io/v1/carts/${cart.id}`);
  let headers = {
    "X-Authorization": process.env.customKey,
    "Content-Type": "application/json",
    Accept: "application/json",
  };
  let body = {
    id,
    quantity: 1,
  };

  const cartData = await fetch(url, {
    method: "POST",
    headers,
    body: JSON.stringify(body),
  })
    .then((res) => res.json())
    .then((json) => json);
  dispatch(AddProductToCart(cartData));
};
