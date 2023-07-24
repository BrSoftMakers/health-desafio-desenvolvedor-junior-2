"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";

import Button from "@/components/Button";
import Input from "@/components/Input";

import { formatDateToISO } from "@/utils/formatDateToISO";

import { Modal } from "./Modal";

interface createPetForm {
  name: string;
  imageURL: string;
  dateOfBirth: string;
  species: string;
  breed: string;
  ownerName: string;
  ownerPhone: string;
}

export const Hero = () => {
  const [showModal, setShowModal] = useState<boolean>(false);
  const {
    handleSubmit,
    register,
    formState: { errors },
    reset,
  } = useForm<createPetForm>();

  const onSubmit = async (data: createPetForm) => {
    try {
      const url = "http://localhost:3333/pets";
      const treatedData = {
        name: data.name,
        imageURL: data.imageURL,
        dateOfBirth: formatDateToISO(data.dateOfBirth),
        species: data.species.toLowerCase() === "cachorro" ? "dog" : "cat",
        breed: data.breed,
        ownerName: data.ownerName,
        ownerPhone: data.ownerPhone,
      };

      const requestOptions = {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(treatedData),
      };

      const res = await fetch(url, requestOptions);
      const result = await res.json();

      console.log(result);

      setShowModal(false);
      reset();
    } catch (error) {
      console.log("Erro ao fazer a requisição:", error);
    }
  };

  return (
    <>
      <div className="container mx-auto p-5">
        <h1 className="text-3xl font-medium mb-5">Seja bem-vindo ao Pet Health 🐶🐱</h1>
        <p className="text-lg mb-5">Aqui você pode visualizar, criar, editar e excluir os animais do nosso Pet Shop.</p>
        <div className="flex justify-center">
          <Button className="w-2/4" onClick={() => setShowModal(true)}>
            Criar Pet
          </Button>
        </div>
      </div>
      <Modal isVisible={showModal} onClose={() => setShowModal(false)}>
        <div className="p-5">
          <h1 className="text-xl font-medium mb-5">Digite os dados do Pet</h1>
          <label htmlFor="name">Nome</label>
          <Input
            id="name"
            className="mt-1 mb-2"
            placeholder="Bob"
            error={!!errors.name}
            errorMessage={errors.name?.message}
            {...register("name", {
              required: {
                value: true,
                message: "Campo obrigatório.",
              },
            })}
          />
          <label htmlFor="image">ImageURL</label>
          <Input
            id="image"
            className="mt-1 mb-2"
            placeholder="www.image.com.br"
            error={!!errors.imageURL}
            errorMessage={errors.imageURL?.message}
            {...register("imageURL", {
              required: {
                value: true,
                message: "Campo obrigatório.",
              },
            })}
          />
          <label htmlFor="dateOfBirth">Data de nascimento</label>
          <Input
            id="dateOfBirth"
            className="mt-1 mb-2"
            placeholder="28/01/2003"
            error={!!errors.dateOfBirth}
            errorMessage={errors.dateOfBirth?.message}
            {...register("dateOfBirth", {
              required: {
                value: true,
                message: "Campo obrigatório.",
              },
            })}
          />
          <div className="flex md:gap-5 gap-2 justify-center">
            <div className="w-1/2">
              <label htmlFor="species">Espécie</label>
              <Input
                id="species"
                className="mt-1 mb-2"
                placeholder="Cachorro"
                error={!!errors.species}
                errorMessage={errors.species?.message}
                {...register("species", {
                  required: {
                    value: true,
                    message: "Campo obrigatório.",
                  },
                })}
              />
            </div>
            <div className="w-1/2">
              <label htmlFor="breed">Raça</label>
              <Input
                id="breed"
                className="mt-1 mb-2"
                placeholder="Labrador"
                error={!!errors.breed}
                errorMessage={errors.breed?.message}
                {...register("breed", {
                  required: {
                    value: true,
                    message: "Campo obrigatório.",
                  },
                })}
              />
            </div>
          </div>
          <div className="flex md:gap-5 gap-2 justify-center mb-5">
            <div className="w-1/2">
              <label htmlFor="ownerName">Nome do dono</label>
              <Input
                id="ownerName"
                className="mt-1 mb-2"
                placeholder="Jhon Doe"
                error={!!errors.ownerName}
                errorMessage={errors.ownerName?.message}
                {...register("ownerName", {
                  required: {
                    value: true,
                    message: "Campo obrigatório.",
                  },
                })}
              />
            </div>
            <div className="w-1/2">
              <label htmlFor="ownerPhone">Telefone do dono</label>
              <Input
                id="ownerPhone"
                className="mt-1 mb-2"
                placeholder="(99) 9 9999-9999"
                error={!!errors.ownerPhone}
                errorMessage={errors.ownerPhone?.message}
                {...register("ownerPhone", {
                  required: {
                    value: true,
                    message: "Campo obrigatório.",
                  },
                })}
              />
            </div>
          </div>
          <div className="flex justify-center">
            <Button className="w-1/3" type="submit" onClick={() => handleSubmit(onSubmit)()}>
              Criar
            </Button>
          </div>
        </div>
      </Modal>
    </>
  );
};
