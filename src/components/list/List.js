import React, { useState, useEffect } from "react";
import * as Styled from "./ListStyles";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import Slider from "../slider/Slider";

export const List = (props) => {
  const [content, setContent] = useState([]);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const showContent = (item) => {
    dispatch({ type: "SET_SELECTED_CONTENT", content: item });
    navigate(`/content/${item.title.toLowerCase().replaceAll(" ", "-")}`);
  };

  const viewMore = () => {
    navigate(`/more/${props.title.toLowerCase().replaceAll(" ", "-")}`);
  };

  useEffect(() => {
    fetch(
      `https://imdb8.p.rapidapi.com/title/find?q=${props.title
        .toLowerCase()
        .trim()}`,
      {
        method: "GET",
        headers: {
          "x-rapidapi-host": "imdb8.p.rapidapi.com",
          "x-rapidapi-key":
            "942152c789msh79c9fe544db88c0p17901ajsn54d89827f36f",
        },
      }
    )
      .then((response) => response.json())
      .then((data) => {
        console.log(data.results);
        setContent(data.results);
      })
      .catch((err) => {
        console.error(err);
      });
  }, []);

  return (
    <Styled.Container>
      <Styled.Title>{props.title}</Styled.Title>
      <Styled.More onClick={viewMore}>View More</Styled.More>
      <Slider showContent={showContent} content={content} />
    </Styled.Container>
  );
};
