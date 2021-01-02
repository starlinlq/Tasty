import styled from "styled-components";
import { NavBar, Header } from "../components";
import data from "./assets/data";

const Title = styled.h1`
  font-size: 50px;
  color: ${({ theme }) => theme.colors.primary};
`;

export default function Home() {
  console.log(data);
  return (
    <>
      <NavBar />
      <div>
        <Header data={data.obj1} />
        <Header data={data.obj2} />
      </div>
    </>
  );
}
