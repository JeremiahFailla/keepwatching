import React from "react";
import { Footer } from "../components/footer/Footer";
import Header from "../components/header/Header";
import UserCard from "../components/user/UserCard";

const Account = () => {
  return (
    <div
      style={{ display: "flex", flexDirection: "column", minHeight: "100vh" }}
    >
      <Header />
      <UserCard />
      <Footer />
    </div>
  );
};

export default Account;
