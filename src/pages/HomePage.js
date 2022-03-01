import React from "react";
import Featured from "../components/featured/Featured";
import { Footer } from "../components/footer/Footer";
import Header from "../components/header/Header";
import { List } from "../components/list/List";

function Home() {
  return (
    <div>
      <Header />
      <Featured />
      <List title="Sports" />
      <List title="Action" />
      <Footer />
    </div>
  );
}

export default Home;
