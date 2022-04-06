import React, { useState } from "react";
import * as Styled from "./LoginStyles";
import Register from "../register/Register";
import { useNavigate } from "react-router-dom";
import {
  signInWithEmailAndPassword,
  setPersistence,
  browserSessionPersistence,
} from "firebase/auth";
import { auth, db } from "../../firebase/firebase";
import { useDispatch } from "react-redux";
import { doc, getDoc } from "firebase/firestore";
import { sendPasswordResetEmail } from "firebase/auth";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showRegisterAccount, setShowRegisterAccount] = useState(false);
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");
  const [showError, setShowError] = useState(false);
  const [showSuccess, setShowSuccess] = useState(false);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const getFirebaseData = async (user) => {
    const docRef = doc(db, "users", user?.uid);
    const docSnap = await getDoc(docRef);

    if (docSnap.exists()) {
      const data = docSnap.data();
      dispatch({
        type: "SET_WATCH_LIST_AND_REVIEWS_AND_ENTERTAINMENT_WATCHED",
        watchList: data.watchList,
        reviews: data.reviews,
        entertainmentWatched: data.watched,
      });
    } else {
      console.log("No such document!");
    }
  };

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
        // get user data from firebase
        getFirebaseData(user);

        // Navigate to home page
        navigate("/home", { replace: true });
      })
      .catch((error) => {
        // error occured
        const errorMessage = error.message;
        console.log(errorMessage);
        if (errorMessage === "Firebase: Error (auth/wrong-password).") {
          setError("Wrong Password");
        }
        if (errorMessage === "Firebase: Error (auth/internal-error).") {
          setError("Wrong Password");
        }
        if (errorMessage === "Firebase: Error (auth/user-not-found).") {
          setError("Account Could not Be Found");
        }
        if (errorMessage === "Firebase: Error (auth/invalid-email).") {
          setError("Invalid Email");
        }
        setShowError(true);
      });
  };

  const resetPasswordButton = async () => {
    try {
      await sendPasswordResetEmail(auth, email);
      setShowSuccess(true);
    } catch (err) {
      console.log(err.message);
      if (err.message === "Firebase: Error (auth/missing-email).") {
        setError("Enter a valid email for password reset");
      }
      if (err.message === "Firebase: Error (auth/invalid-email).") {
        setError("Enter a valid email for password reset");
      }
      setShowError(true);
    }
  };

  const signIn = (e) => {
    e.preventDefault();
    setShowError(false);
    setShowSuccess(false);
    validateLoginData();
  };

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
            {showSuccess && (
              <Styled.Success>Reset Password Email Sent</Styled.Success>
            )}
          </Styled.ErrorContainer>
          <form onSubmit={signIn}>
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
              style={{ marginBottom: "2px" }}
            />
            <Styled.ForgotPasswordButton
              type="button"
              onClick={resetPasswordButton}
            >
              Forgot Password
            </Styled.ForgotPasswordButton>
            <Styled.Button>Let Watch</Styled.Button>
          </form>
        </Styled.Card>
      )}
      {showRegisterAccount && <Register showLogin={showRegisterPage} />}
    </Styled.Container>
  );
};

export default Login;
