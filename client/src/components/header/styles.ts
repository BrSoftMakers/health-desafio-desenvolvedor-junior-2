import styled from "styled-components";

export const Header = styled.header`
  background-color: #fffaf5;
  padding: 1em;
  width: 100vw;

  nav {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
  hr {
    margin: 1em 0em;
  }
  .links {
    display: flex;
    justify-content: flex-start;
    width: 100%;
  }
  .link {
    margin-left: 1em;
    text-decoration: none;
  }

  .nav--icon {
    font-size: 2em;
    margin-right: 1em;
  }
  .search--icons {
    display: flex;
  }
`;
