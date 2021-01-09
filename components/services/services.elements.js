import styled from "styled-components";
export const Container = styled.div`
  display: flex;
  margin: 0 15%;

  @media screen and (max-width: 800px) {
    flex-direction: column;
    margin: 0 1%;
    align-items: center;
  }
`;
export const Section = styled.div`
  text-align: center;
  font-size: 2rem;
  margin-bottom: 7%;

  @media screen and (max-width: 800px) {
    font-size: 1.3rem;
    margin: 5% 0;
  }
`;
export const Wrapper = styled.div`
  display: flex;
  margin-top: 3%;

  flex-direction: column;
  justify-content: center;
  align-items: center;
  @media screen and (max-width: 800px) {
  }
`;

export const Title = styled.h1`
  color: ${(props) => props.theme.title};
`;
export const P = styled.p`
  color: #54e346;
`;

export const Sec = styled.div``;
