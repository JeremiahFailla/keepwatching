import styled from "styled-components";

export const Title = styled.h2`
  font-size: 1.8rem;
  text-align: center;
  padding: 2rem 0 3rem;
  font-weight: 400;
  color: white;
`;

export const CardContainer = styled.div`
  display: flex;
  gap: 4rem;
  justify-content: center;
  flex-wrap: wrap;
  align-items: center;
`;

export const FeaturedCard = styled.img`
  grid-area: left;
  width: 220px;
  height: 320px;
  box-shadow: 0px 0px 10px 10px rgba(0, 0, 0, 0.25);
  object-fit: cover;
  cursor: pointer;
  transition: all 0.3s ease;

  &:hover {
    box-shadow: 0px 0px 10px 10px #fd7702;
  }
`;
