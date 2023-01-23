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
  updatePet: (data: iPet, id: string) => void;
  deletPet: (id: string) => void;
  removePet: (id: string) => void;
  list: iPet[];
}

export const DashboardContext = createContext<IDashboardContext>(
  {} as IDashboardContext
);

export const DashboardProvider = ({ children }: iDefaultContextProps) => {
  const [list, setList] = useState<iPet[]>([]);

  useEffect(() => {
    (async () => {
      try {
        const pet = await api.get('pets');
        console.log(pet);

        setList(pet.data);
      } catch (error) {
        console.log(error);
      }
    })();
  }, []);

  const addPet = async (data: iPet) => {
    console.log(data);

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

  async function updatePet(data: iPet, id: string): Promise<void> {
    try {
      const response = await api.put(`/pets/${id}`, data);
      console.log(response);
      toast.success('Mudanças salvas o/');
    } catch (error) {
      console.log(error);
      toast.error('Ops! Não foi dessa vez, tente novamente!');
    }
  }

  async function deletPet(id: string) {
    try {
      await api.delete(`/pets/${id}`);
      toast.success('Pet removido da base de dados 👍');
    } catch (error) {
      console.log(error);
    }
  }

  async function removePet(id: string) {
    await deletPet(id);
    const update = list.filter((pet) => pet.id !== id);
    setList(update);
  }

  return (
    <DashboardContext.Provider
      value={{
        addPet,
        updatePet,
        deletPet,
        removePet,
        list,
      }}
    >
      {children}
    </DashboardContext.Provider>
  );
};
