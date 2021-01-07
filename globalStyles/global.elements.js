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

export const InputWrapper = styled.div`
  margin-right: 5%;
  padding: 3% 0;
`;

export const Span = styled.span`
  display: block;
  color: red;
`;
export const Button = styled.button`
  margin-top: 3%;
  margin-left: 2%;
  background-color: white;
  border: 1px solid black;
  padding: 10px 50px;
  border-radius: 4px;
  cursor: pointer;

  &:hover {
    border-color: grey;
  }
`;
export const Submit = styled.input``;
export const Title = styled.h1`
  margin: 0 15%;
  padding: 2% 0;
  text-align: center;

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
  flex-wrap: wrap;
  margin: 0 2%;
`;
export const Wrapper = styled.div`
  width: 600px;
  height: 500px;
  box-shadow: 0 2px 4px rgba(3, 74, 40, 0.15);
`;
export const Input = styled.input`
  width: 250px;
  border-top: none;
  border-left: none;
  border-right: none;
  border-bottom: 1px solid grey;
  padding: 10px 0;

  font-size: 1rem;

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
export const P = styled.p`
  font-size: ${({ fontSize }) => fontSize};
  margin: 0 2%;
`;
export const Hr = styled.hr`
  height: 1px;
  width: 40%;
`;
