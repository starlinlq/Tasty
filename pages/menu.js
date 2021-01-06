import React from "react";
import { Layout } from "../components";
import { Menu } from "../components";
import commerce from "../commerce/commerce";
import { MenuHeader } from "../components";

const menu = ({ data }) => {
  return (
    <Layout>
      <>
        <MenuHeader />
        <Menu content={data} />
      </>
    </Layout>
  );
};

export async function getStaticProps() {
  const data = await commerce.products.list().then((product) => product.data);
  return { props: { data } };
}
export default menu;
