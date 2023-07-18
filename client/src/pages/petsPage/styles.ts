import styled from "styled-components";

export const Container = styled.div`
  background-color: #fffaf5;
  padding: 1em;
  width: 100%;

  @media (max-width: 768px) {
    /* Estilos para telas menores que 768px */
    max-width: 768px;
    margin: 0 auto;
  }

  h1 {
    margin-left: 0.5em;
  }

  .petslistContainer {
    display: flex;
    flex-wrap: wrap;
  }
`;
