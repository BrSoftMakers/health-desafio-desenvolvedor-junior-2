import { useNavigate } from "react-router-dom";
import * as C from "./styles";
import { useState } from "react";
import { petType } from "../../../types/petTypes";
import { api } from "../../../api";
import { Input } from "../input";
import { Button } from "../button";

interface modalProps {
  currentPet: petType;
  showModal: () => void;
}

export const UpdateModal = ({ currentPet, showModal }: modalProps) => {
  const navigate = useNavigate();

  const [registerPetState, setRegisterPetState] = useState<petType>({
    nome: currentPet.nome,
    idade: currentPet.idade,
    dono_nome: currentPet.dono_nome,
    dono_telefone: currentPet.dono_telefone,
    raca: currentPet.raca,
    tipo: currentPet.tipo,
  });

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    try {
      await api.updatePet(currentPet.id ?? 0, registerPetState);
      showModal();
      navigate("/pets");
    } catch (error) {
      console.error("Error registering new pet:", error);
    }
  };

  const handleChangeRegister = (
    event: React.ChangeEvent<HTMLInputElement>,
    key: keyof petType
  ): void => {
    const value: string | number = event.target.value;
    setRegisterPetState((prevState) => ({
      ...prevState,
      [key]:
        key === "idade" || key === "dono_telefone"
          ? parseInt(value, 10)
          : value,
    }));
  };

  return (
    <C.Modal>
      <h2>Edit pet</h2>
      <form onSubmit={handleSubmit}>
        <Input
          type="text"
          placeholder="Nome"
          value={registerPetState.nome}
          onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
            handleChangeRegister(event, "nome");
          }}
        />

        <Input
          type="number"
          placeholder="Idade"
          value={registerPetState.idade}
          onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
            handleChangeRegister(event, "idade");
          }}
        />

        <Input
          type="text"
          placeholder="Raça"
          value={registerPetState.raca}
          onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
            handleChangeRegister(event, "raca");
          }}
        />

        <Input
          type="text"
          placeholder="Tipo"
          value={registerPetState.tipo}
          onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
            handleChangeRegister(event, "tipo");
          }}
        />

        <Input
          type="text"
          placeholder="Nome do dono"
          value={registerPetState.dono_nome}
          onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
            handleChangeRegister(event, "dono_nome");
          }}
        />

        <Input
          type="text"
          placeholder="Telefone do dono"
          value={registerPetState.dono_telefone}
          onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
            handleChangeRegister(event, "dono_telefone");
          }}
        />

        <Button name="Save" />
      </form>
    </C.Modal>
  );
};
