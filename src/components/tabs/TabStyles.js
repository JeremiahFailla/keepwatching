import styled from "styled-components";

export const Tab = styled.div`
  /* padding-left: 3rem; */
  padding: 0 1rem;
  flex-grow: 1;
  overflow-y: auto;
  overflow-x: hidden;
`;

export const Title = styled.p`
  font-size: 1.5rem;
  color: #003f7d;
  text-align: center;
  margin-bottom: 1.5rem;
`;

// ------------Account Settings Tab------------------

export const InputContainer = styled.div`
  /* display: grid;
  grid-template-columns: 150px 225px; */
  display: flex;
  padding: 1rem 0;
`;

export const AccountDescription = styled.p`
  font-size: 1rem;
  margin-bottom: 0.5rem;
  text-align: center;
`;

export const Label = styled.label`
  font-size: 1rem;
  display: flex;
  align-items: center;
  flex-grow: 1;
  white-space: nowrap;
  padding-right: 10px;
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
  text-align: center;
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

export const ErrorContainer = styled.div`
  position: relative;
  width: 100%;
`;

export const Error = styled.p`
  font-size: 0.9rem;
  text-align: center;
  color: black;
  background: red;
  padding: 5px;
  position: absolute;
  top: -20px;
  left: 0;
  width: 100%;
`;

// ----------- Watch List Tab --------------------

export const List = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 15px;
`;

export const Content = styled.div`
  display: flex;
  align-items: center;
  padding: 10px;
  border-radius: 2px;
  transition: all 0.3s ease;
  cursor: pointer;

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
  text-align: center;
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
  margin-right: 10px;
`;

export const ReviewContainer = styled.div`
  display: flex;
  border-bottom: 1px solid #003f7d;
  padding: 10px 0;
  margin-right: 10px;

  @media (max-width: 600px) {
    flex-direction: column;
  }
`;

export const ReviewTitleButtonContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  @media (max-width: 600px) {
    padding-top: 0.8rem;
    margin: 0 auto;
  }
`;

export const Review = styled.p`
  font-size: 1rem;
  margin-right: 1rem;
  flex-grow: 1;
  text-align: center;

  @media (max-width: 600px) {
    margin-right: 0;
  }
`;
