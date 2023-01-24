import { createContext, useState, useEffect } from 'react';
import { toast } from 'react-toastify';
import api from '../services/api';

export interface iDefaultContextProps {
  children: React.ReactNode;
}

export interface iOwnerPet {
  id: string;
  name: string;
  phone_number: string;
}
export interface iPet {
  id: string;
  name: string;
  age: number;
  type: string;
  breed?: string;
  owner_id: iOwnerPet;
}

interface IDashboardContext {
  addPet: (data: iPet) => void;
  updatePet: (data: iPet) => void;
  deletePet: (id: string) => void;
  removePet: (id: string) => void;
  list: iPet[];
  setPetId: React.Dispatch<React.SetStateAction<string>>;
}

export const DashboardContext = createContext<IDashboardContext>(
  {} as IDashboardContext
);

export const DashboardProvider = ({ children }: iDefaultContextProps) => {
  const [list, setList] = useState<iPet[]>([]);
  const [petId, setPetId] = useState('');

  const getPet = async () => {
    try {
      const pet = await api.get('pets');
      setList(pet.data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getPet();
  }, []);

  const addPet = async (data: iPet) => {
    try {
      const response = await api.post('/pets', data);

      console.log(response);

      toast.success('Pet adicionado com sucesso!');

      setList([...list, response.data]);
    } catch (error) {
      console.log(error);
      toast.error('Parece que algo deu errado 👀');
    }
  };

  async function updatePet(data: iPet): Promise<void> {
    try {
      const response = await api.patch(`/pets/${petId}`, data);
      console.log(response);
      toast.success('Mudanças salvas o/');
      getPet();
    } catch (error) {
      console.log(error);
      toast.error('Ops! Não foi dessa vez, tente novamente!');
    }
  }

  async function deletePet(id: string) {
    try {
      await api.delete(`/pets/${id}`);
      toast.success('Pet removido da base de dados 👍');
    } catch (error) {
      console.log(error);
    }
  }

  async function removePet(id: string) {
    await deletePet(id);
    const deletedPet = list.filter((pet) => pet.id !== id);
    setList(deletedPet);
  }

  return (
    <DashboardContext.Provider
      value={{
        addPet,
        updatePet,
        deletePet,
        removePet,
        list,
        setPetId,
      }}
    >
      {children}
    </DashboardContext.Provider>
  );
};
