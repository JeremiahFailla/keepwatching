import React from "react";
import * as Styled from "./SearchContentStyles";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";

export const SearchContent = ({ content }) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const showContent = (item) => {
    dispatch({ type: "SET_SELECTED_CONTENT", content: item });
    navigate(`/content/${item.title.toLowerCase().replaceAll(" ", "-")}`);
  };
  return (
    <Styled.Container>
      {content.map((item) => {
        if (item.titleType === "movie" || item.titleType === "tvSeries") {
          return (
            <Styled.Card
              key={Math.random() * 10000}
              onClick={() => showContent(item)}
            >
              <Styled.Title>{item.title}</Styled.Title>
              <Styled.Image src={item.image.url} />
            </Styled.Card>
          );
        }
      })}
    </Styled.Container>
  );
};
