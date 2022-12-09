import React, { useRef } from "react";
import { FormContainer, InputArea, Input, Select, Label, Button } from "../styles/form";


const Form = () => {
  const ref = useRef();

  return (
    <FormContainer ref={ref} >
      <InputArea>
        <Label>Nome</Label>
        <Input name="nome" />
      </InputArea>
      <InputArea>
        <Label>Idade</Label>
        <Input name="idade" />
      </InputArea>
      <InputArea>
        <Label>Tipo</Label>
        <Select id="tipo" name="tipo">
          <option value="gato">Gato</option>
          <option value="cachorro">Cachorro</option>
        </Select>
      </InputArea>
      <InputArea>
        <Label>Raça</Label>
        <Input name="raça" />
      </InputArea>
      <InputArea>
        <Label>Nome do dono</Label>
        <Input name="nome_dono" />
      </InputArea>
      <InputArea>
        <Label>Telefone do dono</Label>
        <Input name="tel_dono" />
      </InputArea>

      <Button type="submit">SALVAR</Button>
    </FormContainer>
  );
};

export default Form;
