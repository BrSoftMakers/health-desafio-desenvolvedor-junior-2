import { createContext, useContext, useState } from 'react';

export interface IPet {
  age: number;
  breed: string;
  createdAt: Date;
  id: number;
  name: string;
  ownerId: number;
  species: string;
  uniqueIndentifier: string;
  updatedAt: Date;
}

interface PetContextProps {
  dataPet: IPet | undefined;
  setDataPet: (data: IPet) => void;
  showModal: boolean;
  setShowModal: (show: boolean) => void;
  isUpdateOrDelete: boolean;
  setIsUpdateOrDelete: (isUpdateOrDelete: boolean) => void;
  getDataPets: IPet[];
  setGetDataPets: (data: IPet[]) => void;
  handleSearch: (search: string) => void;
  searchPets: IPet[];
  setSearchPets: (data: IPet[]) => void;
  search: string;
  setSearch: (search: string) => void;
}

interface PetProviderProps {
  children: React.ReactNode;
}
export const PetContext = createContext({} as PetContextProps);

export function PetProvider({ children }: PetProviderProps) {
  const [showModal, setShowModal] = useState(false);
  const [dataPet, setDataPet] = useState<IPet>();
  const [isUpdateOrDelete, setIsUpdateOrDelete] = useState(false);
  const [getDataPets, setGetDataPets] = useState<IPet[]>([]);
  const [searchPets, setSearchPets] = useState<IPet[]>([]);
  const [search, setSearch] = useState('');
  function handleSearch(search: string) {
    if (search === '') return setSearchPets(getDataPets);
    const result = searchPets.filter(
      (pet) => pet.uniqueIndentifier === search.toUpperCase(),
    );
    setSearchPets(result);
  }

  return (
    <PetContext.Provider
      value={{
        dataPet,
        setDataPet,
        showModal,
        setShowModal,
        isUpdateOrDelete,
        setIsUpdateOrDelete,
        getDataPets,
        setGetDataPets,
        handleSearch,
        searchPets,
        setSearchPets,
        search,
        setSearch,
      }}
    >
      {children}
    </PetContext.Provider>
  );
}

export const usePetContext = () => {
  return useContext(PetContext);
};
