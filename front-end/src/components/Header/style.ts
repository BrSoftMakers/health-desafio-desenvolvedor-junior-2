import styled from "styled-components";

export const HeaderStyled = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;

  height: 50px;
  padding: 0 10px;

  div > p {
    font-weight: 600;
    color: #175ea8;
  }

  nav {
    display: flex;
    gap: 5px;
  }

  nav > a:hover {
    color: #3db0f7;
  }

  @media (min-width: 768px) {
    padding: 0 20px;

    nav {
      gap: 15px;
    }
  }

  @media (min-width: 1024px) {
    height: 80px;
    padding: 0 30px;

    div > p,
    nav > a {
      font-size: 30px;
    }
  }
`;
