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
  padding: 1.5rem;
  max-width: 450px;
`;

export const Description = styled.p`
  font-size: 1.2rem;
  text-align: center;
  width: 100%;
  margin-bottom: 2.5rem;
`;

export const Link = styled.span`
  color: #0081ff;
  cursor: pointer;
`;

export const Label = styled.label`
  display: block;
  padding: 0 8px 5px;
  font-size: 1.2rem;
`;

export const Input = styled.input`
  background-color: #fd7702;
  border-radius: 5px;
  padding: 10px 8px;
  width: 100%;
  margin-bottom: 1rem;
  border: none;
  outline: 0;
  font-size: 1.2rem;

  &:last-of-type {
    margin-bottom: 2rem;
  }
`;

export const Button = styled.button`
  width: 100%;
  background: #006ad3;
  color: white;
  padding: 8px;
  border-radius: 5px;
  border: none;
  outline: 0;
  font-size: 1.2rem;
  cursor: pointer;
  transition: all 0.2s ease;

  &:hover {
    background: #225f9d;
  }
`;

export const ErrorContainer = styled.div`
  position: relative;
  width: 100%;
`;

export const Error = styled.p`
  position: absolute;
  width: 100%;
  background: #8958f1;
  font-size: 1.1rem;
  text-align: center;
  top: -35px;
  padding: 5px;
  color: #ffe600;
`;
