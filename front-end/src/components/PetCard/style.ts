import styled from "styled-components";

export const PetCardStyled = styled.li`
  display: flex;
  flex-direction: column;
  align-items: center;

  width: 300px;
  margin: 5px;
  padding: 5px;
  border-radius: 30px;
  gap: 5px;

  background-color: #d87534;
  color: #fff;

  #name {
    font-weight: 600;
  }

  .buttons {
    align-self: flex-end;
    margin-right: 10px;

    button {
      background-color: #175ea8;
      color: #fff;
      border: none;

      border-radius: 10px;
      width: 50px;
      height: 15px;

      margin-right: 5px;
    }

    button:hover {
      background-color: #fff;
      color: #175ea8;
    }
  }

  img {
    width: 50px;
    height: 50px;
    border-radius: 30px;
  }
`;
