import styled from "styled-components";
import { BsFillPersonFill, BsDoorOpenFill } from "react-icons/bs";
import { CgMoreVerticalR } from "react-icons/cg";
import { GrUserSettings } from "react-icons/gr";
import { HiClipboardList } from "react-icons/hi";
import { AiOutlineMessage } from "react-icons/ai";

export const UserCardContainer = styled.div`
  width: 850px;
  margin: 0 auto;
  margin-top: 100px;
  padding: 1rem;

  @media (max-width: 870px) {
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
  padding: 8px 5px;
  cursor: pointer;
  white-space: nowrap;
  text-align: center;
  transition: all 0.5s ease;

  &:hover {
    color: #006ad3;
    background: #c0daec;
  }

  &:hover * {
    transition: all 0.5s ease;
    stroke: #006ad3;
  }

  @media (max-width: 700px) {
    font-size: ${(props) => props.showMore};
  }
`;

export const AccountSettingsIcon = styled(GrUserSettings)`
  font-size: 1.8rem;
  display: block;
  margin: 0 auto;
  margin-bottom: 5px;

  & > * {
    transition: all 0.5s ease;
  }
`;

export const WatchListIcon = styled(HiClipboardList)`
  font-size: 1.8rem;
  display: block;
  margin: 0 auto;
  margin-bottom: 5px;
`;

export const ReviewsIcon = styled(AiOutlineMessage)`
  font-size: 1.8rem;
  display: block;
  margin: 0 auto;
  margin-bottom: 5px;
`;

export const SignOutIcon = styled(BsDoorOpenFill)`
  font-size: 1.8rem;
  display: block;
  margin: 0 auto;
  margin-bottom: 5px;
`;

export const IconContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 10px 5px;
`;

export const Icon = styled(BsFillPersonFill)`
  color: #0081ff;
  font-size: 2.8rem;

  @media (max-width: 700px) {
    font-size: 2rem;
  }
`;

export const Name = styled.p`
  color: #0081ff;
  font-size: 1rem;
  white-space: nowrap;
  transition: all 0.5s ease;

  @media (max-width: 700px) {
    font-size: ${(props) => props.showMore};
  }
`;

export const SignOut = styled.div`
  font-size: 1rem;
  border-top: 1px solid #003f7d;
  color: #fd7702;
  padding: 10px 5px;
  cursor: pointer;
  transition: all 0.5s ease;

  &:hover {
    color: black;
    background: #ff9f4c;
  }

  @media (max-width: 700px) {
    font-size: 0.6rem;
  }
`;

// --- mobile ------

export const More = styled(CgMoreVerticalR)`
  font-size: 2rem;
  color: #ff9f4c;
  cursor: pointer;
  text-align: center;
  width: 100%;
  display: none;
  margin: -15px 0 10px;

  &:hover {
    color: #0081ff;
  }

  @media (max-width: 700px) {
    display: block;
  }
`;
