import styled from "styled-components";
export const Container = styled.div`
  display: flex;
  justify-content: space-between;
  flex-flow: wrap;
  margin: 0 15%;

  @media screen and (max-width: 800px) {
    justify-content: center;
    align-items: center;
    margin: 0 1%;
  }
`;

export const Title = styled.h1`
  margin: 0 15%;
  padding: 2% 0;

  @media (max-width: 800px) {
    margin: 0 5%;
  }
`;
export const Section = styled.div`
  display: flex;
  height: 100vh;
  width: 100vw;
  justify-content: center;
  align-items: center;
`;
export const Form = styled.form`
  display: flex;
  flex-direction: column;
`;
export const Wrapper = styled.div``;
export const Input = styled.input``;
export const Label = styled.label`
  display: block;
`;
