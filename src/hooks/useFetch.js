import React, { useState, useEffect } from "react";

const useFetch = () => {
  const [content, setContent] = useState([]);

  useEffect((param) => {
    fetch("https://imdb8.p.rapidapi.com/title/find?q=game%20of%20thr", {
      method: "GET",
      headers: {
        "x-rapidapi-host": "imdb8.p.rapidapi.com",
        "x-rapidapi-key": "942152c789msh79c9fe544db88c0p17901ajsn54d89827f36f",
      },
    })
      .then((response) => response.json())
      .then((data) => setContent(data))
      .catch((err) => {
        console.error(err);
      });
  });
  return content;
};

export default useFetch;
