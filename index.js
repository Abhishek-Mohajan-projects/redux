// constant define
const ADD_USER = "ADD_USER";
const INCREMENT = "INCREMENT";
const DECREMENT = "DECREMENT";

// state define

const initialState = {
  count: 0,
};

const initialUserState = {
  users: [{ name: "anisul" }],
};

// action

const incrementCount = () => {
  return {
    type: INCREMENT,
  };
};

const decrementCount = () => {
  return {
    type: DECREMENT,
  };
};

// payload
const addUser = () => {
  return {
    type: ADD_USER,
    payload: [{ name: "Sakil" }],
  };
};
