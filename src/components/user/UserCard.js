import React, { useState } from "react";
import * as Styled from "./UserStyles";
import { useSelector, useDispatch } from "react-redux";
import AccountSettingsTab from "../tabs/AccountSettingsTab";
import WatchListTab from "../tabs/WatchListTab";
import ReviewsTab from "../tabs/ReviewsTab";
import { auth } from "../../firebase/firebase";
import { signOut } from "firebase/auth";
import { useNavigate } from "react-router-dom";

const UserCard = () => {
  const [showSettings, setShowSettings] = useState(true);
  const [showWatchList, setShowWatchList] = useState(false);
  const [showReviews, setShowReviews] = useState(false);

  const [mobileNav, showMobileNav] = useState(false);

  const user = useSelector((state) => state.user);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const showMobileNavHandler = () => {
    showMobileNav(!mobileNav);
  };

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

  const signOutUser = () => {
    signOut(auth)
      .then(() => {
        dispatch({ type: "SET_USER", user: null });
        navigate("/", { replace: true });
      })
      .catch((error) => {
        console.log(error.message);
      });
  };

  return (
    <Styled.UserCardContainer>
      <Styled.UserCard>
        <Styled.Tabs>
          <Styled.More onClick={showMobileNavHandler} />
          <Styled.IconContainer>
            <Styled.Icon />
            <Styled.Name showMore={mobileNav ? "1rem" : ".6rem"}>{`Welcome${
              !mobileNav ? "," : ""
            } ${!mobileNav ? user?.displayName : ""}`}</Styled.Name>
          </Styled.IconContainer>
          <Styled.Tab
            onClick={showAccountSettings}
            showMore={mobileNav ? "1rem" : ".6rem"}
          >
            <Styled.AccountSettingsIcon />
            {`${mobileNav ? "Account " : ""}Settings`}
          </Styled.Tab>
          <Styled.Tab
            onClick={showAccountWatchList}
            showMore={mobileNav ? "1rem" : ".6rem"}
          >
            <Styled.WatchListIcon />
            Watch List
          </Styled.Tab>
          <Styled.Tab
            onClick={showAccountReviews}
            showMore={mobileNav ? "1rem" : ".6rem"}
          >
            <Styled.ReviewsIcon />
            Reviews
          </Styled.Tab>
          <Styled.SignOut
            onClick={signOutUser}
            showMore={mobileNav ? "1rem" : ".6rem"}
          >
            <Styled.SignOutIcon />
            Sign Out
          </Styled.SignOut>
        </Styled.Tabs>
        {showSettings && <AccountSettingsTab user={user} />}
        {showWatchList && <WatchListTab />}
        {showReviews && <ReviewsTab />}
      </Styled.UserCard>
    </Styled.UserCardContainer>
  );
};

export default UserCard;
