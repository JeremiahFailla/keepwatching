import styled from "styled-components";
import { BsFillPersonFill } from "react-icons/bs";

export const UserCardContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-grow: 1;
  margin-top: -100px;
`;

export const UserCard = styled.main`
  border-radius: 5px;
  background: #d4edff;
  padding: 3rem 1.5rem;
  display: flex;
`;

export const Tabs = styled.div`
  display: flex;
  flex-direction: column;
  text-align: center;
  padding: 1rem;
  padding-left: 0;
  border-right: 1px solid black;
`;

export const Tab = styled.p`
  flex-grow: 1;
  font-size: 1rem;
  border-top: 1px solid #003f7d;
  padding: 15px 5px;
  cursor: pointer;

  &:hover {
    color: #006ad3;
    background: #c0daec;
  }
`;

export const IconContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 10px 5px;
`;

export const Icon = styled(BsFillPersonFill)`
  color: #0081ff;
  font-size: 3rem;
`;

export const Name = styled.p`
  color: #0081ff;
  font-size: 1rem;
`;

export const SignOut = styled.div`
  flex-grow: 1;
  font-size: 1rem;
  border-top: 1px solid #003f7d;
  color: #fd7702;
  padding: 10px 5px;
  cursor: pointer;

  &:hover {
    color: black;
    background: #ff9f4c;
  }
`;
