import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 15px;
  @media (max-width: 800px) {
    height: 100vh;
    margin-top: 3px;
  }
`;
export const Wrapper = styled.div`
  margin: 0 15%;

  display: flex;
  justify-content: center;

  @media (max-width: 800px) {
    flex-direction: column;
    margin: 0 5%;
  }
`;
export const Section = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1.5rem;
`;
export const ImgWrapper = styled.div`
  padding-top: 5%;
`;
export const Title = styled.h1`
  color: #54e346;
`;
