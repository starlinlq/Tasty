import React from "react";
import {
  Container,
  Wrapper,
  Section,
  Title,
  ImgWrapper,
} from "./menu.header.elements";
import Image from "next/image";

const MenuHeader = () => {
  return (
    <Container>
      <Wrapper>
        <ImgWrapper>
          <Image
            src="https://firebasestorage.googleapis.com/v0/b/firegram-2b8d8.appspot.com/o/2.png?alt=media&token=66b01780-700c-4fa7-aa5d-9a0054b50cbe"
            width={400}
            height={400}
          />
        </ImgWrapper>
        <Section>
          <Title>Freshly made with love</Title>
        </Section>
      </Wrapper>
    </Container>
  );
};

export default MenuHeader;
