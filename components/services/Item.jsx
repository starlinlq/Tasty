import React from "react";
import { Container, Section, Title, Subtitle, Wrapper } from "./item.elements";
import Image from "next/image";

const Item = () => {
  return (
    <Wrapper>
      <Container>
        <Section>
          <Image
            src="https://firebasestorage.googleapis.com/v0/b/firegram-2b8d8.appspot.com/o/dish.png?alt=media&token=eeacd8d7-afd0-4655-a455-c5e2e73a797a"
            width={110}
            height={110}
          />
        </Section>
        <Title>Excellent food</Title>
        <Subtitle>
          We offer our clients excellent quality services for many years, with
          the best and delicious food in the city.
        </Subtitle>
      </Container>
    </Wrapper>
  );
};

export default Item;
