import styled from "styled-components";

export const Nav = styled.div`
  display: flex;
  margin: 0 10%;
  justify-content: space-between;
  color: #30475e;
  position: relative;
`;
export const NavWrapper = styled.div``;
export const TitleWrapper = styled.div``;
export const Title = styled.h2``;
export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 60%;

  @media screen and (max-width: 800px) {
    display: ${({ active }) => (active ? "flex" : "none")};
    color: white;
    position: absolute;
    top: 50px;
    flex-direction: column;
    width: 100%;
    margin-top: 4%;
    background-color: #30475e;
    border-radius: 7px;
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

  &:hover {
    color: black;
  }

  @media screen and (max-width: 800px) {
    margin: 2% 0;
  }
`;
