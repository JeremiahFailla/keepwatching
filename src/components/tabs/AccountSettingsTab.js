import React, { useState } from "react";
import * as Styled from "./TabStyles";

const AccountSettingsTab = ({ user }) => {
  const [displayName, setDisplayName] = useState(user.displayName);
  const [email, setEmail] = useState(user.email);

  return (
    <Styled.Tab>
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
    </Styled.Tab>
  );
};

export default AccountSettingsTab;
