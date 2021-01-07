import React from "react";
import { useDispatch } from "react-redux";
import {
  Container,
  Item,
  Section,
  ImgWrapper,
  Title,
  Price,
  Wrapper,
  Qty,
  EmptyCart,
  CheckOut,
  CartActions,
  TotalPrice,
  TotalWrapper,
  TotalItems,
  Content,
  To,
} from "./cartItems.elements";
import Image from "next/image";
import { MdAddCircleOutline } from "react-icons/md";
import { GrSubtractCircle } from "react-icons/gr";
import { removeCart, updateCart } from "../../../store/cartActions";

const CartItems = ({ cart, setDisplayCart }) => {
  const dispatch = useDispatch();

  function handleEmptyCart() {
    setDisplayCart(false);
    dispatch(removeCart());
  }

  function handleUpdateCart(id, quantity) {
    dispatch(updateCart(id, quantity));
  }

  if (cart) {
    if (cart.line_items.length === 0) {
      return (
        <Container>
          <p>Your Cart is empty, Try adding something delicious to it</p>
        </Container>
      );
    }
  }

  return (
    <>
      {cart && (
        <>
          <Container>
            {cart.line_items.map((product) => (
              <Item key={product.id}>
                <ImgWrapper>
                  <Image
                    src={product.media.source}
                    width={70}
                    height={70}
                    alt={product.product_name}
                  />
                </ImgWrapper>
                <Wrapper>
                  <Section>
                    <Content>
                      <Title>{product.product_name}</Title>
                      <Price>{`${
                        product.price.raw * product.quantity
                      } USD`}</Price>
                    </Content>
                  </Section>
                  <Section>
                    <Wrapper>
                      <Qty>{`Qty: ${product.quantity}`}</Qty>
                    </Wrapper>
                    <Wrapper>
                      <MdAddCircleOutline
                        onClick={() =>
                          handleUpdateCart(product.id, product.quantity + 1)
                        }
                        style={{ marginRight: "10px", cursor: "pointer" }}
                      />
                      <GrSubtractCircle
                        onClick={() =>
                          handleUpdateCart(product.id, product.quantity - 1)
                        }
                        style={{ cursor: "pointer" }}
                      />
                    </Wrapper>
                  </Section>
                </Wrapper>
              </Item>
            ))}
          </Container>
          <TotalWrapper>
            <TotalItems>{`total items: ${cart.total_items}`}</TotalItems>
            <TotalPrice>{`subtotal: ${cart.subtotal.formatted_with_code}`}</TotalPrice>
          </TotalWrapper>
          <CartActions>
            <EmptyCart onClick={handleEmptyCart}>Empty cart</EmptyCart>
            <CheckOut href="/checkout" forwardedAs="checkout" passHref>
              <To>checkout</To>
            </CheckOut>
          </CartActions>
        </>
      )}
    </>
  );
};

export default CartItems;
