import React, { useState, useEffect } from "react";
import Header from "../components/header/Header";
import { useParams } from "react-router-dom";
import { SearchContent } from "../components/searchContent/SearchContent";
import { Footer } from "../components/footer/Footer";
import Spinner from "../components/spinner/Spinner";

const ViewMorePage = () => {
  const [loading, setLoading] = useState(true);
  const [content, setContent] = useState([]);
  const { title } = useParams();

  useEffect(() => {
    fetch(
      `https://imdb8.p.rapidapi.com/title/find?q=${title
        .trim()
        .replaceAll("-", "%20")}`,
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
    console.log(content);
  }, [content]);

  return (
    <div
      style={{ display: "flex", flexDirection: "column", minHeight: "100vh" }}
    >
      <Header />
      {!loading && <SearchContent content={content} />}
      {loading && <Spinner style={{ paddingTop: "200px", margin: "0 auto" }} />}
      <Footer />
    </div>
  );
};

export default ViewMorePage;
