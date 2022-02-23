import React, { useState } from "react";
import * as Styled from "./Styles";

const Movie = (props) => {
  const [onWatchList, setOnWatchList] = useState(false);
  const [watched, setWatched] = useState(false);
  return (
    <Styled.Card>
      <Styled.Title>{props.item.title}</Styled.Title>
      <Styled.Container>
        <Styled.ImageContainer>
          <Styled.Image src={props.item.image.url} />
          {!onWatchList && (
            <Styled.AddToWatchListButton onClick={() => setOnWatchList(true)}>
              Add to Watch List
            </Styled.AddToWatchListButton>
          )}
          {onWatchList && (
            <Styled.RemoveFromWatchListButton
              onClick={() => setOnWatchList(false)}
            >
              Remove from Watch List
            </Styled.RemoveFromWatchListButton>
          )}
          {!watched && (
            <Styled.NotWatchedButton onClick={() => setWatched(true)}>
              Not Watched
            </Styled.NotWatchedButton>
          )}
          {watched && <Styled.WatchedButton>Watched</Styled.WatchedButton>}
        </Styled.ImageContainer>
        <div style={{ display: "flex", flexDirection: "column" }}>
          <Styled.DataContainer>
            <Styled.ColumContainer>
              <Styled.DataTitle>Type</Styled.DataTitle>
              <Styled.Data>Movie</Styled.Data>
            </Styled.ColumContainer>
            <Styled.ColumContainer>
              <Styled.DataTitle>Run Time</Styled.DataTitle>
              <Styled.Data>
                {props.item.runningTimeInMinutes} Minutes
              </Styled.Data>
            </Styled.ColumContainer>
          </Styled.DataContainer>
          <Styled.DataContainer>
            <Styled.ColumContainer>
              <Styled.DataTitle>Release Year</Styled.DataTitle>
              <Styled.Data>{props.item.year}</Styled.Data>
            </Styled.ColumContainer>
            {props.item.principals && (
              <Styled.ColumContainer>
                <Styled.DataTitle>Cast Stars</Styled.DataTitle>
                {props.item.principals.map((char) => (
                  <Styled.Data key={Math.random() * 2000}>
                    {char.name}
                  </Styled.Data>
                ))}
              </Styled.ColumContainer>
            )}
          </Styled.DataContainer>
        </div>
      </Styled.Container>
    </Styled.Card>
  );
};

export default Movie;
