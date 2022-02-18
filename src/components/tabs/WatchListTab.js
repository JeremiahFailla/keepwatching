import React, { useState } from "react";
import * as Styled from "./TabStyles";

const WatchListTab = () => {
  const [movies, setMovies] = useState([
    {
      id: "/title/tt0944947/",
      image: {
        url: "https://m.media-amazon.com/images/M/MV5BYTRiNDQwYzAtMzVlZS00NTI5LWJjYjUtMzkwNTUzMWMxZTllXkEyXkFqcGdeQXVyNDIzMzcwNjc@._V1_.jpg",
      },
      runningTimeInMinutes: 57,
      nextEpisode: "/title/tt1480055/",
      numberOfEpisodes: 73,
      seriesEndYear: 2019,
      seriesStartYear: 2011,
      title: "Game of Thrones",
      titleType: "tvSeries",
      year: 2011,
    },
    {
      id: "/title/tt0944947/",
      image: {
        url: "https://m.media-amazon.com/images/M/MV5BYTRiNDQwYzAtMzVlZS00NTI5LWJjYjUtMzkwNTUzMWMxZTllXkEyXkFqcGdeQXVyNDIzMzcwNjc@._V1_.jpg",
      },
      runningTimeInMinutes: 57,
      nextEpisode: "/title/tt1480055/",
      numberOfEpisodes: 73,
      seriesEndYear: 2019,
      seriesStartYear: 2011,
      title: "Game of Thrones",
      titleType: "tvSeries",
      year: 2011,
    },
    {
      id: "/title/tt0944947/",
      image: {
        url: "https://m.media-amazon.com/images/M/MV5BYTRiNDQwYzAtMzVlZS00NTI5LWJjYjUtMzkwNTUzMWMxZTllXkEyXkFqcGdeQXVyNDIzMzcwNjc@._V1_.jpg",
      },
      runningTimeInMinutes: 57,
      nextEpisode: "/title/tt1480055/",
      numberOfEpisodes: 73,
      seriesEndYear: 2019,
      seriesStartYear: 2011,
      title: "Game of Thrones",
      titleType: "tvSeries",
      year: 2011,
    },
  ]);
  return (
    <Styled.Tab>
      <Styled.Title>Watch List</Styled.Title>
      <Styled.List>
        {movies.map((movie) => (
          <Styled.Content>
            <Styled.Image src={movie.image.url} />
            <Styled.Container>
              <Styled.ContentTitle>{movie.title}</Styled.ContentTitle>
              <Styled.RemoveButton>Remove</Styled.RemoveButton>
            </Styled.Container>
          </Styled.Content>
        ))}
      </Styled.List>
    </Styled.Tab>
  );
};

export default WatchListTab;