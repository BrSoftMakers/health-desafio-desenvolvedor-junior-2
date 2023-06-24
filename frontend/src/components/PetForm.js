import axios from "axios";
import React, { useEffect, useRef } from "react";
import styled from "styled-components";
import { toast } from "react-toastify";

const FormContainer = styled.form`
  /* Estilos do formulário */
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  width: 122%;
  padding: 30px;
  background-color: #f2f2f2;
  border-radius: 5px;
`;

const InputArea = styled.div`
  display: flex;
  flex-direction: column;
  margin: 10px;
`;

const Input = styled.input`
  width: 120px;
  padding: 0 10px;
  border: 1px solid #bbb;
  border-radius: 5px;
  height: 40px;
`;

const Label = styled.label`
  
`;

const Select = styled.select`
  width: 120px;
  padding: 0 10px;
  border: 1px solid #bbb;
  border-radius: 5px;
  height: 40px;
`;

const Option = styled.option``;

const Button = styled.button`
  padding: 10px;
  cursor: pointer;
  border-radius: 4px;
  border: none;
  background-color: #2c73d2;
  color: white;
  height: 42px;
  margin: 10px;
  align-self: flex-start;
`;

const Form = ({ getPets, onEdit, setOnEdit }) => {
  const ref = useRef();

  useEffect(() => {
    if (onEdit) {
      const pet = ref.current;

      pet.nome.value = onEdit.nome;
      pet.idade.value = onEdit.idade;
      pet.especie.value = onEdit.especie;
      pet.raca.value = onEdit.raca;
      pet.nomeDono.value = onEdit.nomeDono;
      pet.telefoneDono.value = onEdit.telefoneDono;
    }
  }, [onEdit]);

  const handleSubmit = async (e) => {
    e.preventDefault();

    const pet = ref.current;

    if (
      !pet.nome.value ||
      !pet.idade.value ||
      !pet.especie.value ||
      !pet.raca.value ||
      !pet.nomeDono.value ||
      !pet.telefoneDono.value
    ) {
      return toast.warn("Preencha todos os campos!");
    }

    if (onEdit) {
      try {
        await axios.put(`http://localhost:3000/pets/${onEdit.id}`, {
          nome: pet.nome.value,
          idade: pet.idade.value,
          especie: pet.especie.value,
          raca: pet.raca.value,
          nomeDono: pet.nomeDono.value,
          telefoneDono: pet.telefoneDono.value,
        });

        toast.success("Animal de estimação atualizado com sucesso");
      } catch (error) {
        toast.error("Erro ao atualizar o animal de estimação");
      }
    } else {
      try {
        await axios.post("http://localhost:3000/pets", {
          nome: pet.nome.value,
          idade: pet.idade.value,
          especie: pet.especie.value,
          raca: pet.raca.value,
          nomeDono: pet.nomeDono.value,
          telefoneDono: pet.telefoneDono.value,
        });

        toast.success("Animal de estimação adicionado com sucesso");
      } catch (error) {
        toast.error("Erro ao adicionar o animal de estimação");
      }
    }

    pet.nome.value = "";
    pet.idade.value = "";
    pet.especie.value = "";
    pet.raca.value = "";
    pet.nomeDono.value = "";
    pet.telefoneDono.value = "";

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
        <Input name="idade" type="number" />
      </InputArea>
      <InputArea>
        <Label>Espécie</Label>
        <Select name="especie">
          <Option value="">Selecione</Option>
          <Option value="Cachorro">Cachorro</Option>
          <Option value="Gato">Gato</Option>
        </Select>
      </InputArea>
      <InputArea>
        <Label>Raça</Label>
        <Input name="raca" />
      </InputArea>
      <InputArea>
        <Label>Nome do Dono</Label>
        <Input name="nomeDono" />
      </InputArea>
      <InputArea>
        <Label>Telefone do Dono</Label>
        <Input name="telefoneDono" />
      </InputArea>

      {/* Exibição dos campos createdAt e updatedAt */}
      {onEdit && (
        <>
          <InputArea>
            <Label>Criado em</Label>
            <Input value={onEdit.createdAt} disabled />
          </InputArea>
          <InputArea>
            <Label>Atualizado em</Label>
            <Input value={onEdit.updatedAt} disabled />
          </InputArea>
        </>
      )}

      <Button type="submit">SALVAR</Button>
    </FormContainer>
  );
};

export default Form;
