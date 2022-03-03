import styled, { keyframes } from "styled-components";

const spin = keyframes`
  to {
    transform: rotate(365deg);
  }
`;

export const Spinner = styled.div`
  height: 236px;
  width: 236px;
  border-radius: 50%;
  border: 20px solid #003f7d;
  border-top: 20px solid orange;
  animation: ${spin} 2s linear infinite;
`;
