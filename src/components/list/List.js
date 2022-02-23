import React, { useState } from "react";
import * as Styled from "./ListStyles";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";

export const List = (props) => {
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
      principals: [
        {
          id: "/name/nm3592338/",
          legacyNameText: "Clarke, Emilia",
          name: "Emilia Clarke",
          category: "actress",
          characters: ["Daenerys Targaryen"],
          endYear: 2019,
          episodeCount: 62,
          roles: [
            {
              character: "Daenerys Targaryen",
              characterId: "/character/ch0158597/",
            },
          ],
          startYear: 2011,
        },
      ],
    },
    {
      id: "/title/tt0107207/",
      image: {
        height: 2358,
        id: "/title/tt0107207/images/rm1385382400",
        url: "https://m.media-amazon.com/images/M/MV5BMmYyOTgwYWItYmU3Ny00M2E2LTk0NWMtMDVlNmQ0MWZiMTMxXkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_.jpg",
        width: 1580,
      },
      runningTimeInMinutes: 133,
      title: "In the Name of the Father",
      titleType: "movie",
      year: 1993,
      principals: [
        {
          id: "/name/nm0000358/",
          legacyNameText: "Day-Lewis, Daniel",
          name: "Daniel Day-Lewis",
          billing: 1,
          category: "actor",
          characters: ["Gerry Conlon"],
          roles: [],
        },
      ],
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
      principals: [
        {
          id: "/name/nm3592338/",
          legacyNameText: "Clarke, Emilia",
          name: "Emilia Clarke",
          category: "actress",
          characters: ["Daenerys Targaryen"],
          endYear: 2019,
          episodeCount: 62,
          roles: [
            {
              character: "Daenerys Targaryen",
              characterId: "/character/ch0158597/",
            },
          ],
          startYear: 2011,
        },
      ],
    },
    {
      id: "/title/tt0092675/",
      image: {
        height: 2818,
        id: "/title/tt0092675/images/rm934555904",
        url: "https://m.media-amazon.com/images/M/MV5BNTJmMGEzMTQtMzQzMi00YjE1LWI4MTctNjY0NWZiYzE2MDVhXkEyXkFqcGdeQXVyMTQxNzMzNDI@._V1_.jpg",
        width: 1805,
      },
      runningTimeInMinutes: 92,
      title: "Bloodsport",
      titleType: "movie",
      year: 1988,
      principals: [
        {
          id: "/name/nm0000241/",
          legacyNameText: "Van Damme, Jean-Claude",
          name: "Jean-Claude Van Damme",
          as: "Jean Claude Van Damme",
          billing: 1,
          category: "actor",
          characters: [],
          roles: [],
        },
        {
          id: "/name/nm0316455/",
          legacyNameText: "Gibb, Donald",
          name: "Donald Gibb",
          billing: 2,
          category: "actor",
          characters: [],
          roles: [],
        },
        {
          id: "/name/nm0043994/",
          legacyNameText: "Ayres, Leah",
          name: "Leah Ayres",
          billing: 3,
          category: "actress",
          characters: [],
          roles: [],
        },
      ],
    },
  ]);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const showContent = (item) => {
    dispatch({ type: "SET_SELECTED_CONTENT", content: item });
    navigate(`/content/${item.title.toLowerCase().replaceAll(" ", "-")}`);
  };

  const viewMore = () => {
    navigate(`/more/${props.title.toLowerCase().replaceAll(" ", "-")}`);
  };

  return (
    <Styled.Container>
      <Styled.Title>{props.title}</Styled.Title>
      <Styled.More onClick={viewMore}>View More</Styled.More>
      <Styled.CardsContainer>
        {movies.map((item) => {
          if (item.titleType === "movie" || item.titleType === "tvSeries") {
            return (
              <Styled.Image
                key={Math.random() * 1000}
                src={item.image.url}
                onClick={() => showContent(item)}
              />
            );
          }
        })}
      </Styled.CardsContainer>
    </Styled.Container>
  );
};