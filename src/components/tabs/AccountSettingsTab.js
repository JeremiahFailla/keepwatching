import React, { useState, useEffect } from "react";
import * as Styled from "./TabStyles";

const AccountSettingsTab = ({ user }) => {
  const [displayName, setDisplayName] = useState("");
  const [email, setEmail] = useState("");

  useEffect(() => {
    if (user) {
      setDisplayName(user.displayName);
      setEmail(user.email);
    }
  }, [user]);

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
      </div>
    </Styled.Tab>
  );
};

export default AccountSettingsTab;
