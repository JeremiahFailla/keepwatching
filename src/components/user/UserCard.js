import React from "react";
import * as Styled from "./UserStyles";
import { useSelector } from "react-redux";
import AccountSettingsTab from "../tabs/AccountSettingsTab";

const UserCard = () => {
  const user = useSelector((state) => state.user);
  console.log(user);
  return (
    <Styled.UserCardContainer>
      <Styled.UserCard>
        <Styled.Tabs>
          <Styled.IconContainer>
            <Styled.Icon />
            <Styled.Name>Hello, {user?.displayName}</Styled.Name>
          </Styled.IconContainer>
          <Styled.Tab>Account Settings</Styled.Tab>
          <Styled.Tab>Watch List</Styled.Tab>
          <Styled.Tab>Reviews</Styled.Tab>
          <Styled.SignOut>Sign Out</Styled.SignOut>
        </Styled.Tabs>
        <AccountSettingsTab user={user} />
      </Styled.UserCard>
    </Styled.UserCardContainer>
  );
};

export default UserCard;
