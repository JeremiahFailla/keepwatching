import React, { useState, useEffect } from "react";
import * as Styled from "./../login/LoginStyles";
import { useNavigate } from "react-router-dom";
import {
  createUserWithEmailAndPassword,
  setPersistence,
  browserSessionPersistence,
  updateProfile,
} from "firebase/auth";
import { auth, db } from "../../firebase/firebase";
import { useDispatch } from "react-redux";
import { doc, setDoc } from "firebase/firestore";

const Register = ({ showLogin }) => {
  const [displayName, setDisplayName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [showError, setShowError] = useState(false);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const validateLoginData = () => {
    // create new user on firebase
    setPersistence(auth, browserSessionPersistence)
      .then(() => {
        return createUserWithEmailAndPassword(auth, email, password);
      })
      .then((userAccount) => {
        // Account created and Signed in
        const { user } = userAccount;
        setFirebaseData(user);
        dispatch({ type: "SET_USER", user: user });
        return updateProfile(user, {
          displayName: displayName,
        });
      })
      .then(() => {
        dispatch({ type: "SET_USER_DISPLAYNAME", displayName: displayName });

        // Navigate to home page
        navigate("/home", { replace: true });
      })
      .catch((error) => {
        // error occured
        const errorMessage = error.message;
        console.log(errorMessage);
        if (errorMessage === "Firebase: Error (auth/email-already-in-use).") {
          setError("Email Already In Use");
          setShowError(true);
        }
        if (errorMessage === "Firebase: Error (auth/invalid-email).") {
          setError("Invalid Email");
          setShowError(true);
        }
        if (
          errorMessage ===
          "Firebase: Password should be at least 6 characters (auth/weak-password)."
        ) {
          setError("Password must be at least 6 characters");
          setShowError(true);
        }
      });
  };

  const setFirebaseData = async (user) => {
    console.log(user);
    try {
      const docRef = doc(db, "users", user?.uid);
      await setDoc(docRef, {
        watched: [],
        reviews: [],
      });
    } catch (err) {
      console.log(err.message);
    }
  };

  const createAccount = (e) => {
    e.preventDefault();

    setShowError(false);
    // Create Account
    if (!displayName) {
      setError("Display Name Required");
      setShowError(true);
      return;
    }
    validateLoginData();
  };

  return (
    <Styled.Card>
      <Styled.Description>
        KeepWatching your favorite movies and shows by create an account or
        <Styled.Link
          onClick={() => {
            setShowError(false);
            setDisplayName("");
            setEmail("");
            setPassword("");
            showLogin();
          }}
        >
          {" "}
          sign in
        </Styled.Link>
      </Styled.Description>
      <Styled.ErrorContainer>
        {showError && <Styled.Error>{error}</Styled.Error>}
      </Styled.ErrorContainer>
      <form onSubmit={createAccount}>
        <Styled.Label htmlFor="displayName">Display Name</Styled.Label>
        <Styled.Input
          type="text"
          name="displayName"
          id="displayName"
          placeholder="Display Name"
          value={displayName}
          onChange={(e) => setDisplayName(e.target.value)}
        />
        <Styled.Label htmlFor="email">Email</Styled.Label>
        <Styled.Input
          type="text"
          name="email"
          id="email"
          placeholder="Email Address"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <Styled.Label htmlFor="password">Password</Styled.Label>
        <Styled.Input
          type="password"
          name="password"
          id="password"
          placeholder="********"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <Styled.Button>Let Watch</Styled.Button>
      </form>
    </Styled.Card>
  );
};

export default Register;
