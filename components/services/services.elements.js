import styled from "styled-components";
export const Container = styled.div`
  display: flex;
  margin: 0 15%;
  margin-top: 3%;

  @media screen and (max-width: 800px) {
    flex-direction: column;
    margin: 0 1%;
    align-items: center;
  }
`;
export const Section = styled.div`
  text-align: center;
  font-size: 1.3rem;

  @media screen and (max-width: 800px) {
    margin: 5% 0;
  }
`;
export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin-bottom: 10%;
  margin-top: 3%;
`;

export const Title = styled.h1``;
export const P = styled.p`
  color: #54e346;
`;
