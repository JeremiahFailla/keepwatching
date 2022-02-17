import styled from "styled-components";

export const Tab = styled.div`
  padding: 0 3rem;
  flex-grow: 1;
`;

export const Title = styled.p`
  font-size: 1.5rem;
  color: #003f7d;
  text-align: center;
  margin-bottom: 1.5rem;
`;

export const InputContainer = styled.div`
  display: grid;
  /* grid-template-columns: repeat(auto-fit, 200px); */
  grid-template-columns: 150px 225px;
  padding: 1rem 0;
`;

export const Label = styled.label`
  font-size: 1rem;
  display: flex;
  align-items: center;
`;

export const Input = styled.input`
  border: none;
  outline: 0;
  padding: 5px 8px;
  background: #c2defb;
  border-radius: 2px;
  font-size: 1rem;
  min-width: 0;
`;

export const Reset = styled.p`
  color: red;
  margin-top: 1rem;
  cursor: pointer;
`;

export const SubmitButton = styled.button`
  border: none;
  outline: 0;
  padding: 5px;
  width: 100%;
  background: #1d8eff;
  border-radius: 2px;
  font-size: 1rem;
  margin-top: 1.5rem;
  transition: all 0.3s ease;
  cursor: pointer;

  &:hover {
    background: #0080ff;
  }
`;
