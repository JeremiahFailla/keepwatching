import styled from "styled-components";

export const Container = styled.div`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
`;

export const Logo = styled.h1`
  font-size: 2.5rem;
  color: white;
  position: absolute;
  left: 32px;
  top: 25px;
`;

export const Card = styled.div`
  background: #ff8e00;
  border-radius: 5px;
  padding: 2rem;
  max-width: 450px;
`;

export const Message = styled.h2`
  font-size: 1.5rem;
  width: 100%;
  text-align: center;
`;
