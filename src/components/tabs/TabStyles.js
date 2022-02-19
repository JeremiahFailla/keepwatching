import styled from "styled-components";

export const Tab = styled.div`
  padding-left: 3rem;
  flex-grow: 1;
`;

export const Title = styled.p`
  font-size: 1.5rem;
  color: #003f7d;
  text-align: center;
  margin-bottom: 1.5rem;
`;

// ------------Account Settings Tab------------------

export const InputContainer = styled.div`
  display: grid;
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
  width: 375px;

  &:hover {
    background: #0080ff;
  }
`;

// ----------- Watch List Tab --------------------

export const List = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 250px);
  gap: 15px;
`;

export const Content = styled.div`
  display: flex;
  align-items: center;
  padding: 10px;
  border-radius: 2px;
  transition: all 0.3s ease;

  &:hover {
    background: #c0daec;
  }
`;

export const Image = styled.img`
  width: 70px;
  height: 100px;
  margin-right: 20px;
`;

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

export const ContentTitle = styled.p`
  font-size: 1rem;
  margin-bottom: 1rem;
`;

export const RemoveButton = styled.button`
  cursor: pointer;
  background: transparent;
  border: 2px solid #ff0000;
  color: #ff0000;
  padding: 5px 10px;
  border-radius: 2px;
  transition: all 0.4s ease;

  &:hover {
    background: #ff0000;
    color: black;
    border-radius: 5px;
  }
`;

// --------- Reviews Tab -----------------

export const ReviewTitle = styled.p`
  font-size: 1.5rem;
  color: #003f7d;
  text-align: center;
  padding-bottom: 1.5rem;
  border-bottom: 1px solid #003f7d;
`;

export const ReviewContainer = styled.div`
  display: flex;
  border-bottom: 1px solid #003f7d;
  padding: 10px 0;
`;

export const Review = styled.p`
  font-size: 1rem;
  margin-right: 2rem;
  flex-grow: 1;
`;
