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
} from "./styles";
import Button from "../../components/button/button";
import api from "../../service/api";
import { toast } from "react-toastify";
import { Pet } from "../../types/pet";
import BackButton from "../../components/backButton/backButton";
import { useNavigate } from "react-router-dom";

export default function EditPet() {
  const navigate = useNavigate();
  const [pet, setPet] = useState<Pet>();
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
          navigate('/pets');
        }, 1000);
      }
    };

    fetchData();
  });

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    try {
      event.preventDefault();

      const formData = {
        petName: event.currentTarget.petName.value,
        petAge: event.currentTarget.petAge.value,
        petType: event.currentTarget.petType.value,
        petBreed: event.currentTarget.petBreed.value,
        petOwner: event.currentTarget.petOwner.value,
        petOwnerPhone: event.currentTarget.petOwnerPhone.value,
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
          <Input
            id="petName"
            type="text"
            defaultValue={pet?.petName}
            label="Nome do pet:"
            name="petName"
          />
          <Input
            id="petAge"
            min="0"
            type="number"
            defaultValue={pet?.petAge.toString()}
            label="Idade do pet:"
            name="petAge"
          />
          <Input
            id="petType"
            type="text"
            defaultValue={pet?.petType}
            label="Tipo de pet:"
            name="petType"
          />
          <Input
            id="petBreed"
            type="text"
            defaultValue={pet?.petBreed}
            label="Raça do pet:"
            name="petBreed"
          />
          <Input
            id="petOwner"
            type="text"
            defaultValue={pet?.petOwner}
            label="Nome do tutor:"
            name="petOwner"
          />
          <Input
            id="petOwnerPhone"
            type="text"
            defaultValue={pet?.petOwnerPhone}
            label="Contato do tutor:"
            name="petOwnerPhone"
          />
          <Button text="Atualizar" />
        </FormContainer>
      </Card>
    </Page>
  );
}
