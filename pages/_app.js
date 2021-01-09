import { createGlobalStyle, ThemeProvider } from "styled-components";
import "./_app.css";
import { wrapper } from "../store/index";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { GlobalStyle } from "../globalStyles/global.elements";
import { useSelector } from "react-redux";

const lightTheme = {
  body: "#fff",
  fontColor: "#000",
  titleColor: "#069C54",
  containerColor: "#FFFFFF",
  textColor: "#707070",
  title: "#000",
};

const darkTheme = {
  title: "#fff",
  textColorLight: "",
  body: "#1D2521",
  titleColor: "#F1F3F2",
  fontColor: " #C7D1CC",
  containerColor: "#27302C",
};

function App({ Component, pageProps }) {
  const { theme } = useSelector((store) => store);

  return (
    <>
      <ThemeProvider theme={theme ? lightTheme : darkTheme}>
        <GlobalStyle />
        <Component {...pageProps} />
      </ThemeProvider>
    </>
  );
}

export default wrapper.withRedux(App);
