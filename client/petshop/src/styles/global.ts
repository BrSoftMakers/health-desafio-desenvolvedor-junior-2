import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
  }

  body {
    height: 100vh;
    width: 100vw;
    background-color: #E2E8F0;
    font-family: Roboto;
  }

  #root {
    height: 100%;
    width: 100%;
  }
`;

export default GlobalStyle;
