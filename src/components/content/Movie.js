import React from "react";
import WatchedAndWatchListButtons from "../buttons/WatchedAndWatchListButtons";
import Reviews from "../reviews/Reviews";
import * as Styled from "./Styles";

const Movie = (props) => {
  return (
    <Styled.Card>
      <Styled.Title>{props.item.title}</Styled.Title>
      <Styled.Container>
        <Styled.ImageContainer>
          <Styled.Image
            src={props.item.image ? props.item.image.url : ""}
            alt={props.item.title}
          />
          <WatchedAndWatchListButtons item={props.item} />
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
      <Reviews id={props.item.id} title={props.item.title} />
    </Styled.Card>
  );
};

export default Movie;
