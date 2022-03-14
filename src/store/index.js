import { createStore } from "redux";

const intialState = {
  user: null,
  userFirebaseData: {},
  selectedContent: {},
  content: {},
  watchList: [],
  entertainmentWatched: [],
  reviews: [],
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
    case "SET_WATCH_LIST_AND_REVIEWS_AND_ENTERTAINMENT_WATCHED":
      return {
        ...state,
        watchedList: [...action.watchList],
        reviews: [...action.reviews],
        entertainmentWatched: [...action.entertainmentWatched],
      };
    case "REMOVE_REVIEW":
      return {
        ...state,
        reviews: [...action.newUserReviews],
        allReviews: [...action.newAllReviews],
      };
    case "SET_WATCH_LIST":
      return {
        ...state,
        watchList: [action.watchList, ...state.watchList],
      };
    case "REMOVE_FROM_WATCH_LIST":
      const newList = state.watchList.filter(
        (item) => action.watchList.id !== item.id
      );
      return {
        ...state,
        watchList: [...newList],
      };
    case "SET_ENTERTAINMENT_WATCHED":
      return {
        ...state,
        entertainmentWatched: [
          action.entertainmentWatched,
          ...state.entertainmentWatched,
        ],
      };
    case "SET_REVIEWS":
      return {
        ...state,
        reviews: [...state.reviews, action.review],
      };
    case "SET_ALL_REVIEWS":
      const reviews = [];
      action.querySnapshot.forEach((doc) => {
        const data = { ...doc.data(), docId: doc.id };
        reviews.push(data);
      });
      const userReviews = reviews.filter(
        (review) => review.userId === state.user.uid
      );
      return {
        ...state,
        allReviews: [...reviews],
        reviews: [...userReviews],
      };
    case "ADD_REVIEW_TO_ALL":
      return {
        ...state,
        allReviews: [...state.allReviews, action.review],
      };
    case "ADD_TO_BOTH_REVIEWS":
      return {
        ...state,
        allReviews: [action.review, ...state.allReviews],
        reviews: [action.review, ...state.reviews],
      };
    default:
      return state;
  }
};

const store = createStore(reducer);

export default store;
