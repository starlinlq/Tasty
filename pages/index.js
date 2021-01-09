import React, { useEffect, useState, useRef } from "react";
import { Header, Services, Menu, Layout } from "../components";
import commerce from "../commerce/commerce";
import data from "./assets/data";
import { useDispatch } from "react-redux";
import { DivAnimate } from "../globalStyles/global.elements";

export default function Home({ product, cart, categories }) {
  const [show, doShow] = useState({
    itemOne: false,
    itemTwo: false,
    itemThree: false,
  });
  const ourRef = useRef(null),
    anotherRef = useRef(null),
    refThree = useRef(null);
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
  useEffect(() => {
    const topPos = (element) => element.getBoundingClientRect().top;
    const div1Pos = topPos(ourRef.current),
      div2Pos = topPos(anotherRef.current),
      div3Pos = topPos(refThree.current);

    const onScroll = () => {
      const scrollPos = window.scrollY + window.innerHeight;
      if (div1Pos < scrollPos) {
        doShow((state) => ({ ...state, itemOne: true }));
      } else if (div2Pos < scrollPos) {
        doShow((state) => ({ ...state, itemTwo: true }));
      } else if (div3Pos < scrollPos) {
        doShow((state) => ({ ...state, itemThree: true }));
      }
    };

    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <Layout>
      <Header data={data.obj1} />
      <DivAnimate animate={show.itemThree} ref={refThree}>
        {" "}
        <Header data={data.obj2} />
      </DivAnimate>
      <DivAnimate animate={show.itemTwo} ref={anotherRef}>
        {" "}
        <Services />
      </DivAnimate>
      <DivAnimate animate={show.itemOne} ref={ourRef}>
        {" "}
        <Menu content={weekMenu} />
      </DivAnimate>
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
