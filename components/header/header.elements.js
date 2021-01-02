import styled from "styled-components";

export const Wrapper = styled.div`
  width: 100%;
  position: relative;
  padding-top: 5%;
  height: 100vh;
  @media screen and (max-width: 1100px) {
    height: 100%;
  }
  @media screen and (max-width: 800px) {
    padding-top: 1%;
    height: 100%;
  }
  @media screen and (max-width: 500px) {
    padding-top: 10%;
    height: 100vh;
  }
`;
export const Container = styled.div`
  display: flex;
  margin: 0 15%;

  font-size: ${({ font }) => font};
  justify-content: center;

  @media screen and (max-width: 800px) {
    flex-direction: column;
  }

  @media screen and (max-width: 1200px) {
    font-size: 1.5rem;
    margin: 1%;
  }

  @media screen and (max-width: 500px) {
    margin: 0 3%;
    font-size: 1.5rem;
  }
`;
export const Title = styled.h1`
  color: ${({ color }) => color};
  margin: 0;
`;
export const Section = styled.div`
  order: ${({ order }) => (order ? 2 : 1)};
  width: 45%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  padding-left: ${({ padding }) => (padding ? "4%" : "0")};

  @media screen and (max-width: 800px) {
    width: 100%;
    padding: 0;
    text-align: center;
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
  color: #707070;
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
export const ImgWrapper = styled.div`
  order: ${({ order }) => (order ? 1 : 2)};
  padding-right: ${({ padding }) => (padding ? "4%" : 0)};

  @media screen and(max-width:800px) {
    padding: 0;
  }
`;

export const About = styled.p`
  color: #54e346;
`;

export const Wrapper1 = styled.div`
  display: flex;
  justify-content: center;
`;
