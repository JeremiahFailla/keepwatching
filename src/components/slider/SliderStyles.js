import styled from "styled-components";
import { GrFormNext, GrFormPrevious } from "react-icons/gr";

export const CardsContainer = styled.div`
  display: flex;
  gap: 10px;
  margin-top: 10px;
  /* overflow: hidden; */
  position: relative;
  transition: all 0.6s ease;
`;

export const Image = styled.img`
  width: 150px;
  height: 200px;
  cursor: pointer;
  border: 2px solid transparent;
  object-fit: cover;
  transition: all 0.3s ease;

  &:hover {
    border-color: #fd7702;
  }
`;

export const NextButton = styled(GrFormNext)`
  font-size: 3rem;

  & > * {
    stroke: orange;
  }

  &:hover > * {
    stroke: #b08cfd;
  }
`;

export const PrevButton = styled(GrFormPrevious)`
  font-size: 3rem;

  & > * {
    stroke: orange;
  }

  &:hover > * {
    stroke: #b08cfd;
  }
`;

export const ButtonContainerNext = styled.div`
  border-radius: 50%;
  transition: all 0.3s ease;
  background: #00000074;
  position: absolute;
  top: 40%;
  right: 0;
  cursor: pointer;
  z-index: 50000;

  &:hover {
    background: #000000b4;
  }
`;

export const ButtonContainerPrev = styled.div`
  border-radius: 50%;
  transition: all 0.3s ease;
  background: #00000074;
  position: absolute;
  cursor: pointer;
  z-index: 50000;
  top: 40%;
  left: 0;

  &:hover {
    background: #000000b4;
  }
`;
