import { createStore } from "redux";

const intialState = {
  user: null,
  userFirebaseData: {},
  selectedContent: {},
  content: {},
  reviews: [],
  watchedList: [],
  allReviews: [],
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
    case "SET_USER_INFO":
      return {
        ...state,
        user: {
          ...state.user,
          displayName: action.displayName,
          email: action.email,
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
    case "SET_STORED_CONTENT":
      const title = action.title;
      return {
        ...state,
        content: {
          ...state.content,
          [title]: action.content,
        },
      };
    case "SET_WATCHED_LIST_AND_REVIEWS":
      return {
        ...state,
        watchedList: [...action.watched],
        reviews: [...action.reviews],
      };
    case "SET_WATCHED_LIST":
      return {
        ...state,
        watchedList: [...state.watchedList, action.content],
      };
    case "SET_REVIEWS":
      return {
        ...state,
        reviews: [...state.reviews, action.review],
      };
    case "SET_ALL_REVIEWS":
      return {
        ...state,
        allReviews: [...action.reviews],
      };
    case "ADD_REVIEW_TO_ALL":
      return {
        ...state,
        allReviews: [...state.allReviews, action.review],
      };
    case "ADD_TO_BOTH_REVIEWS":
      return {
        ...state,
        allReviews: [...state.allReviews, action.review],
        reviews: [...state.reviews, action.review],
      };
    default:
      return state;
  }
};

const store = createStore(reducer);

export default store;
