import React from "react";
import Item from "./Item";
import dish from "../../assets/svg/dish.svg";
import {
  Container,
  Wrapper,
  Section,
  Title,
  P,
  Sec,
} from "./services.elements";
import { food, food2, food3 } from "./data";

const Services = () => {
  return (
    <Wrapper>
      <Sec>
        <Section>
          <P>Oferring</P>
          <Title>Our amazing services</Title>
        </Section>

        <Container>
          <Item data={food} />
          <Item data={food2} />
          <Item data={food3} />
        </Container>
      </Sec>
    </Wrapper>
  );
};

export default Services;
