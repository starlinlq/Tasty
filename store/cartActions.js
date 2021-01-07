import commerce from "../commerce/commerce";
import {
  ADD_TO_CART_SUCCESS,
  REMOVE_FROM_CART_SUCCESS,
  UPDATE_CART_ITEM_SUCCESS,
  CAPTURE_ORDER,
  REFRESH_CART,
} from "./actionTypes";

let headers = {
  "X-Authorization": process.env.customKey,
  "Content-Type": "application/json",
  Accept: "application/json",
};

const AddProductToCart = (data) => {
  return { type: ADD_TO_CART_SUCCESS, payload: data.cart };
};

const emptyCart = (data) => {
  return { type: REMOVE_FROM_CART_SUCCESS, payload: data.cart };
};

const updateToCart = (data) => {
  return { type: UPDATE_CART_ITEM_SUCCESS, payload: data.cart };
};

export const updateCart = (id, quantity) => async (dispatch, useState) => {
  const { cart } = useState();
  const url = new URL(`https://api.chec.io/v1/carts/${cart.id}/items/${id}`);
  let body = { quantity };

  const res = await fetch(url, {
    method: "PUT",
    headers,
    body: JSON.stringify(body),
  })
    .then((res) => res.json())
    .then((cart) => cart);

  dispatch(updateToCart(res));
};

export const removeCart = () => async (dispatch, useState) => {
  const { cart } = useState();
  const url = new URL(`https://api.chec.io/v1/carts/${cart.id}/items`);
  fetch(url, { method: "DELETE", headers })
    .then((res) => res.json())
    .then((cart) => dispatch(emptyCart(cart)));
};

export const addToCart = (id) => async (dispatch, getState) => {
  const { cart } = getState();

  const url = new URL(`https://api.chec.io/v1/carts/${cart.id}`);

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

const refreshCart = () => async (dispatch) => {
  try {
    const newCart = await commerce.cart.refresh();
    dispatch({ type: REFRESH_CART, payload: newCart });
  } catch (error) {
    console.log(error);
  }
};

export const handleCaptureCheckout = (checkoutTokenId, newOrder) => async (
  dispatch
) => {
  try {
    const incomingOrder = await commerce.checkout.capture(
      checkoutTokenId,
      newOrder
    );
    console.log(incomingOrder);
    refreshCart();
    dispatch({ type: CAPTURE_ORDER, payload: incomingOrder });
  } catch (error) {
    console.log(error);
  }
};
