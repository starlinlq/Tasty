import React from "react";
import { NavBar } from "../";
import { Container } from "./layout.elements";
import Head from "next/head";

const Layout = ({ children }) => {
  return (
    <Container>
      <Head>
        <title>Tasty</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta charSet="utf-8" />
      </Head>
      <NavBar />
      <div>{children}</div>
    </Container>
  );
};

export default Layout;
