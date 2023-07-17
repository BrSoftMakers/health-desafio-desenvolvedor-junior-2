import axios from "axios";
import { petType } from "./types/petTypes";

const axiosInstance = axios.create({
  baseURL: "http://localhost:3333/",
  headers: {
    "content-type": "application/x-www-form-urlencoded;charset=utf-8",
  },
});

export const api = {
  registerNewPet: async (pet: petType) => {
    try {
      await axiosInstance.post("/register", {
        nome: pet.nome,
        tipo: pet.tipo,
        raca: pet.raca,
        dono_telefone: pet.dono_telefone,
        dono_nome: pet.dono_nome,
        idade: pet.idade,
      });
      return true;
    } catch (error) {
      console.error("Error registering new pet:", error);
      throw error;
    }
  },
  listPets: async () => {
    try {
      const response = await axiosInstance.get("/");
      return response.data.list;
    } catch (error) {
      console.error("Error listing pets:", error);
      throw error;
    }
  },
  deletePet: async (id: number) => {
    try {
      const response = await axiosInstance.delete(`/deletepet/${id}`);
      return response.status === 200;
    } catch (error) {
      console.error("Error deleting pet:", error);
      return false;
    }
  },
  updatePet: async (id: number, pet: petType) => {
    try {
      await axiosInstance.put(`/updatepet/${id}`, {
        nome: pet.nome,
        tipo: pet.tipo,
        raca: pet.raca,
        dono_telefone: pet.dono_telefone,
        dono_nome: pet.dono_nome,
        idade: pet.idade,
      });
    } catch (error) {
      console.error("Error deleting pet:", error);
      return false;
    }
  },
};
