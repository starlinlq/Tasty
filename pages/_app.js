import { createGlobalStyle, ThemeProvider } from "styled-components";
import "./_app.css";
import { wrapper } from "../store/index";
import commerce from "../commerce/commerce";
import { useDispatch } from "react-redux";

const GlobalStyle = createGlobalStyle`
  *{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
`;

const theme = {
  colors: {
    primary: "#0070f3",
  },
};

function App({ Component, pageProps }) {
  return (
    <>
      <GlobalStyle />
      <ThemeProvider theme={theme}>
        <Component {...pageProps} />
      </ThemeProvider>
    </>
  );
}

export default wrapper.withRedux(App);
