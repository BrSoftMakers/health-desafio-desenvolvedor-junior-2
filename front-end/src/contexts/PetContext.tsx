import { AxiosError } from "axios";
import { createContext, ReactNode, useContext, useState } from "react";
import { toast } from "react-toastify";
import { iPet } from "../components/PetCard/interfaces";
import api from "../services/api";

export const PetContext = createContext<iPetContext>({} as iPetContext);

interface iPetReturn {
  name: string;
  age: number;
  species: string;
  breed: string;
  tutorName: string;
  phoneNumber: string;
  image?: string;
  id: string;
}

interface iPetContext {
  pets: [] | iPetReturn[];
  setPets: React.Dispatch<React.SetStateAction<never[]>>;
  deleteModal: boolean;
  setDeleteModal: React.Dispatch<React.SetStateAction<boolean>>;
  petId: string;
  setPetId: React.Dispatch<React.SetStateAction<string>>;
  changeLi: boolean;
  setChangeLi: React.Dispatch<React.SetStateAction<boolean>>;
  deletePet: () => Promise<void>;
  editModal: boolean;
  setEditModal: React.Dispatch<React.SetStateAction<boolean>>;
  updatePet: (data: iPetData) => Promise<void>;
  registerPet: (data: iPet) => Promise<void>;
}

interface IPetProviderProps {
  children: ReactNode;
}

interface iPetData {
  name?: string;
  age?: number;
  species?: string;
  breed?: string;
  tutorName?: string;
  phoneNumber?: string;
  image?: string;
}

interface iApiError {
  message: string;
}

export const PetProvider = ({ children }: IPetProviderProps) => {
  const [pets, setPets] = useState([]);
  const [deleteModal, setDeleteModal] = useState(false);
  const [petId, setPetId] = useState("");
  const [changeLi, setChangeLi] = useState(false);
  const [editModal, setEditModal] = useState(false);

  async function registerPet(data: iPet) {
    try {
      await api.post("/pets", data);
      toast.success("Pet criado com sucesso!");
    } catch (error) {
      const requestError = error as AxiosError<iApiError>;
      toast.error(requestError.response?.data.message);
      console.log(data);
    }
  }

  async function deletePet(): Promise<void> {
    try {
      await api.delete(`/pets/${petId}`);
      toast.success("Pet deletado com sucesso!");
      setDeleteModal(false);
      setChangeLi(!changeLi);
    } catch {
      toast.error("Erro ao deletar pet!");
    }
  }

  async function updatePet(data: iPetData) {
    try {
      await api.patch(`/pets/${petId}`, data);
      toast.success("Pet editado com sucesso!");
      setEditModal(false);
      setChangeLi(!changeLi);
    } catch {
      toast.error("Erro ao editar o pet!");
    }
  }

  return (
    <PetContext.Provider
      value={{
        pets,
        setPets,
        deleteModal,
        setDeleteModal,
        petId,
        setPetId,
        changeLi,
        setChangeLi,
        deletePet,
        editModal,
        setEditModal,
        updatePet,
        registerPet,
      }}
    >
      {children}
    </PetContext.Provider>
  );
};

export function usePetContext(): iPetContext {
  const context = useContext(PetContext);

  return context;
}
