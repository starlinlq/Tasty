import React from "react";
import { Container, Section, Title, Subtitle, Wrapper } from "./item.elements";
import Image from "next/image";

const Item = ({ data }) => {
  return (
    <Wrapper>
      <Container>
        <Section>
          <Image src={data.link} width={150} height={150} />
        </Section>
        <Title>{data.title}</Title>
        <Subtitle>{data.sub}</Subtitle>
      </Container>
    </Wrapper>
  );
};

export default Item;
