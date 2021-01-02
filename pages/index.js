import React, { useEffect, useState } from "react";
import { NavBar, Header, Services, Menu } from "../components";
import commerce from "../commerce/commerce";
import data from "./assets/data";

export default function Home({ res }) {
  /*   useEffect(() => {
    const cart = commerce.cart.retrieve().then((cart) => cart);
    console.log(cart);
  }, []); */
  return (
    <>
      <NavBar />
      <Header data={data.obj1} />
      <Header data={data.obj2} />
      <Services />
      <Menu content={res} />
    </>
  );
}

export async function getStaticProps() {
  const res = await commerce.products.list().then((product) => product.data);

  if (!res) {
    return {
      notFound: true,
    };
  }

  return {
    props: { res },
  };
}
