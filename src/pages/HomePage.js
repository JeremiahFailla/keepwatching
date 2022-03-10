import React from "react";
import Featured from "../components/featured/Featured";
import { Footer } from "../components/footer/Footer";
import Header from "../components/header/Header";
import { List } from "../components/list/List";
import { useDispatch, useSelector } from "react-redux";
import { db } from "./../firebase/firebase";
import { getDocs, collection } from "firebase/firestore";

function Home() {
  const getAllReviews = () => {
    // const querySnapshot = await getDocs(collection(db, "entertainment"));
    // querySnapshot.forEach((doc) => {
    //   doc.data() is never undefined for query doc snapshots
    //   console.log(doc.id, " => ", doc.data());
    // });
  };

  return (
    <div>
      <Header />
      <Featured />
      <List title="Slasher" />
      <List title="Action" />
      <Footer />
    </div>
  );
}

export default Home;
