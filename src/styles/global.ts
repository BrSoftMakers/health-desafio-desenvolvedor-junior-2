import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`

*{
  margin: 0;
  padding: 0;
  border: none;
  box-sizing: border-box;
  text-decoration: none;
  font-size: 1.6rem;
  font-family: 'Poppins', sans-serif;
}
body, input, button, textarea{
  outline: none;
}
img{
  max-width: 100%;
  display: block;
}
html{
  font-size: 62.5%;
}
button, a{
  cursor: pointer;
  transition: filter 0.2s;
}
button:hover, a:hover{
 filter: brightness(0.9);
}
a{
  text-decoration: none;
}

@media (max-width: 600px) {
  html {
    font-size: 77.5%;
  }}

`;
