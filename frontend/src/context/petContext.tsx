import { createContext, useContext, useState } from 'react';

interface IPet {
  id: number;
  name: string;
  age: number;
  species: string;
  breed: string;
  uniqueIndentifier: string;
  owner: string;
  phone: string;
  document: string;
}

interface PetContextProps {
  dataPet: IPet | undefined;
  setDataPet: (data: IPet) => void;
  showModal: boolean;
  setShowModal: (show: boolean) => void;
}

interface PetProviderProps {
  children: React.ReactNode;
}
export const PetContext = createContext({} as PetContextProps);

export function PetProvider({ children }: PetProviderProps) {
  const [showModal, setShowModal] = useState(false);
  const [dataPet, setDataPet] = useState<IPet>();

  return (
    <PetContext.Provider
      value={{
        dataPet,
        setDataPet,
        showModal,
        setShowModal,
      }}
    >
      {children}
    </PetContext.Provider>
  );
}

export const usePetContext = () => {
  return useContext(PetContext);
};
