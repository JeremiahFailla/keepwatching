import React, { useState, useEffect } from "react";
import * as Styled from "./TabStyles";
import { useDispatch } from "react-redux";
import { auth } from "../../firebase/firebase";
import {
  updateProfile,
  updateEmail,
  sendPasswordResetEmail,
} from "firebase/auth";

const AccountSettingsTab = ({ user }) => {
  const [displayName, setDisplayName] = useState("");
  const [email, setEmail] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const [error, showError] = useState(false);
  const dispatch = useDispatch();

  useEffect(() => {
    if (user) {
      setDisplayName(user.displayName);
      setEmail(user.email);
    }
  }, [user]);

  const changeUserInfo = async (e) => {
    e.preventDefault();
    showError(false);
    if (!displayName) {
      setErrorMessage("Display Name Required");
      showError(true);
      return;
    }
    try {
      await updateEmail(auth.currentUser, email);
      await updateProfile(auth.currentUser, {
        displayName: displayName,
      });
      await sendPasswordResetEmail(auth, email);

      dispatch({
        type: "SET_USER_INFO",
        email: email,
        displayName: displayName,
      });
    } catch (err) {
      console.log(err.message);
      if (err.message === "Firebase: Error (auth/invalid-email).") {
        setErrorMessage("Invalid Email");
        showError(true);
      }
      if (err.message === "Firebase: Error (auth/requires-recent-login).") {
        setErrorMessage("Email Already In Use");
        showError(true);
      }
    }
  };

  return (
    <Styled.Tab>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <Styled.Title>Account Settings</Styled.Title>
        <Styled.ErrorContainer>
          {error && <Styled.Error>{errorMessage}</Styled.Error>}
        </Styled.ErrorContainer>
        <form onSubmit={changeUserInfo}>
          <Styled.InputContainer>
            <Styled.Label>Display Name</Styled.Label>
            <Styled.Input
              value={displayName}
              onChange={(e) => setDisplayName(e.target.value)}
            />
          </Styled.InputContainer>
          <Styled.InputContainer>
            <Styled.Label>Email</Styled.Label>
            <Styled.Input
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </Styled.InputContainer>
          <Styled.Reset>Reset Password</Styled.Reset>
          <Styled.SubmitButton>Save Changes</Styled.SubmitButton>
        </form>
      </div>
    </Styled.Tab>
  );
};

export default AccountSettingsTab;
