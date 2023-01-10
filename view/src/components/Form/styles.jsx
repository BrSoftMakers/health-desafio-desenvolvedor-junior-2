import styled from "styled-components";

//ESTILIZANDO O STYLED.FORM
export const FormContainer = styled.form`
  display: flex;
  align-items: flex-end;
  gap: 10px;
  flex-wrap: wrap;
  background-color: #fff;
  padding: 20px;
  box-shadow: 0px 0px 5px #ccc;
  border-radius: 5px;
`;

//ESTIILIZANDO O INPUTAREA
export const InputArea = styled.div`
  display: flex;
  flex-direction: column;
`;

//ESTILIZANDO O INPUT
export const Input = styled.input`
  width: 120px;
  padding: 0 10px;
  border: 1px solid #bbb;
  border-radius: 5px;
  height: 40px;
`;

//ESTILIZANDO A LABEL
export const Label = styled.label``;

//ESTILIZANDO O BUTTON
export const Button = styled.button`
  padding: 10px;
  cursor: pointer;
  border-radius: 5px;
  border: none;
  background-color: #2c73d2;
  color: white;
  height: 42px;
`;
