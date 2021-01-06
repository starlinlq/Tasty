import React from "react";
import { NavBar } from "../";
import { Container } from "./layout.elements";

const Layout = ({ children }) => {
  return (
    <Container>
      <NavBar />
      {children}
    </Container>
  );
};

export default Layout;
