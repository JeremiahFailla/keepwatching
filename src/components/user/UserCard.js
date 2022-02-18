import React, { useState } from "react";
import * as Styled from "./UserStyles";
import { useSelector } from "react-redux";
import AccountSettingsTab from "../tabs/AccountSettingsTab";
import WatchListTab from "../tabs/WatchListTab";

const UserCard = () => {
  const [showSettings, setShowSettings] = useState(true);
  const [showWatchList, setShowWatchList] = useState(false);
  const [showReviews, setShowReviews] = useState(false);
  const user = useSelector((state) => state.user);
  console.log(user);

  const showAccountSettings = () => {
    setShowWatchList(false);
    setShowReviews(false);
    setShowSettings(true);
  };

  const showAccountWatchList = () => {
    setShowSettings(false);
    setShowReviews(false);
    setShowWatchList(true);
  };

  const showAccountReviews = () => {
    setShowSettings(false);
    setShowWatchList(false);
    setShowReviews(true);
  };

  return (
    <Styled.UserCardContainer>
      <Styled.UserCard>
        <Styled.Tabs>
          <Styled.IconContainer>
            <Styled.Icon />
            <Styled.Name>Hello, {user?.displayName}</Styled.Name>
          </Styled.IconContainer>
          <Styled.Tab onClick={showAccountSettings}>
            Account Settings
          </Styled.Tab>
          <Styled.Tab onClick={showAccountWatchList}>Watch List</Styled.Tab>
          <Styled.Tab onClick={showAccountReviews}>Reviews</Styled.Tab>
          <Styled.SignOut>Sign Out</Styled.SignOut>
        </Styled.Tabs>
        {showSettings && <AccountSettingsTab user={user} />}
        {showWatchList && <WatchListTab />}
      </Styled.UserCard>
    </Styled.UserCardContainer>
  );
};

export default UserCard;
