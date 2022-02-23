import React, { useState } from "react";
import * as Styled from "./HeaderStyles";
import { useNavigate, Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { auth } from "../../firebase/firebase";
import { signOut } from "firebase/auth";

const Header = () => {
  const [searchInput, setSearchInput] = useState("");
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
      </Styled.Nav>
    </Styled.Header>
  );
};

export default Header;
