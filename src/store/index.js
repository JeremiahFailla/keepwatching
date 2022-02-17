import { createStore } from "redux";

const intialState = {
  user: null,
};

const reducer = (state = intialState, action) => {
  switch (action.type) {
    case "SET_USER":
      return {
        ...state,
        user: action.user,
      };
    case "SET_USER_DISPLAYNAME":
      return {
        ...state,
        user: {
          ...state.user,
          displayName: action.displayName,
        },
      };
    default:
      return state;
  }
};

const store = createStore(reducer);

export default store;
