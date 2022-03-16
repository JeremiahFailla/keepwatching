import React, { useState, useEffect } from "react";
import * as Styled from "./TabStyles";
import { useDispatch } from "react-redux";
import { auth } from "../../firebase/firebase";
import { updateProfile, updateEmail, updatePassword } from "firebase/auth";
import Spinner from "./../spinner/Spinner";

const AccountSettingsTab = ({ user }) => {
  const [displayName, setDisplayName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const [error, showError] = useState(false);
  const [loading, setLoading] = useState(false);
  const dispatch = useDispatch();

  useEffect(() => {
    if (user) {
      setDisplayName(user.displayName);
      setEmail(user.email);
    }
  }, [user]);

  useEffect(() => {
    if (loading) {
      setTimeout(() => {
        setLoading(false);
      }, 2000);
    }
  }, [loading]);

  const changeUserInfo = async (e) => {
    e.preventDefault();
    showError(false);
    setLoading(true);
    try {
      if (user.email !== email && email.length > 0) {
        await updateEmail(auth.currentUser, email);
      }
      if (user.displayName !== displayName && displayName.length > 0) {
        await updateProfile(auth.currentUser, {
          displayName: displayName,
        });
      }

      if (password === confirmPassword && password.length > 0) {
        await updatePassword(auth.currentUser, password);
        setPassword("");
        setConfirmPassword("");
      }
      if (password !== confirmPassword) {
        setErrorMessage("New Password and Confirm Password don't make");
        showError(true);
      }
      if (password.length < 6 && password.length > 0) {
        setErrorMessage("Password must be at least 6 characters");
        showError(true);
      }

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
        <Styled.AccountDescription>
          If you don't want to change specific information, leave input field as
          is or leave it blank.
        </Styled.AccountDescription>
        {loading && <Spinner />}

        <Styled.ErrorContainer>
          {error && !loading && <Styled.Error>{errorMessage}</Styled.Error>}
        </Styled.ErrorContainer>

        {!loading && (
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
            <Styled.InputContainer>
              <Styled.Label>New Password</Styled.Label>
              <Styled.Input
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </Styled.InputContainer>
            <Styled.InputContainer>
              <Styled.Label>Confirm Password</Styled.Label>
              <Styled.Input
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
              />
            </Styled.InputContainer>

            <Styled.SubmitButton>Save Changes</Styled.SubmitButton>
          </form>
        )}
      </div>
    </Styled.Tab>
  );
};

export default AccountSettingsTab;
