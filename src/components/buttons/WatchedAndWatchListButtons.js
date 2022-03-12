import React, { useState } from "react";
import * as Styled from "../content/Styles";
import { db } from "../../firebase/firebase";
import { useSelector, useDispatch } from "react-redux";
import { doc, setDoc } from "firebase/firestore";

const WatchedAndWatchListButtons = ({ item }) => {
  const watchList = useSelector((state) => state.watchList);
  const entertainmentWatched = useSelector(
    (state) => state.entertainmentWatched
  );
  const user = useSelector((state) => state.user);
  const dispatch = useDispatch();

  const [onWatchList, setOnWatchList] = useState(
    watchList.some((i) => i.id === item.id)
  );
  const [watched, setWatched] = useState(
    entertainmentWatched.some((i) => i.id === item.id)
  );

  const watchedHandler = async () => {
    setWatched(true);

    const userRef = doc(db, "users", user?.uid);
    await setDoc(
      userRef,
      { watched: [item, ...entertainmentWatched] },
      { merge: true }
    );
    dispatch({ type: "SET_ENTERTAINMENT_WATCHED", entertainmentWatched: item });
  };

  const addToWatchList = async () => {
    setOnWatchList(true);

    const userRef = doc(db, "users", user?.uid);
    await setDoc(
      userRef,
      { watchList: [item, ...entertainmentWatched] },
      { merge: true }
    );
    dispatch({ type: "SET_WATCH_LIST", watchList: item });
  };

  const removeFromWatchList = async () => {
    setOnWatchList(false);

    const userRef = doc(db, "users", user?.uid);
    await setDoc(
      userRef,
      {
        watchList: watchList.filter((i) => i.id !== item.id),
      },
      { merge: true }
    );
    dispatch({ type: "REMOVE_FROM_WATCH_LIST", watchList: item });
  };

  return (
    <React.Fragment>
      {!onWatchList && (
        <Styled.AddToWatchListButton onClick={addToWatchList}>
          Add to Watch List
        </Styled.AddToWatchListButton>
      )}
      {onWatchList && (
        <Styled.RemoveFromWatchListButton onClick={removeFromWatchList}>
          Remove from Watch List
        </Styled.RemoveFromWatchListButton>
      )}
      {!watched && (
        <Styled.NotWatchedButton onClick={watchedHandler}>
          Watched?
        </Styled.NotWatchedButton>
      )}
      {watched && <Styled.WatchedButton>Watched</Styled.WatchedButton>}
    </React.Fragment>
  );
};

export default WatchedAndWatchListButtons;
