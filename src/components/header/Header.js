import React, { useState } from "react";
import * as Styled from "./HeaderStyles";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { auth } from "../../firebase/firebase";
import { signOut } from "firebase/auth";

const Header = () => {
  const [searchInput, setSearchInput] = useState("");
  const [mobileNav, showMobileNav] = useState(false);
  const user = useSelector((state) => state.user);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  // sign out the current user and send them back to the login screen
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

  // browse for movie/show handler
  const browse = (e) => {
    e.preventDefault();

    navigate(`/more/${searchInput.toLowerCase().replaceAll(" ", "-")}`);
  };

  const showMobileNavHandler = () => {
    showMobileNav(!mobileNav);
  };

  return (
    <Styled.Header>
      <Styled.Nav>
        <Styled.Logo to="/home">KeepWatching</Styled.Logo>
        <Styled.SearchForm onSubmit={browse}>
          <Styled.SearchInput
            aria-label="search"
            value={searchInput}
            onChange={(e) => setSearchInput(e.target.value)}
          />
          <Styled.SearchButton>Browse</Styled.SearchButton>
        </Styled.SearchForm>

        <Styled.PersonContainer to="/account">
          <Styled.PersonName>Hello, {user?.displayName}</Styled.PersonName>
          <Styled.PersonIcon />
        </Styled.PersonContainer>
        <Styled.SignOutButton onClick={signOutUser}>
          Sign Out
        </Styled.SignOutButton>
        <Styled.More onClick={showMobileNavHandler} />
        {mobileNav && (
          <React.Fragment>
            <Styled.Backdrop onClick={showMobileNavHandler} />
            <Styled.MobileNav>
              <Styled.MobileName>Hello, {user?.displayName}</Styled.MobileName>
              <Styled.MobileAccount to="/account">
                Account Settings
              </Styled.MobileAccount>
              <Styled.MobileSignOutButton>Sign Out</Styled.MobileSignOutButton>
            </Styled.MobileNav>
          </React.Fragment>
        )}
      </Styled.Nav>
      <Styled.MobileSearchForm onSubmit={browse}>
        <Styled.SearchInput
          aria-label="search"
          value={searchInput}
          style={{ flexGrow: 1 }}
          onChange={(e) => setSearchInput(e.target.value)}
        />
        <Styled.SearchButton style={{ flexGrow: 0 }}>
          Browse
        </Styled.SearchButton>
      </Styled.MobileSearchForm>
    </Styled.Header>
  );
};

export default Header;
