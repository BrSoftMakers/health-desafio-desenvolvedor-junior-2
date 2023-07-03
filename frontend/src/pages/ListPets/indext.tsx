import { Pencil, Trash } from '@phosphor-icons/react';
import { useEffect, useState } from 'react';
import http from '../../service/api/http';
import { Modal } from '../../components/Modal';
import { usePetContext } from '../../context/petContext';
import { IDataUpdate } from '../../components/Modal/formUpdate';

interface IPet {
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

export function ListPets() {
  const {
    setShowModal,
    isUpdateOrDelete,
    setIsUpdateOrDelete,
    getDataPets,
    setGetDataPets,
    searchPets,
    setSearchPets,
    search,
  } = usePetContext();
  const [dataUpdate, setDataUpdate] = useState<IDataUpdate>({} as IDataUpdate);

  useEffect(() => {
    const getPets = async () => {
      const response = await http.get('/pets');
      setSearchPets(response.data);
      setGetDataPets(response.data);
    };
    if (search === '') {
      getPets();
    }
  }, [isUpdateOrDelete, setGetDataPets, setSearchPets, search]);

  const deletePet = async (uniqueId: string) => {
    await http.delete(`/pets/${uniqueId}`);
    getDataPets.filter((pet: IPet) => pet.uniqueIndentifier !== uniqueId);
    setIsUpdateOrDelete(true);
  };

  return (
    <>
      <Modal update warning={false} dataUpdate={dataUpdate} />
      <div className="w-full">
        <table className="mt-3 shadow-lg bg-white border-collapse w-full">
          <thead>
            <tr>
              <th className="bg-yellow-50 border text-left px-8 py-4">Nome</th>
              <th className="bg-yellow-50 border text-left px-8 py-4">Espécie</th>
              <th className="bg-yellow-50 border text-left px-8 py-4">Identificador</th>
              <th className="bg-yellow-50 border text-left px-8 py-4">Editar</th>
              <th className="bg-yellow-50 border text-left px-8 py-4">Excluir</th>
            </tr>
          </thead>
          <tbody>
            {searchPets.length > 0 ? (
              searchPets.map((pet: IPet) => (
                <tr className="hover:bg-gray-50 focus:bg-gray-300" key={pet.id}>
                  <td className="border px-8 py-4">{pet.name}</td>
                  <td className="border px-8 py-4">{pet.species}</td>
                  <td className="border px-8 py-4">{pet.uniqueIndentifier}</td>
                  <td className="border px-8 py-4 text-center">
                    <button
                      onClick={() => {
                        setDataUpdate({
                          name: pet.name,
                          age: pet.age,
                          species: pet.species,
                          breed: pet.breed,
                          uniqueIndentifier: pet.uniqueIndentifier,
                        });
                        setShowModal(true);
                      }}
                    >
                      <Pencil size={28} />
                    </button>
                  </td>
                  <td className="border px-4 py-4 text-center">
                    <button onClick={() => deletePet(pet.uniqueIndentifier)}>
                      <Trash size={28} />
                    </button>
                  </td>
                </tr>
              ))
            ) : (
              <tr className="hover:bg-gray-50 focus:bg-gray-300">
                <td colSpan={5} className="text-center py-4 font-semibold">
                  Não há pets para serem exibidos
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </>
  );
}
