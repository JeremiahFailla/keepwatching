import React from "react";
import * as Styled from "./TabStyles";
import { useSelector, useDispatch } from "react-redux";
import { doc, setDoc } from "firebase/firestore";
import { db } from "../../firebase/firebase";
import { useNavigate } from "react-router-dom";

const WatchListTab = () => {
  const watchList = useSelector((state) => state.watchList);
  const user = useSelector((state) => state.user);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const removeFromWatchList = async (item) => {
    const newWatchList = watchList.filter((i) => i.id !== item.id);
    dispatch({
      type: "REMOVE_FROM_WATCH_LIST",
      watchList: newWatchList,
    });

    const userRef = doc(db, "users", user?.uid);
    await setDoc(
      userRef,
      {
        watchList: [...newWatchList],
      },
      { merge: true }
    );
  };

  const showContent = (item) => {
    dispatch({ type: "SET_SELECTED_CONTENT", content: item });
    navigate(`/content/${item.title.toLowerCase().replaceAll(" ", "-")}`);
  };

  return (
    <Styled.Tab>
      <Styled.Title>Watch List</Styled.Title>
      {watchList.length === 0 && (
        <Styled.ContentTitle>Nothing In Your Watch List</Styled.ContentTitle>
      )}
      <Styled.List>
        {watchList.map((item) => (
          <Styled.Content
            key={Math.random() * 10000}
            onClick={() => showContent(item)}
          >
            <Styled.Image src={item.image.url} />
            <Styled.Container>
              <Styled.ContentTitle>{item.title}</Styled.ContentTitle>
              <Styled.RemoveButton onClick={() => removeFromWatchList(item)}>
                Remove
              </Styled.RemoveButton>
            </Styled.Container>
          </Styled.Content>
        ))}
      </Styled.List>
    </Styled.Tab>
  );
};

export default WatchListTab;
