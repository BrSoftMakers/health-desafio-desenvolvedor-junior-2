import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
    * {
        margin:0;
        padding: 0;
        outline:0;
        box-sizing: border-box;
        font-family: 'Inter', sans-serif;
    }

    button, select, option{
        font-family: 'Inter', sans-serif;
        cursor: pointer;
    }

`;
