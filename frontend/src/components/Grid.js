import React from "react";
import axios from "axios";
import styled from "styled-components";
import { FaTrash, FaEdit } from "react-icons/fa";
import { toast } from "react-toastify";

const Table = styled.table`
  width: 130%;
  border-radius: 5px;
  
`;

const Thead = styled.thead`
  background-color: #f2f2f2;
  font-weight: bold;
`;

const Tbody = styled.tbody``;

const Tr = styled.tr`
  &:nth-child(even) {
    background-color: #f9f9f9;
  }
`;

const Th = styled.th`
  padding: 10px;
  text-align: left;
`;

const Td = styled.td`
  padding: 10px;
`;

const EditIcon = styled(FaEdit)`
  cursor: pointer;
  color: #333;
  transition: color 0.3s;

  &:hover {
    color: #ff8800;
  }
`;

const DeleteIcon = styled(FaTrash)`
  cursor: pointer;
  color: #333;
  transition: color 0.3s;

  &:hover {
    color: #ff0000;
  }
`;

const Grid = ({ pets, setPets, setOnEdit, deletePet }) => {
  const handleEdit = (item) => {
    setOnEdit(item);
    console.log(pets, setPets, setOnEdit, deletePet);
  };

  const handleDelete = async (id) => {
    try {
      await axios.delete(`http://localhost:3000/pets/${id}`);
      setPets((prevPets) => prevPets.filter((pet) => pet.id !== id));
      toast.success("Animal de estimação excluído com sucesso");
    } catch (error) {
      toast.error("Erro ao excluir o animal de estimação");
    }
  };
  

  return (
    <Table>
      <Thead>
        <Tr>
          <Th>Nome</Th>
          <Th>Idade</Th>
          <Th>Espécie</Th>
          <Th>Raça</Th>
          <Th>Nome do Dono</Th>
          <Th>Telefone do Dono</Th>
          <Th></Th>
          <Th></Th>
        </Tr>
      </Thead>
      <Tbody>
        {pets.map((item) => (
          <Tr key={item.id}>
            <Td>{item.nome}</Td>
            <Td>{item.idade}</Td>
            <Td>{item.especie}</Td>
            <Td>{item.raca}</Td>
            <Td>{item.nomeDono}</Td>
            <Td>{item.telefoneDono}</Td>
            <Td align="center">
              <EditIcon onClick={() => handleEdit(item)} />
            </Td>
            <Td align="center">
              <DeleteIcon onClick={() => handleDelete(item.id)} />
            </Td>
          </Tr>
        ))}
      </Tbody>
    </Table>
  );
};

export default Grid;
