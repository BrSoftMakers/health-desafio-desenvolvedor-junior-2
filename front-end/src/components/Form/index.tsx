import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { createPetSchema } from "../../validations/createPet";
import api from "../../services/api";
import { AxiosError } from "axios";
import { toast } from "react-toastify";
import { FormStyled } from "./style";

interface iPetCreate {
  name: string;
  age: number;
  species: string;
  breed: string;
  tutorName: string;
  phoneNumber: string;
  image?: string;
}

interface iApiError {
  message: string;
}

export const Form = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<iPetCreate>({ resolver: yupResolver(createPetSchema) });

  async function registerPet(data: iPetCreate) {
    try {
      await api.post("/pets", data);
      toast.success("Pet criado com sucesso!");
    } catch (error) {
      const requestError = error as AxiosError<iApiError>;
      toast.error(requestError.response?.data.message);
      console.log(data);
    }
  }

  return (
    <FormStyled onSubmit={handleSubmit(registerPet)}>
      <h1>Cadastre seu pet:</h1>

      <fieldset>
        <legend>Dados do pet</legend>

        <label htmlFor="name">Nome</label>
        <input
          className="input"
          type="text"
          id="name"
          placeholder="Digite o nome do pet."
          {...register("name")}
        />
        <p className="error">{errors.name?.message}</p>

        <label htmlFor="age">Idade</label>
        <input
          className="input"
          type="number"
          id="age"
          placeholder="Digite a idade do pet."
          {...register("age")}
        />
        <p className="error">{errors.age?.message}</p>

        <label htmlFor="breed">Raça</label>
        <input
          className="input"
          type="text"
          id="breed"
          placeholder="Digite a raça do pet."
          {...register("breed")}
        />
        <p className="error">{errors.breed?.message}</p>

        <label htmlFor="image">Foto do animal (campo não obrigatório)</label>
        <input
          className="input"
          type="text"
          id="image"
          placeholder="Envie uma URL com foto do pet."
          {...register("image")}
        />
        <p className="error">{errors.image?.message}</p>

        <label htmlFor="select_specie">Selecione a especie:</label>
        <select id="select_specie" {...register("species")} className="input">
          <option value="Gato">Gato</option>
          <option value="Cachorro">Cachorro</option>
        </select>
        <p className="error">{errors.species?.message}</p>
      </fieldset>

      <fieldset>
        <legend>Dados do Tutor</legend>

        <label htmlFor="tutor_name">Nome do tutor</label>
        <input
          className="input"
          type="text"
          id="tutor_name"
          placeholder="Digite o nome do tutor."
          {...register("tutorName")}
        />
        <p className="error">{errors.tutorName?.message}</p>

        <label htmlFor="phone_number">Telefone para contato</label>
        <input
          className="input"
          type="text"
          id="phone_number"
          placeholder="Digite um número para contato."
          {...register("phoneNumber")}
        />
        <p id="last" className="error">
          {errors.phoneNumber?.message}
        </p>
      </fieldset>
      <button type="submit">Cadastrar</button>
    </FormStyled>
  );
};
