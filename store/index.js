import {
  RETRIEVE_CART_SUCCESS,
  ADD_TO_CART_SUCCESS,
  REMOVE_FROM_CART_SUCCESS,
  UPDATE_CART_ITEM_SUCCESS,
  STORE_PRODUCTS,
  CAPTURE_ORDER,
  REFRESH_CART,
  ORDER_ERROR,
  PROCESSING_ORDER,
  RESET,
  THEME_SWITCH,
} from "./actionTypes";
import { createStore, applyMiddleware, compose } from "redux";
import { createWrapper } from "next-redux-wrapper";
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
  captureOrder: null,
  errorMessage: "",
  orderError: false,
  processingOrder: false,
  theme: true,
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
    case ORDER_ERROR: {
      return { ...state, orderError: true };
    }
    case REFRESH_CART: {
      return { ...state, cart: action.payload };
    }
    case PROCESSING_ORDER: {
      return { ...state, processingOrder: true };
    }
    case RESET: {
      return {
        ...state,
        processingOrder: false,
        orderError: false,
        captureOrder: null,
      };
    }
    case THEME_SWITCH: {
      return { ...state, theme: action.payload };
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
