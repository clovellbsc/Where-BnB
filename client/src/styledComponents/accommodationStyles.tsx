import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  justify-content: space-evenly;
  flex-direction: column;
  align-items: center;
  height: 80%;
  width: 40%;
  max-width: 100vw;
  max-height: 100vh;
`;

export const ImageContainer = styled.div`
  display: flex;
  align-items: center;
`;

export const Image = styled.img`
  width: 100%;
  height: 100%;
  border-radius: 4px;
  max-width: 100vw;
  max-height: 100vh;
`;

export const Body = styled.div`
  display: flex;
  flex-direction: row;
  width: 100%;
  height: 30%;
`;

export const AccommodationDetails = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: start;
  width: 50%;
  word-wrap: break-word;
`;

export const Rating = styled.div`
  display: flex;
  justify-content: end;
  flex-wrap: nowrap;
  width: 50%;
  word-wrap: break-word;
`;

export const Text = styled.p`
  font: Montserrat;
  margin: 0;
  padding: 0;
  margin-block-start: 0;
  margin-block-end: 0;
`;
