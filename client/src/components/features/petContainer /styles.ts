import styled from "styled-components";

export const Container = styled.div`
  background-color: #edb509;
  padding: 1em;
  width: 30vw;
  margin: 1em;
  display: flex;
  flex-direction: column;
  align-items: center;

  @media (max-width: 768px) {
    /* Estilos para telas menores que 768px */
    width: 90vw;
    margin: 1em auto;
  }

  h1 {
    margin: 0;
  }

  .buttons {
    display: flex;
    justify-content: space-around;
    width: 100%;
    padding: 1em 0;
  }

  .container {
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .petImage {
    width: 50%;
    border-radius: 50%;

    @media (max-width: 768px) {
      /* Estilos para telas menores que 768px */
      width: 30%;
    }
  }
`;
