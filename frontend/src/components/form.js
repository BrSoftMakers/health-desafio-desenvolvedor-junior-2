import React, { useRef, useEffect } from "react";
import axios from "axios";
import { FormContainer, InputArea, Input, Select, Label, Button } from "../styles/form";
import { toast } from "react-toastify";


const Form = ({ getPets, onEdit, setOnEdit }) => {
  const ref = useRef();

  useEffect(() => {
    if (onEdit) {
      const pets = ref.current;

      pets.nome.value = onEdit.nome;
      pets.idade.value = onEdit.idade;
      pets.tipo.value = onEdit.tipo;
      pets.raca.value = onEdit.raca;
      pets.nome_dono.value = onEdit.nome_dono;
      pets.tel_dono.value = onEdit.tel_dono;
    }
  }, [onEdit]);

  const handleSubmit = async (e) => {
    e.preventDefault();

    const pets = ref.current;

    if (onEdit) {
      await axios
        .put("http://localhost:3333/" + onEdit.id, {
          nome: pets.nome.value,
          idade: pets.idade.value,
          tipo: pets.tipo.value,
          nome_dono: pets.nome_dono.value,
          tel_dono: pets.tel_dono.value,
        })
        .then(({ data }) => toast.success(data))
        .catch(({ data }) => toast.error(data));
    } else {
      await axios
        .post("http://localhost:3333", {
          nome: pets.nome.value,
          idade: pets.idade.value,
          tipo: pets.tipo.value,
          nome_dono: pets.nome_dono.value,
          tel_dono: pets.tel_dono.value,
        })
        .then(({ data }) => toast.success(data))
        .catch(({ data }) => toast.error(data));
    }

    pets.nome.value = "";
      pets.idade.value = "";
      pets.tipo.value = "";
      pets.raca.value = "";
      pets.nome_dono.value = "";
      pets.tel_dono.value = "";

    setOnEdit(null);
    getPets();
  };

  return (
    <FormContainer ref={ref} onSubmit={handleSubmit}>
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
