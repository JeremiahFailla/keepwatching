import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import Featured from "../components/featured/Featured";
import Header from "../components/header/Header";
import { List } from "../components/list/List";

function Home() {
  const user = useSelector((state) => state.user);

  return (
    <div>
      <Header />
      <Featured />
      <List />
    </div>
  );
}

export default Home;
