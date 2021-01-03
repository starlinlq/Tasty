import React, { useEffect, useState } from "react";
import { NavBar, Header, Services, Menu } from "../components";
import commerce from "../commerce/commerce";
import data from "./assets/data";
import { useSelector, useDispatch } from "react-redux";
import axios from "axios";

export default function Home({ product, cart }) {
  const dispatch = useDispatch();
  const storeProducts = useSelector((store) => store.products);

  useEffect(function () {
    dispatch({ type: "STORE_PRODUCTS", payload: product });
    dispatch({ type: "RETRIEVE_CART_SUCCESS", payload: cart });
  }, []);

  return (
    <>
      <NavBar />
      <Header data={data.obj1} />
      <Header data={data.obj2} />
      <Services />
      <Menu content={storeProducts} />
    </>
  );
}

export async function getStaticProps() {
  const product = await commerce.products
    .list()
    .then((product) => product.data);
  const url = new URL("https://api.chec.io/v1/carts");
  let headers = {
    "X-Authorization": process.env.customKey,
    Accept: "application/json",
    "Content-Type": "application/json",
  };

  const cart = await fetch(url, {
    method: "GET",
    headers: headers,
  })
    .then((res) => res.json())
    .then((json) => json);

  if (!product || !cart) {
    return {
      notFound: true,
    };
  }
  return {
    props: { product, cart },
  };
}
