import { useState, useEffect } from "react";
import axios from 'axios';
import { Button, Modal, ModalOverlay, ModalContent, ModalHeader, ModalBody, ModalFooter, 
    FormControl, FormLabel, Input, Select
} from "@chakra-ui/react";

const CadastroModal = ({ isOpen, onClose, onSubmit, animal, onUpdate }) => {
  const [formData, setFormData] = useState({
    nome: "",
    idade: "",
    tipo: "",
    raca: "",
    nome_dono: "",
    telefone_dono: "",
  });

  useEffect(() => {
    if (animal) {
      setFormData(animal);
    } else {
      setFormData({
        nome: "",
        idade: "",
        tipo: "",
        raca: "",
        nome_dono: "",
        telefone_dono: "",
      });
    }
  }, [animal]);

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: value,
    }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    if (animal) {
      // Atualizar o animal existente
      axios.put(`http://localhost:3333/${animal.id}`, formData)
        .then((response) => {
          console.log("Pet atualizado com sucesso:", response.data);
          onUpdate(response.data);
          onSubmit(formData);
        })
        .catch((error) => {
          console.log("Erro ao atualizar Pet:", error);
        });
    } else {
  
      // Enviar os valores de formData para o backend ou realizar as ações desejadas
      axios.post("http://localhost:3333", formData)
        .then((response) => {
          console.log("Pet cadastrado com sucesso:", response.data);
          // Realizar qualquer ação adicional após o cadastro
          // Por exemplo, atualizar a lista de animais com os dados mais recentes
          onSubmit(formData);
    
          // Limpar os campos do formulário
          setFormData({
            nome: "",
            idade: "",
            tipo: "",
            raca: "",
            nome_dono: "",
            telefone_dono: "",
          });
        })
        .catch((error) => {
          console.log("Erro ao cadastrar Pet:", error);
        });
    }

    onClose(); // Fechar o modal após o envio do formulário
  };

  return (
    <Modal isOpen={isOpen} onClose={onClose}>
      <ModalOverlay />
      <ModalContent>
        <ModalHeader>Cadastro de Pet</ModalHeader>
        <ModalBody>
          {/* Formulário de cadastro */}
          <form onSubmit={handleSubmit}>
          <FormControl mb="4">
            <FormLabel>Nome do Pet</FormLabel>
            <Input
              name="nome"
              placeholder="Nome do Pet"
              value={formData.nome}
              onChange={handleInputChange}
            />
          </FormControl>

          <FormControl mb="4">
            <FormLabel>Idade do Pet</FormLabel>
            <Input
              name="idade"
              placeholder="Idade do Pet"
              value={formData.idade}
              onChange={handleInputChange}
            />
          </FormControl>

          <FormControl mb="4">
            <FormLabel>Tipo</FormLabel>
            <Select
              name="tipo"
              placeholder="Selecione o tipo"
              value={formData.tipo}
              onChange={handleInputChange}
            >
              <option value="Cachorro">Cachorro</option>
              <option value="Gato">Gato</option>
            </Select>
          </FormControl>

          <FormControl mb="4">
            <FormLabel>Raça</FormLabel>
            <Input
              name="raca"
              placeholder="Raça"
              value={formData.raca}
              onChange={handleInputChange}
            />
          </FormControl>

          <FormControl mb="4">
            <FormLabel>Nome do Dono</FormLabel>
            <Input
              name="nome_dono"
              placeholder="Nome do Dono"
              value={formData.nome_dono}
              onChange={handleInputChange}
            />
          </FormControl>

          <FormControl mb="4">
            <FormLabel>Telefone do Dono</FormLabel>
            <Input
              name="telefone_dono"
              placeholder="Telefone do Dono"
              value={formData.telefone_dono}
              onChange={handleInputChange}
            />
          </FormControl>

        </form>
        </ModalBody>
        <ModalFooter>
          <Button colorScheme="teal" type="submit" onClick={handleSubmit}>
            Salvar
          </Button>

          <Button variant="ghost" onClick={onClose}>
            Cancelar
          </Button>
        </ModalFooter>
      </ModalContent>
    </Modal>
  );
};

export default CadastroModal;
