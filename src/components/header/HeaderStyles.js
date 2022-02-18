import styled from "styled-components";
import { BsFillPersonFill } from "react-icons/bs";
import { Link } from "react-router-dom";

export const Header = styled.header`
  width: 100%;
  margin: 0 auto;
`;
export const Nav = styled.nav`
  display: flex;
  padding: 1rem;
  align-items: center;
`;

export const Logo = styled(Link)`
  font-size: 2rem;
  color: white;
`;

export const SearchForm = styled.form`
  display: flex;
  margin: 0 auto;
`;

export const SearchInput = styled.input`
  background: #003366;
  border-radius: 5px 0 0 5px;
  border: none;
  outline: none;
  padding: 10px 8px;
  font-size: 1.3rem;
  color: white;
`;

export const SearchButton = styled.button`
  flex-grow: 1;
  background: #ff5003;
  border-radius: 0 5px 5px 0;
  border: none;
  outline: 0;
  padding: 0 10px;
  font-size: 1rem;
  cursor: pointer;
  transition: all 0.3s ease;

  &:hover {
    background: #b08cfd;
  }
`;

export const PersonContainer = styled(Link)`
  display: flex;
  justify-content: center;
  align-items: center;
  /* flex-direction: column; */
  margin-right: 2rem;

  &:hover > * {
    color: #b08cfd;
  }
`;

export const PersonIcon = styled(BsFillPersonFill)`
  color: #fd7702;
  font-size: 2.5rem;
  transition: all 0.3s ease;
`;

export const PersonName = styled.p`
  font-size: 1rem;
  color: #fd7702;
  transition: all 0.3s ease;
`;

export const SignOutButton = styled.button`
  border-radius: 5px;
  color: #fd7702;
  font-size: 1.1rem;
  padding: 7px 13px;
  background: transparent;
  border: 2px solid #fd7702;
  cursor: pointer;
  transition: all 0.3s ease;

  &:hover {
    color: #b08cfd;
    border-color: #b08cfd;
  }
`;
