import styled from "styled-components";

export const Nav = styled.div`
  display: flex;
  margin: 0 10%;
  justify-content: space-between;
  color: #30475e;
  position: relative;
  padding: 15px 0;

  @media screen and (max-width: 800px) {
    margin: 0;
  }
  @media screen and (max-width: 1200px) {
    margin: 0 1%;
  }
`;
export const NavWrapper = styled.div`
  position: fixed;
  width: 100%;
  z-index: ${({ onscroll }) => (onscroll ? 999 : 1)};
  box-shadow: ${({ onscroll }) => (onscroll ? "0 4px 2px -2px #d5d5d5" : 0)};
  background-color: white;
`;
export const TitleWrapper = styled.div`
  @media screen and (max-width: 800px) {
    margin-left: 10px;
  }
`;
export const Title = styled.h2``;
export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 60%;

  @media screen and (max-width: 800px) {
    visibility: ${({ active }) => (active ? "visible" : "hidden")};
    opacity: ${({ active }) => (active ? "1" : "0")};
    transition: ${({ active }) =>
      active ? " opacity 0.5s" : "all 0.3s ease-out"};
    color: black;
    position: absolute;
    top: 30px;
    flex-direction: column;
    width: 100%;
    margin-top: 4%;
    background-color: white;
    z-index: 999;
    border-radius: 7px;
    box-shadow: 0 4px 2px -2px #d5d5d5;
  }
`;

export const Icons = styled.div`
  font-size: 1.5rem;
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  width: 10%;

  @media screen and (max-width: 800px) {
    width: 35%;
  }
`;

export const SingleIcon = styled.div`
  cursor: pointer;

  &:hover {
    color: black;
  }
`;

export const MobileMenu = styled.div`
  display: none;
  cursor: pointer;
  @media screen and (max-width: 800px) {
    display: block;
  }
`;
export const Item = styled.p`
  padding: 0 1%;
  margin: 0 2%;
  cursor: pointer;
  font-size: 1.1rem;
  transition: height 0.5s ease-out;

  &:hover {
    transition: hight 0.5s ease-in;
    color: #54e346;
  }

  @media screen and (max-width: 800px) {
    margin: 2% 0;
  }
`;
