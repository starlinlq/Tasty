import styled, { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
  *{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  body{
    background-color: ${(props) => props.theme.body}
  }
`;

export const Container = styled.div`
  display: flex;
  justify-content: space-between;
  flex-flow: wrap;
  margin: 0 15%;
  background-color: ${(props) => props.theme.containerColor};

  @media screen and (max-width: 800px) {
    justify-content: center;
    align-items: center;
    margin: 0 1%;
  }
`;

export const InputWrapper = styled.div`
  margin-right: 5%;
  padding: 3% 0;
  @media (max-width: 800px) {
    width: 100%;
    margin: 0;
  }
`;

export const Span = styled.span`
  display: block;
  color: red;
`;
export const Button = styled.button`
  margin-top: 3%;
  margin-left: 2%;
  margin-right: 10px;
  background-color: white;
  border: 1px solid black;
  padding: 10px 50px;
  border-radius: 4px;
  cursor: pointer;

  &:hover {
    border-color: grey;
  }
`;
export const Submit = styled.input`
  background-color: white;
  border: 1px solid black;
  padding: 10px 50px;
  border-radius: 4px;
  cursor: pointer;
  position: absolute;
  bottom: -35px;
  left: 0;

  &:hover {
    border-color: grey;
  }
`;
export const Title = styled.h1`
  margin: 0 15%;
  padding: 2% 0;
  text-align: center;
  color: ${(props) => props.theme.title};
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
  position: relative;
  display: flex;
  flex-wrap: wrap;
  margin: 0 2%;
`;
export const Wrapper = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 700px;
  min-height: 600px;
  background-color: ${(props) => props.theme.containerColor};

  box-shadow: 0 2px 4px rgba(3, 74, 40, 0.15);

  @media (max-width: 800px) {
    align-items: center;
  }
`;
export const Input = styled.input`
  width: 250px;
  border-top: none;
  border-left: none;
  border-right: none;
  border-bottom: 1px solid grey;
  padding: 10px 0;

  font-size: 1rem;

  @media (max-width: 800px) {
    width: 100%;
  }

  &:active {
    border-color: lightblue;
  }
`;
export const Label = styled.label`
  display: block;
`;

export const StepSection = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 5% 2%;
`;
export const Pa = styled.p`
  font-size: ${({ fontSize }) => fontSize};
  margin: 0 2%;
  padding: 2% 0;
  color: ${(props) => props.theme.fontColor};
`;
export const Hr = styled.hr`
  height: 1px;
  width: 40%;
`;

export const Display1 = styled.div`
  display: ${({ step1 }) => (step1 ? "flex" : "none")};
  @media (max-width: 800px) {
    justify-content: center;
  }

  flex-wrap: wrap;
`;
export const Display2 = styled.div`
  display: ${({ step2 }) => (step2 ? "flex" : "none")};

  flex-wrap: wrap;
`;

export const DivAnimate = styled.div`
  transform: translateX(${({ animate }) => (animate ? "0" : "-100vw")});
  transition: transform 1s;
`;
export const MenuWrapper = styled.div`
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
