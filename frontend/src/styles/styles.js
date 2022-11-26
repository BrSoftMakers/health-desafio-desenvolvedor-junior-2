import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  body {
    background-color: #d1d1d1;
    overflow-x: hidden;
    width: 100vh;
    font-family: 'Poppins', sans-serif;
  }
`;