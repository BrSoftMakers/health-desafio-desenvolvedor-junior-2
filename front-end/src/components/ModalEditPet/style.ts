import styled from "styled-components";

export const ModalEditStyled = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  position: absolute;
  width: 100vw;
  height: 100vh;
  background-color: #12121457;

  .card_edit {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    width: 300px;
    height: 70vh;
    border-radius: 30px;

    background-color: #292929;
    color: #fff;

    button {
      align-self: flex-end;

      background-color: #175ea8;
      color: #fff;
      border: none;

      border-radius: 10px;
      width: 60px;
      height: 20px;

      margin: 0 10px;
    }

    h1 {
      text-align: center;
    }

    fieldset {
      display: flex;
      flex-direction: column;
      width: 100%;
      margin-bottom: 15px;

      legend {
        font-weight: 600;
      }

      label {
        margin: 10px 0 0;
        padding-left: 5px;
      }
    }

    .input {
      height: 20px;
      margin: 0 5px;
    }

    #phone_number,
    #select_specie {
      margin-bottom: 5px;
    }

    p {
      color: red;
      font-size: 10px;
      padding: 0 5px;
    }

    #last {
      margin-bottom: 5px;
    }
  }

  #close {
    background-color: red;
    width: 30px;
  }

  @media (min-width: 1024px) {
    .card_edit {
      width: 600px;
      height: 500px;

      button {
        width: 80px;
        height: 30px;
      }
      form {
        width: 90%;
      }
    }
  }
`;
