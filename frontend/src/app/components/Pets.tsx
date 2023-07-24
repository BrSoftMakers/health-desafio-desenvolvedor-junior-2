"use client";

import { useEffect, useState } from "react";
import { PetCard } from "./PetCard";

interface IPet {
  ID: string;
  name: string;
  imageURL: string;
  dateOfBirth: Date;
  species: string;
  breed: string;
  ownerName: string;
  ownerPhone: string;
}

export const Pets = () => {
  const [pets, setPets] = useState<IPet[]>([]);

  useEffect(() => {
    const fetchPets = async () => {
      const response = await fetch("http://localhost:3333/pets");
      const data = await response.json();

      setPets(data);
    };

    fetchPets();
  }, [pets]);

  return (
    <>
      <div className="container mx-auto p-5">
        <div className="flex justify-center">
          <h1 className="text-3xl font-medium mb-5">Pets disponíveis</h1>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
          {pets.map((pet: IPet) => (
            <PetCard key={pet.ID} id={pet.ID} name={pet.name} imageURL={pet.imageURL} />
          ))}
        </div>
      </div>
    </>
  );
};
