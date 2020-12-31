import styled from "styled-components";

export const Wrapper = styled.div`
  width: 100%;
  height: 100vh;
  margin-top: 2%;
`;
export const Container = styled.div`
  display: flex;
  margin: 0 15%;
  font-size: 3rem;
  justify-content: center;
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
`;

export const InfoWrapper = styled.div`
  width: 80%;
  position: relative;
  bottom: 50px;
`;
export const SubTitle = styled.p`
  color: #111d5e;
  margin: 3% 0;
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
`;
export const ImgWrapper = styled.div``;
export const Img = styled.img``;
