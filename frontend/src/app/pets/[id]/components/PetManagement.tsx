"use client";

import { useRouter } from "next/navigation";

import { useState } from "react";

import { Modal } from "@/app/components/Modal";
import Button from "@/components/Button";
import Input from "@/components/Input";

interface PetManagementProps {
  id: string;
}

export const PetManagement = ({ id }: PetManagementProps) => {
  const [showEditModal, setShowEditModal] = useState<boolean>(false);
  const [showDeleteModal, setShowDeleteModal] = useState<boolean>(false);

  const router = useRouter();

  const handleDeleteClick = async () => {
    try {
      const url = `http://localhost:3333/pets/${id}`;

      const requestOptions = {
        method: "DELETE",
        headers: {
          "Content-Type": "application/json",
        },
      };

      const res = await fetch(url, requestOptions);
      setShowDeleteModal(false);

      if (res.ok) {
        router.push("/");
      } else {
        console.error("Falha ao excluir o pet:", res.statusText);
      }
    } catch (error) {
      console.log("Erro ao fazer a requisição:", error);
    }
  };

  return (
    <>
      <div className="container mx-auto gap-2 items-center justify-center flex">
        <Button className="w-1/2" onClick={() => setShowEditModal(true)}>
          Editar
        </Button>
        <Button variant="danger" className="w-1/2" onClick={() => setShowDeleteModal(true)}>
          Excluir
        </Button>
      </div>
      <Modal isVisible={showEditModal} onClose={() => setShowEditModal(false)}>
        <div className="p-5">
          <h1 className="text-xl font-medium mb-5">Digite os dados que deseja alterar no Pet</h1>
          <label htmlFor="name">Nome</label>
          <Input id="name" className="mt-1 mb-2" placeholder="Bob" />
          <label htmlFor="image">ImageURL</label>
          <Input id="image" className="mt-1 mb-2" placeholder="www.image.com.br" />
          <label htmlFor="dateOfBirth">Data de nascimento</label>
          <Input id="dateOfBirth" className="mt-1 mb-2" placeholder="28/01/2003" />
          <div className="flex md:gap-5 gap-2 justify-center">
            <div className="w-1/2">
              <label htmlFor="species">Espécie</label>
              <Input id="species" className="mt-1 mb-2" placeholder="Cachorro" />
            </div>
            <div className="w-1/2">
              <label htmlFor="breed">Raça</label>
              <Input id="breed" className="mt-1 mb-2" placeholder="Labrador" />
            </div>
          </div>
          <div className="flex md:gap-5 gap-2 justify-center">
            <div className="w-1/2">
              <label htmlFor="ownerName">Nome do dono</label>
              <Input id="ownerName" className="mt-1 mb-2" placeholder="Jhon Doe" />
            </div>
            <div className="w-1/2">
              <label htmlFor="ownerPhone">Telefone do dono</label>
              <Input id="ownerPhone" className="mt-1 mb-5" placeholder="(99) 9 9999-9999" />
            </div>
          </div>
          <div className="flex justify-center">
            <Button className="w-1/3">Criar</Button>
          </div>
        </div>
      </Modal>
      <Modal isVisible={showDeleteModal} onClose={() => setShowDeleteModal(false)}>
        <div className="p-5">
          <h1 className="mb-5">Tem certeza que deseja excluir?</h1>
          <div className="flex gap-5">
            <Button className="w-1/2" onClick={() => setShowDeleteModal(false)}>
              Voltar
            </Button>
            <Button variant="danger" className="w-1/2" onClick={() => handleDeleteClick()}>
              Excluir
            </Button>
          </div>
        </div>
      </Modal>
    </>
  );
};
