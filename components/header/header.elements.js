import styled from "styled-components";

export const Wrapper = styled.div`
  width: 100%;
  height: 100vh;
  position: relative;
  padding-top: 4%;

  @media screen and (max-width: 800px) {
    padding-top: 10%;
  }
`;
export const Container = styled.div`
  display: flex;
  margin: 0 15%;

  font-size: 3rem;
  justify-content: center;

  @media screen and (max-width: 800px) {
    flex-direction: column;
  }

  @media screen and (max-width: 1200px) {
    font-size: 2rem;
    margin: 5%;
  }

  @media screen and (max-width: 500px) {
    margin: 0 3%;
    font-size: 1.5rem;
  }
`;
export const Title = styled.h1`
  color: #54e346;
  margin: 0;
`;
export const Section = styled.div`
  width: 45%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;

  @media screen and (max-width: 800px) {
    width: 90%;
  }
`;

export const InfoWrapper = styled.div`
  position: relative;
  bottom: 50px;

  @media screen and (max-width: 800px) {
    bottom: 0;
    width: 100%;
    padding: 10% 0;
  }
`;
export const SubTitle = styled.p`
  color: #111d5e;
  margin: 3% 0;

  @media screen and (max-width: 800px) {
    margin: 5% 0;
  }
`;
export const Menu = styled.button`
  padding: 3% 7%;
  background-color: #81b214;
  border: 1px solid white;
  border-radius: 7px;
  color: white;
  cursor: pointer;
  transition: all 0.3s ease-out;

  &:hover {
    border-color: #81b214;
    background-color: white;
    color: black;
    transition: all 0.3s ease-in;
  }

  @media screen and (max-width: 800px) {
    padding: 4% 8%;
  }
`;
export const ImgWrapper = styled.div``;
export const Img = styled.img``;
