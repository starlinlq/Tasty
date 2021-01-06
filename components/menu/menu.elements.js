import styled from "styled-components";
export const Container = styled.div`
  display: flex;
  justify-content: space-between;
  flex-flow: wrap;

  @media screen and (max-width: 800px) {
    justify-content: center;
    align-items: center;
    margin: 0 1%;
  }
`;

export const Section = styled.div`
  text-align: center;
  font-size: 2rem;

  @media screen and (max-width: 800px) {
    font-size: 1.3rem;
  }
`;
export const Title = styled.h1``;
export const P = styled.p`
  padding-bottom: 2%;
  color: #54e346;
`;
export const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  margin: 0 15%;

  @media screen and (max-width: 800px) {
    margin: 0 1%;
    align-items: center;
  }
`;

export const Sec = styled.div`
  width: 100%;
`;
