import React, { useEffect } from "react";
import Featured from "../components/featured/Featured";
import { Footer } from "../components/footer/Footer";
import Header from "../components/header/Header";
import { List } from "../components/list/List";
import { useDispatch } from "react-redux";
import { db } from "./../firebase/firebase";
import { getDocs, collection } from "firebase/firestore";

function Home() {
  const dispatch = useDispatch();

  const getAllReviews = async () => {
    const querySnapshot = await getDocs(collection(db, "entertainment"));

    dispatch({ type: "SET_ALL_REVIEWS", querySnapshot: querySnapshot });
  };

  useEffect(() => {
    getAllReviews();
  }, []);

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
