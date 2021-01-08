import React from "react";
import {
  Wrapper,
  Container,
  Price,
  Title,
  Quantity,
  Section,
} from "./review.elements";

const Review = ({ data }) => {
  const { live } = data;

  return (
    <Container>
      <Section>
        {live.line_items.map((product) => (
          <Wrapper key={product.id}>
            <Section>
              <Title>{product.name}</Title>
              <Quantity>{`Quantity: ${product.quantity}`}</Quantity>
            </Section>
            <Section>
              <Price>{product.price.formatted_with_code}</Price>
            </Section>
          </Wrapper>
        ))}
      </Section>
      <Section>
        <Title>Total</Title>
        <Price>{live.total.formatted_with_code}</Price>
      </Section>
    </Container>
  );
};

export default Review;
