import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
    * {
        margin:0;
        padding: 0;
        outline:0;
        box-sizing: border-box;
        font-family: 'Inter', sans-serif;
        text-decoration: none;
    }

    button, select, option{
        font-family: 'Inter', sans-serif;
        cursor: pointer;
        color: #000000;
    }

    ul, ol, li, a {
        list-style: none;  
        color: #000000     
    }

`;
