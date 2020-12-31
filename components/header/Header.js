import React from "react";
import {
  Container,
  Title,
  Section,
  SubTitle,
  Menu,
  ImgWrapper,
  Wrapper,
  InfoWrapper,
} from "./header.elements";
import Image from "next/image";

const Header = () => {
  return (
    <Wrapper>
      <Container>
        <Section>
          <InfoWrapper>
            <Title>Tasty Food</Title>
            <SubTitle>
              Try the best food of <br />
              the week
            </SubTitle>
            <Menu>View Menu</Menu>
          </InfoWrapper>
        </Section>
        <ImgWrapper>
          <Image
            src="https://static.tildacdn.com/tild6239-6563-4039-a466-333865653161/transparent-salad-ve.png"
            alt="food"
            width={700}
            height={700}
          />
        </ImgWrapper>
      </Container>
    </Wrapper>
  );
};

export default Header;
