//IMPORTANDO AS BIBLIOTECAS
import axios from "axios";
import React, { useState } from "react";
import { toast } from "react-toastify";
import { Button, FormContainer, InputArea } from "./styles";

//Componente que recebe 4 propriedades e cada uma delas tem uma ação de edição e valor
//Foram criados 6 estados para armazenar as alterações em cada input de valor
//onEdit vem as informações do grid para serem editados
const Form = ({ getUsers, onEdit, setOnEdit, setUsers }) => {
  const [nome_anim, setNome_anim] = useState(null);
  const [idade_anim, setIdade_anim] = useState(null);
  const [especie_anim, setEspecie_anim] = useState(null);
  const [raca_anim, setRaca_anim] = useState(null);
  const [nome_donoanim, setNome_donoanim] = useState(null);
  const [fone_donoanim, setFone_donoanim] = useState(null);

  //HandleChange recebe 2 valores sendo um value e set que é uma função que vai settar o estado, ela altera os estados de acordo com o onchange nos inputs
  const handleChange = (value, set) => {
    set(value);
  };

  //ReloadTimer chama um set timeout que serve para esperar um tempo antes de executar a ação dentro dele
  const reloadTimer = () => {
    setTimeout(() => {
      window.location.reload();
    }, 2000);
  };

  //HandleSubmit faz um disparo para a api passando as informações do body e em seguida usa o then e o catch para utilizar uma ação de sucesso e uma ação de erro
  const handleSubmit = async () => {
    await axios
      .post("http://localhost:8800", {
        nome_anim,
        idade_anim,
        especie_anim,
        raca_anim,
        nome_donoanim,
        fone_donoanim,
      })
      .then(({ data }) => {
        toast.success(data);
        getUsers(setUsers);
        reloadTimer();
      })
      .catch(({ data }) => toast.error(data));
  };

  //HandleUpdate altera as informações que ele passa no body para ser alterado no banco
  const handleUpdate = async () => {
    await axios
      .put(`http://localhost:8800/${onEdit?.id_anim}`, {
        nome_anim: nome_anim || onEdit?.nome_anim,
        idade_anim: idade_anim || onEdit?.idade_anim,
        especie_anim: especie_anim || onEdit?.especie_anim,
        raca_anim: raca_anim || onEdit?.raca_anim,
        nome_donoanim: nome_donoanim || onEdit?.nome_donoanim,
        fone_donoanim: fone_donoanim || onEdit?.fone_donoanim,
      })
      .then(({ data }) => {
        toast.success(data);
        getUsers(setUsers);
        reloadTimer();

      })
      .catch(({ data }) => toast.error(data));
  };

  return (
    <FormContainer>
      <InputArea>
        <label>PET</label>
        <input
          defaultValue={onEdit?.nome_anim}
          onChange={(e) => handleChange(e.target.value, setNome_anim)}
        />
      </InputArea>
      <InputArea>
        <label>Idade</label>
        <input
          onChange={(e) => handleChange(e.target.value, setIdade_anim)}
          defaultValue={onEdit?.idade_anim}
        />
      </InputArea>
      <InputArea>
        <label>Espécie</label>
        <input
          onChange={(e) => handleChange(e.target.value, setEspecie_anim)}
          defaultValue={onEdit?.especie_anim}
        />
      </InputArea>
      <InputArea>
        <label>Raça</label>
        <input
          onChange={(e) => handleChange(e.target.value, setRaca_anim)}
          defaultValue={onEdit?.raca_anim}
        />
      </InputArea>
      <InputArea>
        <label>Proprietário</label>
        <input
          onChange={(e) => handleChange(e.target.value, setNome_donoanim)}
          defaultValue={onEdit?.nome_donoanim}
        />
      </InputArea>
      <InputArea>
        <label>Telefone</label>
        <input
          onChange={(e) => handleChange(e.target.value, setFone_donoanim)}
          defaultValue={onEdit?.fone_donoanim}
        />
      </InputArea>

      <Button
        type="button"
        onClick={() => (onEdit ? handleUpdate() : handleSubmit())}
      >
        {onEdit ? "Salvar" : "Cadastrar"}
      </Button>
    </FormContainer>
  );
};

export default Form;
