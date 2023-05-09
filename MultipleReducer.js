const { createStore, combineReducers } = require("redux");

// constants define
const GET_PRODUCTS = "GET_PRODUCTS ";
const ADD_PRODUCTS = "ADD_PRODUCTS";

const GET_CART_PRODUCTS = "GET_CART_PRODUCTS";
const ADD_CART_PRODUCTS = "ADD_CART_PRODUCTS";

// state
const initialProductState = {
  products: ["sugar", "salt"],
  numberofProducts: 2,
};

const initialCartState = {
  cart: ["sugar"],
  numberofProducts: 1,
};
// action
const getAllProducts = () => {
  return {
    type: GET_PRODUCTS,
  };
};
const addProducts = (products) => {
  return {
    type: ADD_PRODUCTS,
    payload: products,
  };
};

const getAllCart = () => {
  return {
    type: GET_CART_PRODUCTS,
  };
};
const addCartProducts = (products) => {
  return {
    type: ADD_CART_PRODUCTS,
    payload: products,
  };
};
// reducer
const ProductReducer = (state = initialProductState, action) => {
  switch (action.type) {
    case GET_PRODUCTS:
      return {
        ...state,
      };
    case ADD_PRODUCTS:
      return {
        ...state,
        products: [...state.products, action.payload],
        numberofProducts: state.numberofProducts + 1,
      };

    default:
      return state;
  }
};

const CartReducer = (state = initialCartState, action) => {
  switch (action.type) {
    case GET_CART_PRODUCTS:
      return {
        ...state,
      };
    case ADD_CART_PRODUCTS:
      return {
        ...state,
        cart: [...state.cart, action.payload],
        numberofProducts: state.numberofProducts + 1,
      };

    default:
      return state;
  }
};

// combine reducer
const rootReducer = combineReducers({
  ProductR: ProductReducer,
  CartTR: CartReducer,
});

// store
const store = createStore(rootReducer);
store.subscribe(() => {
  console.log(store.getState());
});

store.dispatch(getAllProducts());
store.dispatch(addProducts("pen"));

store.dispatch(getAllCart());
store.dispatch(addCartProducts("pencil"));
