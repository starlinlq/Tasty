import React, { useEffect, useState } from "react";
import { NavBar, Header, Services, Menu, Layout } from "../components";
import commerce from "../commerce/commerce";
import data from "./assets/data";
import { useSelector, useDispatch } from "react-redux";

export default function Home({ product, cart, categories }) {
  const dispatch = useDispatch();
  const [weekMenu, setWeekMenu] = useState([]);

  useEffect(function () {
    const week = product.filter(
      (product) => product.categories[0].name === "weekMenu"
    );
    setWeekMenu(week);
  }, []);

  useEffect(function () {
    dispatch({ type: "STORE_PRODUCTS", payload: product });
    dispatch({ type: "RETRIEVE_CART_SUCCESS", payload: cart });
  }, []);

  return (
    <Layout>
      <Header data={data.obj1} />
      <Header data={data.obj2} />
      <Services />
      <Menu content={weekMenu} />
    </Layout>
  );
}

export async function getStaticProps() {
  const { data: product } = await commerce.products.list();
  const { data: categories } = await commerce.categories.list();

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
    props: { product, cart, categories },
  };
}
