import React from "react";
import WatchedAndWatchListButtons from "../buttons/WatchedAndWatchListButtons";
import Reviews from "../reviews/Reviews";
import * as Styled from "./Styles";

export const TVShow = (props) => {
  return (
    <Styled.Card>
      <Styled.Title>{props.item.title}</Styled.Title>
      <Styled.Container>
        <Styled.ImageContainer>
          <Styled.Image src={props.item.image.url} />
          <WatchedAndWatchListButtons item={props.item} />
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
              <Styled.Data>
                {props.item.runningTimeInMinutes} Minutes
              </Styled.Data>
            </Styled.ColumContainer>
          </Styled.DataContainer>
          {props.item.principals && (
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
          )}
        </div>
      </Styled.Container>
      <Reviews id={props.item.id} title={props.item.title} />
    </Styled.Card>
  );
};
