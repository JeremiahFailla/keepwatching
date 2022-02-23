import styled from "styled-components";

export const Container = styled.div`
  padding: 3rem 2rem;
  display: flex;
  max-width: 1700px;
  margin: 0 auto;
  gap: 1rem;
  flex-wrap: wrap;
`;

export const Card = styled.div`
  border-radius: 5px;
  background: #003f7d;
  box-shadow: inset 0px 0px 20px 5px rgba(0, 0, 0, 0.25);
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 1.5rem;
  cursor: pointer;

  &:hover {
    box-shadow: inset 0px 0px 20px 5px #ff5003;
  }
  &:hover > p {
    color: #ff5003;
  }
`;

export const Title = styled.p`
  font-size: 1.1rem;
  color: white;
  text-align: center;
  padding-bottom: 10px;
`;

export const Image = styled.img`
  object-fit: cover;
  width: 150px;
  height: 250px;
`;
