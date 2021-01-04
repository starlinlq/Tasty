import React, { useState, useEffect } from "react";
import { WiMoonAltWaningCrescent1 } from "react-icons/wi";
import { GiShoppingCart } from "react-icons/gi";
import { GiHamburgerMenu } from "react-icons/gi";
import {
  Nav,
  NavWrapper,
  Container,
  TitleWrapper,
  Title,
  Item,
  Icons,
  SingleIcon,
  MobileMenu,
  Count,
  Cart,
  Section,
  Wrapper,
} from "./navbar.elements";
import { useSelector } from "react-redux";
import CartItems from "./shoppingCart/CartItems";

export default function NavBar() {
  const [active, setActive] = useState(false);
  const [nav, setNav] = useState(false);
  const { cart } = useSelector((store) => store);
  const [displayCart, setDisplayCart] = useState(false);

  const changeBackground = () => {
    if (window.scrollY > 10) {
      setNav(true);
    } else {
      setNav(false);
    }
  };

  function handleActive() {
    if (displayCart) {
      setDisplayCart(false);
    }
    setActive(!active);
  }

  function handleDisplayCart() {
    if (active) {
      setActive(false);
    }
    setDisplayCart(!displayCart);
  }
  console.log(cart, "hey");

  useEffect(function () {
    window.addEventListener("scroll", changeBackground);
  }, []);

  return (
    <NavWrapper onscroll={nav}>
      <Nav>
        <TitleWrapper>
          <Title>Tasty</Title>
        </TitleWrapper>
        <Container active={active}>
          <Item>Home</Item>
          <Item>Menu</Item>
          <Item>About</Item>
          <Item>Services</Item>
          <Item>Contact us</Item>
        </Container>
        <Icons>
          <SingleIcon>
            <WiMoonAltWaningCrescent1 />
          </SingleIcon>
          <Cart>
            <Section onClick={handleDisplayCart}>
              <GiShoppingCart />
              {cart && cart.line_items.length > 0 && (
                <Count>{cart.line_items.length}</Count>
              )}
            </Section>
            <Wrapper active={displayCart}>
              <CartItems cart={cart} setDisplayCart={setDisplayCart} />
            </Wrapper>
          </Cart>
          <MobileMenu onClick={handleActive}>
            <GiHamburgerMenu />
          </MobileMenu>
        </Icons>
      </Nav>
    </NavWrapper>
  );
}
