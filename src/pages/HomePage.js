import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import Header from "../components/header/Header";

function Home() {
  const user = useSelector((state) => state.user);

  return (
    <div>
      <Header />
      <h1 style={{ textAlign: "center", color: "white" }}>Home Page</h1>
    </div>
  );
}

export default Home;
