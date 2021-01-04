import styled from "styled-components";

export const Container = styled.div`
  max-height: 300px;
  overflow-y: auto;
`;
export const Item = styled.div`
  display: flex;
  align-items: center;
  font-size: 18px;
  padding: 5px 0;
`;
export const ImgWrapper = styled.div``;
export const Section = styled.div`
  display: flex;
  margin-left: 10px;
`;
export const Title = styled.p`
  padding-right: 10px;
  font-weight: bold;
`;

export const Price = styled.p``;

export const Content = styled.div`
  display: flex;
  width: 300px;
  justify-content: space-between;
`;

export const Wrapper = styled.div``;

export const Qty = styled.p`
  padding-right: 15px;
`;

export const EmptyCart = styled.button`
  position: relative;
  padding: 1em 1.5em;
  border: none;
  background-color: transparent;
  cursor: pointer;
  outline: none;
  font-size: 18px;
  margin: 1em 0.8em;

  &:after,
  &:before {
    content: "";
    display: block;
    position: absolute;
    width: 20%;
    height: 20%;
    border: 2px solid;
    transition: all 0.6s ease;
    border-radius: 2px;
  }
  &:after {
    bottom: 0;
    right: 0;
    border-top-color: transparent;
    border-left-color: transparent;
    border-bottom-color: #566473;
    border-right-color: #566473;
  }
  &:before {
    top: 0;
    left: 0;
    border-bottom-color: transparent;
    border-right-color: transparent;
    border-top-color: #566473;
    border-left-color: #566473;
  }

  &:hover:after,
  &:hover:before {
    width: 100%;
    height: 100%;
  }
`;
export const CheckOut = styled(EmptyCart)``;
export const CartActions = styled.div`
  display: flex;
  justify-content: space-evenly;
  margin-top: 10px;
`;
export const TotalPrice = styled.p`
  display: inline-block;
  margin: 10px 0;
`;
export const TotalItems = styled(TotalPrice)`
  padding-right: 15px;
`;
export const TotalWrapper = styled.div`
  font-size: 17px;
  text-align: center;
`;
