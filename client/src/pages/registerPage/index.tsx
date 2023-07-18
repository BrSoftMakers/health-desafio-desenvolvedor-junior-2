import { useState } from "react";
import { Button } from "../../components/features/button";
import { Input } from "../../components/features/input";
import * as C from "./styles";
import { petType } from "../../types/petTypes";
import { api } from "../../api";
import { useNavigate } from "react-router-dom";

export const RegisterPage = () => {
  const navigate = useNavigate();

  const [registerPetState, setRegisterPetState] = useState<petType>({
    nome: "",
    idade: 0,
    dono_nome: "",
    dono_telefone: "",
    raca: "",
    tipo: "",
  });
  const [invalidFields, setInvalidFields] = useState<string[]>([]);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    // Verifica se todos os campos estão preenchidos corretamente
    if (!isFormValid()) {
      return;
    }

    try {
      await api.registerNewPet(registerPetState);
      navigate("/pets");
    } catch (error) {
      console.error("Error registering new pet:", error);
    }
  };

  const handleChangeRegister = (
    event: React.ChangeEvent<HTMLInputElement>,
    key: keyof petType
  ): void => {
    let value: string | number = event.target.value;
    if (key === "idade" || key === "dono_telefone") {
      value = parseInt(value, 10);
    }
    setRegisterPetState({
      ...registerPetState,
      [key]: value,
    });
  };

  const isFormValid = (): boolean => {
    const requiredFields: (keyof petType)[] = [
      "nome",
      "idade",
      "dono_nome",
      "dono_telefone",
      "raca",
      "tipo",
    ];
    const invalidFields: string[] = [];

    // Verifica se cada campo obrigatório está preenchido
    requiredFields.forEach((field) => {
      if (!registerPetState[field] || registerPetState[field] === 0) {
        invalidFields.push(field);
      }
    });

    setInvalidFields(invalidFields);

    return invalidFields.length === 0;
  };

  return (
    <C.Container>
      <form onSubmit={handleSubmit}>
        <h1>Register a new pet</h1>
        <Input
          type="text"
          placeholder="Nome"
          value={registerPetState.nome}
          onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
            handleChangeRegister(event, "nome");
          }}
          className={invalidFields.includes("nome") ? "invalid" : ""}
        />

        <Input
          type="number"
          placeholder="Idade"
          value={registerPetState.idade}
          onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
            handleChangeRegister(event, "idade");
          }}
          className={invalidFields.includes("idade") ? "invalid" : ""}
        />

        <Input
          type="text"
          placeholder="Raça"
          value={registerPetState.raca}
          onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
            handleChangeRegister(event, "raca");
          }}
          className={invalidFields.includes("raca") ? "invalid" : ""}
        />

        <Input
          type="text"
          placeholder="Tipo"
          value={registerPetState.tipo}
          onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
            handleChangeRegister(event, "tipo");
          }}
          className={invalidFields.includes("tipo") ? "invalid" : ""}
        />

        <Input
          type="text"
          placeholder="Nome do dono"
          value={registerPetState.dono_nome}
          onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
            handleChangeRegister(event, "dono_nome");
          }}
          className={invalidFields.includes("dono_nome") ? "invalid" : ""}
        />

        <Input
          type="text"
          placeholder="Telefone do dono"
          value={registerPetState.dono_telefone}
          onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
            handleChangeRegister(event, "dono_telefone");
          }}
          className={invalidFields.includes("dono_telefone") ? "invalid" : ""}
        />
        <Button name="Register" />
      </form>
    </C.Container>
  );
};
