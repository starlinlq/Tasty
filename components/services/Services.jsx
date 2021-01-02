import React from "react";
import Item from "./Item";
import Dish from "../../assets/svg/dish.svg";
import { Container, Wrapper, Section, Title, P } from "./services.elements";

const Services = () => {
  return (
    <Wrapper>
      <Section>
        <P> Oferring</P>
        <Title>Our amazing services</Title>
      </Section>
      <Container>
        <Item />
        <Item />
        <Item />
      </Container>
    </Wrapper>
  );
};

export default Services;
