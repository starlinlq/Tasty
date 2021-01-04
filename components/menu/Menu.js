import React from "react";
import Item from "./Item";
import { Container, Section, Wrapper, Title, P } from "./menu.elements";

export default function Menu({ content }) {
  return (
    <Wrapper>
      <Section>
        <P>Special</P>
        <Title>Menu of the week</Title>
      </Section>
      <Container>
        {content &&
          content.map((data) => <Item product={data} key={data.id} />)}
      </Container>
    </Wrapper>
  );
}
