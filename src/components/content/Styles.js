import styled from "styled-components";

export const Card = styled.div`
  background: #003f7d;
  box-shadow: 0px 0px 20px 10px rgba(213, 237, 255, 0.9);
  border-radius: 5px;
  padding: 2rem;
  max-width: 1000px;
  margin: 50px auto;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const Title = styled.p`
  font-size: 1.8rem;
  color: #0081ff;
  text-align: center;
  padding-bottom: 1rem;
`;

export const Container = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 2rem;
`;

export const ImageContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const Image = styled.img`
  width: 220px;
  height: 320px;
`;

export const AddToWatchListButton = styled.button`
  width: 100%;
  border-radius: 5px;
  background: #ff5003;
  padding: 5px;
  color: white;
  border: 2px solid #ff5003;
  font-size: 1rem;
  margin: 15px 0;
  cursor: pointer;
`;

export const RemoveFromWatchListButton = styled.button`
  width: 100%;
  border-radius: 5px;
  background: transparent;
  padding: 5px;
  color: #ff5003;
  border: 2px solid #ff5003;
  font-size: 1rem;
  margin: 15px 0;
  cursor: pointer;
`;

export const NotWatchedButton = styled.button`
  width: 100%;
  border-radius: 5px;
  background: #ff8e00;
  padding: 5px;
  color: white;
  border: 2px solid #ff8e00;
  font-size: 1rem;
  cursor: pointer;
`;

export const WatchedButton = styled.button`
  width: 100%;
  border-radius: 5px;
  background: transparent;
  padding: 5px;
  color: #ff8e00;
  border: 2px solid #ff8e00;
  font-size: 1rem;
`;

export const DataContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  justify-content: center;
  gap: 2rem;
  padding: 2rem 0;
`;

export const ColumContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

export const DataTitle = styled.p`
  font-size: 1.5rem;
  color: #0081ff;
  text-align: center;
`;

export const Data = styled.p`
  color: white;
  font-size: 1.5rem;
  text-align: center;
  padding-top: 8px;
`;

export const CastContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(100px, 1fr));
  gap: 1rem;
  width: 100%;
`;
