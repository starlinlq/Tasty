import styled from "styled-components";
export const Container = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  text-align: center;

  @media screen and (max-width: 800px) {
    font-size: 1.2rem;
  }
`;
export const Wrapper = styled.div`
  margin: 0 1%;
  @media screen and (max-width: 800px) {
    margin: 10% 1%;
  }
`;
export const Section = styled.div``;
export const Title = styled.h2`
  padding: 5% 0;
  color: ${(props) => props.theme.titleColor};
`;
export const Subtitle = styled.p`
  color: ${(props) => props.theme.fontColor};
`;
