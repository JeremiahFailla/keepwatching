import styled from "styled-components";
import { BsFillPersonFill } from "react-icons/bs";

export const UserCardContainer = styled.div`
  /* display: grid;
  grid-template-columns: minmax(0, 770px); */
  /* display: flex;
  justify-content: center;
  align-items: center; */
  width: 770px;
  margin: 0 auto;
  margin-top: 100px;
  padding: 1rem;

  @media (max-width: 800px) {
    margin: 100px 1rem;
    width: auto;
  }
`;

export const UserCard = styled.main`
  border-radius: 5px;
  background: #d4edff;
  padding: 3rem 1.5rem;
  display: flex;
  max-height: 600px;
  overflow: hidden;
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
  font-size: 1rem;
  border-top: 1px solid #003f7d;
  padding: 15px 5px;
  cursor: pointer;
  white-space: nowrap;

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
  white-space: nowrap;
`;

export const SignOut = styled.div`
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
