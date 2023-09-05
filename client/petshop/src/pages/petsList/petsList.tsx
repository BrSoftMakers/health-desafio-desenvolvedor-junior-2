import React, { useState, useEffect } from "react";
import {
  Accordion,
  AccordionSummary,
  AccordionDetails,
  Typography,
} from "@mui/material";
import {
  Card,
  Page,
  AccordionContainer,
  Line,
  PageTitle,
  OptionsContainer,
} from "./styles";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import api from "../../service/api";
import { Pet } from "../../types/pet";
import { PiCat, PiDog, PiTrash } from "react-icons/pi";
import { FiEdit } from "react-icons/fi";
import { toast } from "react-toastify";
import { Link } from "react-router-dom";
import BackButton from "../../components/backButton/backButton";

export default function PetsList() {
  const [pets, setPets] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await api.get("/pet");
        setPets(response.data);
      } catch (error: any) {
        toast.error(
          `Erro ao buscar dados da API: ${error}` || "Erro inesperado",
          {
            position: toast.POSITION.TOP_RIGHT,
          }
        );
      }
    };

    fetchData();
  }, []);

  const deletePet = async (id: string) => {
    try {
      if (window.confirm("Certeza que deseja excluir esse item?")) {
        const response = await api.delete(`/pet/${id}`);

        toast.success(`${response.data.message}`, {
          position: toast.POSITION.TOP_RIGHT,
        });

        setPets(pets.filter((pet: Pet) => pet.id !== id));
      }
    } catch (error: any) {
      toast.error(`${error.response.data.message}` || "Erro inesperado", {
        position: toast.POSITION.TOP_RIGHT,
      });
    }
  };

  return (
    <Page>
      <BackButton />

      <Card>
        <PageTitle>Pets Cadastrados</PageTitle>
        <Line />
        <AccordionContainer>
          {pets.map((pet: Pet, index: number) => (
            <Accordion key={index}>
              <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                {pet.petType === "gato" ? (
                  <PiCat className="petIcon" size={18} />
                ) : (
                  <PiDog className="petIcon" size={18} />
                )}

                <Typography id="acordeonTitle">{pet.petName}</Typography>

                <OptionsContainer>
                  <Link to={`/pet/update/${pet.id}`}>
                    <FiEdit className="editIcon" size={15} />
                  </Link>

                  <button onClick={() => deletePet(pet.id as string)}>
                    <PiTrash className="trashIcon" size={15} color="red" />
                  </button>
                </OptionsContainer>
              </AccordionSummary>
              <AccordionDetails>
                <Typography className="acordeonContent">
                  <strong>Nome do Pet:</strong> {pet.petName}
                </Typography>
                <Typography className="acordeonContent">
                  <strong>Nome do Dono:</strong> {pet.petOwner}
                </Typography>
                <Typography className="acordeonContent">
                  <strong>Telefone:</strong> {pet.petOwnerPhone}
                </Typography>
                <Typography className="acordeonContent">
                  <strong>Raça:</strong> {pet.petBreed}
                </Typography>
                <Typography className="acordeonContent">
                  <strong>Idade:</strong> {pet.petAge} ano(s)
                </Typography>
              </AccordionDetails>
            </Accordion>
          ))}
        </AccordionContainer>
      </Card>
    </Page>
  );
}
