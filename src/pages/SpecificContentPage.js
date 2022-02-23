import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import Header from "../components/header/Header";
import { useParams } from "react-router-dom";
import { TVShow } from "../components/content/TVShow";
import Movie from "../components/content/Movie";
import { Footer } from "../components/footer/Footer";

const SpecificContentPage = () => {
  const item = useSelector((state) => state.selectedContent);
  const params = useParams();

  useEffect(() => {
    console.log(item, params);
  }, [item, params]);
  return (
    <div
      style={{ minHeight: "100vh", display: "flex", flexDirection: "column" }}
    >
      <Header />
      {item.titleType === "tvSeries" && <TVShow item={item} />}
      {item.titleType === "movie" && <Movie item={item} />}
      <Footer />
    </div>
  );
};

export default SpecificContentPage;
