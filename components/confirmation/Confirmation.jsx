import React from "react";
import { Container, Home, To, Pa, Title } from "./confirmation.elements";
const Confirmation = ({ data }) => {
  return (
    <Container>
      <Title>{`Thank you for your order ${data.customer.firstname}`}</Title>
      <Pa>{`Order ref: ${data.customer_reference}`}</Pa>
      <br />
      <Home href="/" forwardedAs="/" passHref>
        <To>Back home</To>
      </Home>
    </Container>
  );
};

export default Confirmation;
