import React from "react";
import stripHtml from "string-strip-html";
import {
  Container,
  Section,
  ImgWrapper,
  Title,
  P,
  Cart,
  Wrapper,
} from "./item.elements";
import Image from "next/image";
import { MdAddShoppingCart } from "react-icons/md";
import { addToCart } from "../../store/cartActions";
import { useDispatch } from "react-redux";

const Item = ({ product }) => {
  const dispatch = useDispatch();
  const { result } = stripHtml(product.description);
  function handleAddToCart(id) {
    dispatch(addToCart(id));
  }
  return (
    <Container key={product.id}>
      <ImgWrapper>
        <Image src={product.media.source} width={180} height={180} />
      </ImgWrapper>
      <Section>
        <Title>{product.name}</Title>
        <P>{result}</P>
      </Section>
      <Wrapper>
        <P>{product.price.formatted_with_code}</P>
        <Cart onClick={() => handleAddToCart(product.id)}>
          <MdAddShoppingCart />
        </Cart>
      </Wrapper>
    </Container>
  );
};

export default Item;
