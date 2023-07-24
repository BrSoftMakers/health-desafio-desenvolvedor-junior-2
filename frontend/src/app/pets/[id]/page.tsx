import { calculateAge } from "@/utils/calculateAge";

import { PET_DESCRIPTION } from "@/constants";

import { PetManagement } from "./components/PetManagement";

import Image from "next/image";

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

const PetDetails = async ({ params }: { params: { id: string } }) => {
  const response = await fetch(`http://localhost:3333/pets/${params.id}`);
  const pet: IPet = await response.json();

  const date = new Date(pet.dateOfBirth);
  const options: Intl.DateTimeFormatOptions = { day: "2-digit", month: "2-digit", year: "numeric" };
  const formattedDate = date.toLocaleDateString("pt-BR", options);

  return (
    <>
      <div className="container mx-auto p-5">
        <div className="relative h-[300px] w-full mb-5">
          <Image src={pet.imageURL} fill alt={pet.name} style={{ objectFit: "cover" }} />
        </div>
        <p className="mb-2">
          <span className="font-bold">Nome:</span> {pet.name}
        </p>
        <p className="mb-2">
          <span className="font-bold">Idade:</span> {calculateAge(formattedDate)} Anos
        </p>
        <p className="mb-2">
          <span className="font-bold">Espécie:</span> {pet.species === "dog" ? "Cachorro" : "Gato"}
        </p>
        <p className="mb-2">
          <span className="font-bold">Raça:</span> {pet.breed}
        </p>
        <p className="mb-2">
          <span className="font-bold">Dono:</span> {pet.ownerName}
        </p>
        <p className="mb-2">
          <span className="font-bold">Telefone:</span> {pet.ownerPhone}
        </p>
        <p className="mb-2">{PET_DESCRIPTION}</p>
        <PetManagement id={params.id} />
      </div>
    </>
  );
};

export default PetDetails;
