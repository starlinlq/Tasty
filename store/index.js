import {
  RETRIEVE_CART_SUCCESS,
  ADD_TO_CART_SUCCESS,
  REMOVE_FROM_CART_SUCCESS,
  UPDATE_CART_ITEM_SUCCESS,
  STORE_PRODUCTS,
  CAPTURE_ORDER,
  REFRESH_CART,
} from "./actionTypes";
import { createStore, applyMiddleware, compose } from "redux";
import { createWrapper, HYDRATE } from "next-redux-wrapper";
import thunk from "redux-thunk";

const initialState = {
  categories: [],
  products: [],
  cart: null,
  checkout: {
    shippingOptions: [],
    checkoutTokenObject: {},
  },
  orderReceipt: {},
  captureOrder: {},
  errorMessage: "",
};

const productsStore = (state = initialState, action) => {
  switch (action.type) {
    case STORE_PRODUCTS: {
      return { ...state, products: action.payload };
    }
    case RETRIEVE_CART_SUCCESS: {
      return { ...state, cart: action.payload };
    }
    case ADD_TO_CART_SUCCESS: {
      return { ...state, cart: action.payload };
    }
    case REMOVE_FROM_CART_SUCCESS: {
      return { ...state, cart: action.payload };
    }
    case UPDATE_CART_ITEM_SUCCESS: {
      return { ...state, cart: action.payload };
    }
    case CAPTURE_ORDER: {
      return { ...state, captureOrder: action.payload };
    }
    case REFRESH_CART: {
      return { ...state, cart: action.payload };
    }

    default:
      return state;
  }
};

const devtools =
  process.browser && window.__REDUX_DEVTOOLS_EXTENSION__
    ? window
        .__REDUX_DEVTOOLS_EXTENSION__
        // { trace: true, traceLimit: 25 }
        ()
    : (f) => f;

const myStore = () => {
  return createStore(
    productsStore,
    initialState,
    compose(applyMiddleware(thunk), devtools)
  );
};

export const wrapper = createWrapper(myStore);
