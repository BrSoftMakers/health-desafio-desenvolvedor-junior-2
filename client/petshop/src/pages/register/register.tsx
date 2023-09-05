import { useState } from "react";
import Input from "../../components/input/input";
import CatDogImage from "../../assets/images/cat_dog.png";
import {
  Card,
  ContentContainer,
  FormContainer,
  FormTitle,
  ImageContainer,
  ImageWrapper,
  Line,
  Page,
  RadioButtonContainer,
} from "./styles";
import Button from "../../components/button/button";
import api from "../../service/api";
import { toast } from "react-toastify";
import BackButton from "../../components/backButton/backButton";

export default function Register() {
  const [form, setForm] = useState({
    petName: "",
    petAge: "",
    petType: "",
    petBreed: "",
    petOwner: "",
    petOwnerPhone: "",
  });

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    setForm({ ...form, [name]: value });
  };

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    try {
      event.preventDefault();

      const formData = {
        petName: form.petName,
        petAge: form.petAge,
        petType: form.petType,
        petBreed: form.petBreed,
        petOwner: form.petOwner,
        petOwnerPhone: form.petOwnerPhone,
      };

      await api.post("/pet", formData);

      toast.success("Pet cadastrado com sucesso", {
        position: toast.POSITION.TOP_RIGHT,
      });

      setForm({
        petName: "",
        petAge: "",
        petType: "",
        petBreed: "",
        petOwner: "",
        petOwnerPhone: "",
      });
    } catch (error: any) {
      toast.error(`${error.response.data.message}` || "Erro inesperado", {
        position: toast.POSITION.TOP_RIGHT,
      });
    }
  };

  return (
    <Page>
      <BackButton />
      <ContentContainer>
        <ImageContainer>
          <ImageWrapper src={CatDogImage} alt="ilustração de um cachorro" />
        </ImageContainer>
      </ContentContainer>
      <Card>
        <FormTitle>Cadastro de pet</FormTitle>
        <Line />

        <FormContainer onSubmit={handleSubmit}>
          <RadioButtonContainer>
            <fieldset>
              <legend>Selecione o tipo do animal:</legend>
              <label>
                <input
                  required
                  type="radio"
                  id="cat"
                  name="petType"
                  value="gato"
                  onChange={handleChange}
                />
                Gato
              </label>

              <label>
                <input
                  type="radio"
                  id="dog"
                  name="petType"
                  value="cachorro"
                  onChange={handleChange}
                />
                Cachorro
              </label>
            </fieldset>
          </RadioButtonContainer>

          <Input
            id="petName"
            type="text"
            label="Nome do pet:"
            name="petName"
            value={form.petName}
            onChange={handleChange}
          />
          <Input
            id="petAge"
            min="0.0"
            step="0.01"
            type="number"
            label="Idade do pet (em anos):"
            name="petAge"
            value={form.petAge}
            placeholder="Ex: 0.1 para 1 mês, 1 para 1 ano"
            onChange={handleChange}
          />

          <Input
            id="petBreed"
            type="text"
            label="Raça do pet:"
            name="petBreed"
            value={form.petBreed}
            onChange={handleChange}
          />
          <Input
            id="petOwner"
            type="text"
            label="Nome do tutor:"
            name="petOwner"
            value={form.petOwner}
            onChange={handleChange}
          />
          <Input
            id="petOwnerPhone"
            type="text"
            label="Contato do tutor:"
            name="petOwnerPhone"
            value={form.petOwnerPhone}
            onChange={handleChange}
          />
          <Button text="Registrar" />
        </FormContainer>
      </Card>
    </Page>
  );
}
