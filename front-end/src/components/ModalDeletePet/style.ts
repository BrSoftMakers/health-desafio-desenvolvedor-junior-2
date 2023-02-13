import styled from "styled-components";

export const ModalDeleteStyled = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  position: absolute;
  width: 100vw;
  height: 100vh;
  background-color: #12121457;

  .card_delete {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    height: 200px;
    width: 300px;
    border-radius: 30px;
    gap: 10px;

    background-color: #292929;
    color: #fff;

    .buttons {
      button {
        background-color: #175ea8;
        color: #fff;
        border: none;

        border-radius: 10px;
        width: 80px;
        height: 15px;

        margin-right: 5px;
      }
    }

    @media (min-width: 1024px) {
      .card_delete {
        height: 350px;
        width: 450px;
      }

      .buttons {
        button {
          border-radius: 20px;
          width: 130px;
          height: 30px;
        }
      }
    }
  }
`;
