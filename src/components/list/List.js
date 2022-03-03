import React, { useState, useEffect } from "react";
import * as Styled from "./ListStyles";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import Slider from "../slider/Slider";
import Spinner from "../spinner/Spinner";

export const List = (props) => {
  const [content, setContent] = useState([]);
  const [loading, setLoading] = useState(true);
  const loadedContent = useSelector((state) => state.content[props.title]);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const showContent = (item) => {
    dispatch({ type: "SET_SELECTED_CONTENT", content: item });
    navigate(`/content/${item.title.toLowerCase().replaceAll(" ", "-")}`);
  };

  const viewMore = () => {
    navigate(`/more/${props.title.toLowerCase().replaceAll(" ", "-")}`);
  };

  const setStoredContent = () => {
    dispatch({
      type: "SET_STORED_CONTENT",
      title: props.title,
      content: content,
    });
  };

  useEffect(() => {
    if (loadedContent?.length > 0) {
      setContent(loadedContent);
      setLoading(false);
      return;
    }
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
        setContent(data.results);
        setLoading(false);
      })
      .catch((err) => {
        console.error(err);
      });
  }, []);

  useEffect(() => {
    if (content.length > 0 && !loadedContent) {
      setStoredContent();
    }
  }, [content]);

  return (
    <Styled.Container>
      {!loading && (
        <React.Fragment>
          <Styled.Title>{props.title}</Styled.Title>
          <Styled.More onClick={viewMore}>View More</Styled.More>
          <Slider showContent={showContent} content={content} />
        </React.Fragment>
      )}
      {loading && <Spinner style={{ margin: "0 auto" }} />}
    </Styled.Container>
  );
};
