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
} from "./navbar.elements";

export default function NavBar() {
  const [active, setActive] = useState(false);
  const [nav, setNav] = useState(false);

  const changeBackground = () => {
    if (window.scrollY > 10) {
      setNav(true);
    } else {
      setNav(false);
    }
  };

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
          <SingleIcon>
            <GiShoppingCart />
          </SingleIcon>
          <MobileMenu onClick={() => setActive(!active)}>
            <GiHamburgerMenu />
          </MobileMenu>
        </Icons>
      </Nav>
    </NavWrapper>
  );
}
