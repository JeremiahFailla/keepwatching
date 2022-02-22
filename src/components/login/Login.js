import React, { useState, useEffect, useLayoutEffect } from "react";
import * as Styled from "./LoginStyles";
import Register from "../register/Register";
import { useNavigate } from "react-router-dom";
import {
  signInWithEmailAndPassword,
  setPersistence,
  browserSessionPersistence,
} from "firebase/auth";
import { auth } from "../../firebase/firebase";
import { useDispatch, useSelector } from "react-redux";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showRegisterAccount, setShowRegisterAccount] = useState(false);
  const [error, setError] = useState("");
  const [showError, setShowError] = useState(false);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const newUser = useSelector((state) => state.user);

  const showRegisterPage = () => {
    setShowRegisterAccount(!showRegisterAccount);
  };

  const validateLoginData = () => {
    // do firebase authentication stuff
    setPersistence(auth, browserSessionPersistence)
      .then(() => {
        return signInWithEmailAndPassword(auth, email, password);
      })
      .then((userAccount) => {
        // Signed in
        const { user } = userAccount;
        dispatch({ type: "SET_USER", user: user });
      })
      .catch((error) => {
        // error occured
        const errorMessage = error.message;
        console.log(errorMessage);
        if (errorMessage === "Firebase: Error (auth/wrong-password).") {
          setError("Wrong Password");
        }
        if (errorMessage === "Firebase: Error (auth/user-not-found).") {
          setError("Account Could not Be Found");
        }
        setShowError(true);
        return false;
      });
    return true;
  };

  const signIn = (e) => {
    e.preventDefault();
    setShowError(false);

    // validate login data
    if (!validateLoginData()) return;

    // Navigate to home page
    navigate("/home", { replace: true });
  };

  useEffect(() => {
    console.log(newUser);
    if (newUser) {
      navigate("/home", { replace: true });
    }
  }, [newUser]);

  return (
    <Styled.Container>
      <Styled.Logo>KeepWatching</Styled.Logo>
      {!showRegisterAccount && (
        <Styled.Card>
          <Styled.Description>
            KeepWatching your favorite movies and shows by signing in or{" "}
            <Styled.Link
              onClick={() => {
                setShowError(false);
                setEmail("");
                setPassword("");
                showRegisterPage();
              }}
            >
              create an account
            </Styled.Link>
          </Styled.Description>
          <Styled.ErrorContainer>
            {showError && <Styled.Error>{error}</Styled.Error>}
          </Styled.ErrorContainer>
          <form onSubmit={signIn}>
            <Styled.Label htmlFor="email">Email</Styled.Label>
            <Styled.Input
              type="email"
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
      )}
      {showRegisterAccount && <Register showLogin={showRegisterPage} />}
    </Styled.Container>
  );
};

export default Login;
