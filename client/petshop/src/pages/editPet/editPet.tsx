import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import Input from "../../components/input/input";
import EditImage from "../../assets/images/editImage.png";
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
import { Pet } from "../../types/pet";
import BackButton from "../../components/backButton/backButton";
import { useNavigate } from "react-router-dom";

export default function EditPet() {
  const navigate = useNavigate();
  const [pet, setPet] = useState({
    petName: "",
    petAge: "",
    petType: "gato" || "cachorro",
    petBreed: "",
    petOwner: "",
    petOwnerPhone: "",
  });

  const { id } = useParams<{ id: string }>();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await api.get(`/pet/${id}`);
        setPet(response.data);
      } catch (error: any) {
        toast.error(
          `Erro ao buscar dados da API: ${error.response.data.message}` ||
            "Erro inesperado",
          {
            position: toast.POSITION.TOP_RIGHT,
          }
        );

        setTimeout(() => {
          navigate("/pets");
        }, 1000);
      }
    };

    fetchData();
  }, [id, navigate]);

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    setPet({ ...pet, [name]: value });
  };

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    try {
      event.preventDefault();

      const formData = {
        petName: pet.petName,
        petAge: pet.petAge,
        petType: pet.petType,
        petBreed: pet.petBreed,
        petOwner: pet.petOwner,
        petOwnerPhone: pet.petOwnerPhone,
      };

      await api.put(`/pet/${id}`, formData);

      toast.success("Pet atualizado com sucesso", {
        position: toast.POSITION.TOP_RIGHT,
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
          <ImageWrapper
            src={EditImage}
            alt="ilustração de um cachorro com sua dona"
          />
        </ImageContainer>
      </ContentContainer>
      <Card>
        {<FormTitle>Editar informações de {pet?.petName} </FormTitle>}

        <Line />
        <FormContainer onSubmit={handleSubmit}>
          <RadioButtonContainer>
            <fieldset>
              <legend>Selecione o tipo do animal:</legend>
              <label>
                <input
                  type="radio"
                  id="cat"
                  name="petType"
                  value="gato"
                  checked={pet?.petType === "gato" ? true : false}
                  onChange={handleChange}
                  // defaultChecked={pet?.petType === "gato" ? true : false}
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
                  checked={pet?.petType === "cachorro" ? true : false}
                />
                Cachorro
              </label>
            </fieldset>
          </RadioButtonContainer>

          <Input
            id="petName"
            type="text"
            defaultValue={pet?.petName}
            onChange={handleChange}
            label="Nome do pet:"
            name="petName"
          />
          <Input
            id="petAge"
            min="0"
            type="number"
            defaultValue={pet?.petAge.toString()}
            onChange={handleChange}
            label="Idade do pet:"
            name="petAge"
          />
          <Input
            id="petBreed"
            type="text"
            defaultValue={pet?.petBreed}
            onChange={handleChange}
            label="Raça do pet:"
            name="petBreed"
          />
          <Input
            id="petOwner"
            type="text"
            defaultValue={pet?.petOwner}
            label="Nome do tutor:"
            onChange={handleChange}
            name="petOwner"
          />
          <Input
            id="petOwnerPhone"
            type="text"
            defaultValue={pet?.petOwnerPhone}
            onChange={handleChange}
            label="Contato do tutor:"
            name="petOwnerPhone"
          />
          <Button text="Atualizar" />
        </FormContainer>
      </Card>
    </Page>
  );
}
