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
  About,
  Wrapper1,
  To,
} from "./header.elements";
import Image from "next/image";

const Header = ({ data }) => {
  return (
    <Wrapper>
      <Container font={data.fontSize}>
        <Section order={data.order} padding={data.padding}>
          <InfoWrapper>
            {data.about ? <About>About us</About> : null}
            <Title color={data.color}>{data.title}</Title>
            <SubTitle>{data.subTitle}</SubTitle>
            <Menu href="/menu" forwardedAs="/menu" passHref>
              <To>{data.button}</To>
            </Menu>
          </InfoWrapper>
        </Section>
        <ImgWrapper order={data.order} padding={data.padding}>
          <Wrapper1>
            <Image
              src={data.img}
              alt="food"
              width={data.size}
              height={data.size}
            />
          </Wrapper1>
        </ImgWrapper>
      </Container>
    </Wrapper>
  );
};

export default Header;
