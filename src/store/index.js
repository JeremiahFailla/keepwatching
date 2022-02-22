import { createStore } from "redux";

const intialState = {
  user: null,
  userFirebaseData: {},
  selectedContent: {},
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
    case "SET_USER_FIREBASE_DATA":
      return {
        ...state,
        userFirebaseData: action.data,
      };
    case "SET_SELECTED_CONTENT":
      return {
        ...state,
        selectedContent: action.content,
      };
    default:
      return state;
  }
};

const store = createStore(reducer);

export default store;
