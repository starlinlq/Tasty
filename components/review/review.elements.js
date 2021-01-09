import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
`;
export const Wrapper = styled.div`
  display: flex;
  justify-content: space-between;
`;

export const Title = styled.h4`
  color: ${(props) => props.theme.title};
`;
export const Quantity = styled.p`
  color: ${(props) => props.theme.fontColor};
`;
export const Price = styled(Quantity)``;
export const Section = styled.div`
  margin: 2%;
  max-height: 300px;
  overflow-y: auto;
`;
