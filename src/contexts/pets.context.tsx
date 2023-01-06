import {
  collection,
  deleteDoc,
  doc,
  getDocs,
  updateDoc,
} from 'firebase/firestore';
import { toast } from 'react-toastify';
import {
  createContext,
  ReactNode,
  useCallback,
  useEffect,
  useState,
} from 'react';

import { db } from '../config/firebase.config';
import Pets from '../models/pets.types';

interface IPetsContext {
  pets: Pets[];
  isLoading: boolean;
  deletePet: (id: string) => void;
  paramsPet: (id: string) => void;
  updatePet: (
    id: string,
    name: string,
    age: string,
    type: string,
    breed: string,
    imageUrl: string,
    nameOwner: string,
    telephoneOwner: string
  ) => void;
  getPet: () => Promise<void>;
}

interface IPetsContextProvider {
  children: ReactNode;
}

export const PetsContext = createContext<IPetsContext>({
  pets: [],
  isLoading: false,
  deletePet: () => Promise.resolve(),
  paramsPet: () => {},
  getPet: () => Promise.resolve(),
  updatePet: () => Promise.resolve(),
});

export const PetsContextProvider = ({ children }: IPetsContextProvider) => {
  const [pets, setPets] = useState<Pets[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const useCollectionRef = collection(db, 'petshop');

  useEffect(() => {
    (async () => {
      const response = await getDocs(useCollectionRef);
      const data: any = response.docs.map((doc) => ({
        ...doc.data(),
        id: doc.id,
      }));
      setPets(data);
    })();
  }, []);

  const getPet = useCallback(async () => {
    try {
      (async () => {
        setIsLoading(true);
        const response = await getDocs(useCollectionRef);
        const data: any = response.docs.map((doc) => ({
          ...doc.data(),
          id: doc.id,
        }));
        setPets(data);
      })();
    } catch (error) {
      toast.error('algo aconteceu, tente novamente!');
    } finally {
      setIsLoading(false);
    }
  }, []);

  const deletePet = useCallback(
    async (id: string) => {
      try {
        setIsLoading(true);
        const userDoc = doc(db, 'petshop', id);
        await deleteDoc(userDoc);
        const newPets = pets.filter((pet) => pet.id !== id);
        setPets(newPets);
        toast.success('pet removido com sucesso');
      } catch (error) {
        toast.error('algo aconteceu, tente novamente!');
      } finally {
        setIsLoading(false);
      }
    },
    [db, pets]
  );

  const paramsPet = useCallback(
    async (id: string) => {
      try {
        setIsLoading(true);
        const PetId = pets.filter((pet: { id: string }) => pet.id === id);
        setPets(PetId);
      } catch (error) {
        toast.error('algo aconteceu, tente novamente!');
      } finally {
        setIsLoading(false);
      }
    },
    [pets]
  );

  const updatePet = useCallback(
    async (
      id: string,
      name: string,
      age: string,
      type: string,
      breed: string,
      imageUrl: string,
      nameOwner: string,
      telephoneOwner: string
    ) => {
      try {
        setIsLoading(true);
        const userDoc = doc(db, 'petshop', id);
        const newFields = {
          name: name,
          age: age,
          type: type,
          breed: breed,
          imageUrl: imageUrl,
          telephoneOwner: telephoneOwner,
          nameOwner: nameOwner,
        };
        await updateDoc(userDoc, newFields);
      } catch (error) {
        toast.error('algo aconteceu, tente novamente!');
      } finally {
        setIsLoading(false);
      }
    },
    [db, pets]
  );

  return (
    <PetsContext.Provider
      value={{
        pets,
        isLoading,
        deletePet,
        paramsPet,
        getPet,
        updatePet,
      }}
    >
      {children}
    </PetsContext.Provider>
  );
};
