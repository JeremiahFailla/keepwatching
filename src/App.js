import "./App.css";
import React, { useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import { onAuthStateChanged } from "firebase/auth";
import { useDispatch } from "react-redux";
import { auth } from "./firebase/firebase";

import Home from "./pages/HomePage";
import Login from "./pages/LoginPage";
import Account from "./pages/AccountPage";
import ErrorPage from "./pages/ErrorPage";
import SpecificContentPage from "./pages/SpecificContentPage";

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        dispatch({ type: "SET_USER", user: user });
      }
    });
  }, []);

  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/home" element={<Home />} />
        <Route path="/account" element={<Account />} />
        <Route path="/content/:title" element={<SpecificContentPage />} />
        <Route path="*" element={<ErrorPage />} />
      </Routes>
    </div>
  );
}

export default App;
