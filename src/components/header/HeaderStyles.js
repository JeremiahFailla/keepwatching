import styled, { keyframes } from "styled-components";
import { BsFillPersonFill } from "react-icons/bs";
import { CgMoreR } from "react-icons/cg";
import { Link } from "react-router-dom";

const show = keyframes`
  to {
    opacity: 1;
  }
`;

export const Header = styled.header`
  width: 100%;
`;
export const Nav = styled.nav`
  display: flex;
  padding: 1rem;
  align-items: center;
  max-width: 1800px;
  margin: 0 auto;
  position: relative;
`;

export const Logo = styled(Link)`
  /* font-size: clamp(1.5rem, 2rem, 3rem); */
  font-size: 1.9rem;
  color: white;
`;

export const SearchForm = styled.form`
  display: flex;
  margin: 0 auto;
  min-width: 0;
  padding: 0 25px;
`;

export const SearchInput = styled.input`
  background: #003366;
  border-radius: 5px 0 0 5px;
  border: none;
  outline: none;
  padding: 10px 8px;
  font-size: 1.1rem;
  color: white;
  min-width: 0;
`;

export const SearchButton = styled.button`
  flex-grow: 1;
  background: #ff5003;
  border-radius: 0 5px 5px 0;
  border: none;
  outline: 0;
  padding: 0 10px;
  font-size: 0.9rem;
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
  margin-right: 1rem;

  &:hover > * {
    color: #b08cfd;
  }

  @media (max-width: 820px) {
    display: none;
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
  padding: 5px 10px;
  background: transparent;
  border: 2px solid #fd7702;
  cursor: pointer;
  transition: all 0.3s ease;
  white-space: nowrap;

  &:hover {
    color: #b08cfd;
    border-color: #b08cfd;
  }

  @media (max-width: 820px) {
    display: none;
  }
`;

export const More = styled(CgMoreR)`
  font-size: 2.5rem;
  color: #fd7702;
  display: none;
  min-width: 50px;
  cursor: pointer;
  transition: all 0.3s ease;

  &:hover {
    color: #b08cfd;
  }

  @media (max-width: 820px) {
    display: block;
  }
`;

export const MobileNav = styled.div`
  position: absolute;
  top: 72px;
  left: 0;
  background: #003366;
  width: 100%;
  opacity: 0;
  animation-name: ${show};
  animation-duration: 1s;
  animation-fill-mode: forwards;

  @media (min-width: 820px) {
    display: none;
  }
`;

export const Backdrop = styled.div`
  position: fixed;
  top: 72px;
  left: 0;
  width: 100%;
  bottom: 0;
  background: #00336664;

  @media (min-width: 820px) {
    display: none;
  }
`;

export const MobileName = styled.p`
  padding: 10px;
  text-align: center;
  color: white;
  font-size: 0.8rem;
`;

export const MobileAccount = styled(Link)`
  border: none;
  outline: 0;
  cursor: pointer;
  transition: all 0.3s ease;
  white-space: nowrap;
  padding: 10px;
  width: 100%;
  background: transparent;
  color: white;
  font-size: 0.8rem;
  display: inline-block;
  text-align: center;

  &:hover {
    color: #b08cfd;
    background: #5842305a;
  }
`;

export const MobileSignOutButton = styled.button`
  border: none;
  outline: 0;
  color: white;
  font-size: 0.8rem;
  padding: 10px;
  background: #fd7702;
  cursor: pointer;
  transition: all 0.3s ease;
  white-space: nowrap;
  width: 100%;

  &:hover {
    color: #b08cfd;
    background: #8f4300;
  }
`;
