import styled from "styled-components";

export const Container = styled.div`
  background-color: #004a94;
  padding: 0.8rem 1.5rem;
  /* max-width: 1220px; */
  margin: 2rem auto;
  border-radius: 2px;
`;

export const Title = styled.span`
  display: inline-block;
  font-size: 1rem;
  color: #fd7702;
  padding-right: 20px;
`;
export const More = styled.span`
  display: inline-block;
  font-size: 0.8rem;
  color: #fd7702;
  border-bottom: 2px solid transparent;
  transition: all 0.3s ease;
  cursor: pointer;

  &:hover {
    border-color: #fd7702;
  }
`;
