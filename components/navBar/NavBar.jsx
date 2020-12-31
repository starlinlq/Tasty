import React, { useState } from "react";
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

const NavBar = () => {
  const [active, setActive] = useState(false);

  return (
    <NavWrapper>
      <Nav>
        <TitleWrapper>
          <Title>TasTy</Title>
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
};

export default NavBar;
