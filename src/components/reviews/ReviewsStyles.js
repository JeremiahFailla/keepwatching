import styled from "styled-components";
import { BsPersonCircle } from "react-icons/bs";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
`;

export const ReviewInputContainer = styled.form`
  display: grid;
  grid-template-columns: auto 1fr;
  background: #a8cee941;
  border-radius: 3px;
  margin-top: 2rem;
`;

export const ReviewInput = styled.input`
  min-width: 0;
  padding: 5px 10px;
  background: transparent;
  color: #ffffff;
  font-size: 1rem;
  border: none;
  outline: 0;
`;

export const SubmitButton = styled.button`
  border: none;
  outline: 0;
  background-color: #7db8e2;
  font-size: 1rem;
  display: inline-block;
  cursor: pointer;
  padding: 5px 10px;
  transition: all 0.3s ease;

  &:hover {
    background-color: #0095ff;
  }
`;

export const ReviewsContainer = styled.div`
  width: 100%;
`;

export const Review = styled.div`
  display: flex;
  align-items: center;
  gap: 4rem;
  width: 100%;
  padding: 1.5rem 2rem 0;
`;

export const IconNameContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;

export const Icon = styled(BsPersonCircle)`
  color: #0095ff;
  font-size: 2rem;
`;

export const Name = styled.p`
  color: #0095ff;
  padding-top: 0.5rem;
`;

export const Wording = styled.p`
  font-size: 1rem;
  color: #ffffff;
`;

export const NoReviews = styled.p`
  text-align: center;
  color: white;
`;
