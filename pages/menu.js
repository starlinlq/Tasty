import React from "react";
import { Layout } from "../components";
import { Item } from "../components";
import commerce from "../commerce/commerce";
import { MenuHeader } from "../components";
import { Container, Title } from "../globalStyles/global.elements";

const menu = ({ data }) => {
  return (
    <Layout>
      <>
        <MenuHeader />
        <Title>Menu</Title>
        <Container>
          {data.map((data) => (
            <Item product={data} key={data.id} />
          ))}
        </Container>
      </>
    </Layout>
  );
};

export async function getStaticProps() {
  const data = await commerce.products.list().then((product) => product.data);
  return { props: { data } };
}
export default menu;
