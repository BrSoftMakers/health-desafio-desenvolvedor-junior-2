import { iPetRequest, iPetUpdate } from "../../interfaces/pets.interfaces";

export const mockedPetRequest: iPetRequest = {
  name: "Luffy",
  age: 2,
  species: "Cachorro",
  breed: "Vira-lata",
  tutorName: "Rayleigh",
  phoneNumber: "81995607418",
};

export const mockedPetRequest2: iPetRequest = {
  name: "Robin",
  age: 5,
  species: "Gato",
  breed: "Persa",
  tutorName: "Dragon",
  phoneNumber: "81995607418",
};

export const invalidMockedPet = {
  name: 3,
  age: "2 anos",
  breed: true,
  species: "vaca",
  tutorName: null,
};

export const mockedPetUpdate: iPetUpdate = {
  name: "Zoro",
  tutorName: "Mihawk",
};

export const invalidMockedPetUpdate = {
  name: "roronoaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa",
  species: "vaca",
};
