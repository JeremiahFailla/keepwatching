import React, { useState } from "react";
import * as Styled from "./Styles";

export const TVShow = (props) => {
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
              <Styled.Data>TV Series</Styled.Data>
            </Styled.ColumContainer>
            <Styled.ColumContainer>
              <Styled.DataTitle>Number of Episodes</Styled.DataTitle>
              <Styled.Data>{props.item.numberOfEpisodes}</Styled.Data>
            </Styled.ColumContainer>
          </Styled.DataContainer>
          <Styled.DataContainer>
            <Styled.ColumContainer>
              <Styled.DataTitle>Years</Styled.DataTitle>
              <Styled.Data>
                {props.item.seriesStartYear} / {props.item.seriesEndYear}
              </Styled.Data>
            </Styled.ColumContainer>
            <Styled.ColumContainer>
              <Styled.DataTitle>Run Time</Styled.DataTitle>
              <Styled.Data>{props.item.runningTimeInMinutes}</Styled.Data>
            </Styled.ColumContainer>
          </Styled.DataContainer>
          <div style={{ paddingTop: "2rem" }}>
            <Styled.DataTitle>Cast Stars</Styled.DataTitle>
            <Styled.CastContainer>
              {props.item.principals.map((char) => (
                <Styled.Data key={Math.random() * 2000}>
                  {char.name}
                </Styled.Data>
              ))}
            </Styled.CastContainer>
          </div>
        </div>
      </Styled.Container>
    </Styled.Card>
  );
};
