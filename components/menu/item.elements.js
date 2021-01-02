import styled from "styled-components";
export const Container = styled.div`
  margin: 5% 2%;
  display: flex;
  flex-direction: column;
  align-items: center;
  font-size: 1.1rem;
  box-shadow: 0 2px 4px rgba(3, 74, 40, 0.15);
  padding: 2rem 1rem;
  border-radius: 0.5rem;
  width: 250px;
  position: relative;
  border-radius: 7px;
`;
export const ImgWrapper = styled.div``;
export const Section = styled.div``;
export const Title = styled.h3``;
export const P = styled.p`
  margin: 3% 0;
  width: 230px;
`;
export const Cart = styled.div`
  font-size: 25px;
  background-color: #81b214;
  padding: 5px 15px;
  border-top-left-radius: 7px;
  border-bottom-right-radius: 7px;
  cursor: pointer;
  position: absolute;
  bottom: 0;
  right: 0;
  border: 1px solid white;
  transition: all 0.2s ease-out;

  &:hover {
    transition: all 0.3s ease-in-out;
    background-color: white;
    border-color: #81b214;
  }
`;
export const Wrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 230px;
`;
