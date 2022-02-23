import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  flex-grow: 1;
  display: flex;
  align-items: flex-end;
`;

export const Foot = styled.footer`
  display: flex;
  justify-content: space-evenly;
  padding: 2rem;
  max-width: 1600px;
  margin: 0 auto;
  flex-grow: 1;
`;

export const Title = styled.p`
  font-size: 1rem;
  color: #fd7702;
  font-weight: 300;
  text-align: center;
`;

export const Info = styled.p`
  font-size: 1.2rem;
  color: #fd7702;
  text-align: center;
  padding: 5px 0 0;
`;
