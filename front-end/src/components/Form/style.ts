import styled from "styled-components";

export const FormStyled = styled.form`
  display: flex;
  flex-direction: column;
  padding: 0 10px;
  width: 100%;

  h1 {
    text-align: center;
    color: #175ea8;
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

  button {
    display: flex;
    align-items: center;
    align-self: center;
    justify-content: center;

    width: 100px;
    height: 30px;
    border-radius: 30px;

    background-color: #175ea8;
    color: #fff;
    border-color: transparent;
  }

  p {
    color: red;
    font-size: 10px;
    padding: 0 5px;
  }

  #last {
    margin-bottom: 5px;
  }

  @media (min-width: 768px) {
    fieldset {
      width: 70%;
      align-self: center;
    }
  }
  @media (min-width: 1024px) {
    .input {
      height: 30px;
    }
  }

  @media (min-width: 1440px) {
    h1 {
      margin-bottom: 10px;
    }

    p {
      font-size: 15px;
    }

    button {
      width: 150px;
      height: 40px;
      border-radius: 35px;
      font-size: 20px;
    }
  }
`;
