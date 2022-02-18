import React from "react";
import Header from "../components/header/Header";
import UserCard from "../components/user/UserCard";

const Account = () => {
  return (
    <div
      style={{
        maxWidth: "1900px",
        margin: "0 auto",
      }}
    >
      <Header />
      <UserCard />
    </div>
  );
};

export default Account;
