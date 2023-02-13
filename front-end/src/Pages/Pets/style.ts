import styled from "styled-components";

export const PetsStyled = styled.div`
  display: flex;
  flex-direction: column;
  background-color: #f9e6b3;
  min-height: 100vh;

  header {
    background-color: #fff;
  }

  ul {
    align-self: center;
    display: flex;
    justify-content: center;
    flex-wrap: wrap;

    margin-top: 10px;
    height: 100%;
    gap: 10px;
  }
`;
