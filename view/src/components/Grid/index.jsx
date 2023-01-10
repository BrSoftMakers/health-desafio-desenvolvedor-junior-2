//IMPORTANDO BIBLIOTECAS
import React from "react";
import axios from "axios";
import { FaTrash, FaEdit } from "react-icons/fa";
import { toast } from "react-toastify";
import { Table, Tbody, Td, Th, Thead, Tr } from "./styles";

const Grid = ({ users, setUsers, setOnEdit, getUsers}) => {
  const handleEdit = (item) => {
    setOnEdit(item);
  };

  // FUNÇÃO DO ICONE DA LIXEIRA
  const handleDelete = async (id) => {
    await axios
      .delete(`http://localhost:8800/${id}`)
      .then(({ data }) => {
        toast.success(data);
        getUsers(setUsers);
      })
      .catch(({ data }) => toast.error(data));
  };

  return (
    <Table>
      <Thead>
        <Tr>
          <Th>PET</Th>
          <Th>Idade</Th>
          <Th>Espécie</Th>
          <Th>Raça</Th>
          <Th>Proprietário</Th>
          <Th onlyWeb>Fone</Th>
          <Th></Th>
          <Th></Th>
        </Tr>
      </Thead>
      <Tbody>
        {users.map(
          (
            item,
            i //PROPRIEDADES RECEBIDAS DO DB
          ) => (
            <Tr key={i}>
              <Td width="15%">{item.nome_anim}</Td>
              <Td width="10%">{item.idade_anim}</Td>
              <Td width="15%">{item.especie_anim}</Td>
              <Td width="10%">{item.raca_anim}</Td>
              <Td width="20%">{item.nome_donoanim}</Td>
              <Td width="20%">{item.fone_donoanim}</Td>

              <Td alignCenter width="5%">
                <FaEdit onClick={() => handleEdit(item)} />
              </Td>
              <Td alignCenter width="5%">
                <FaTrash onClick={() => handleDelete(item.id_anim)} />
              </Td>
            </Tr>
          )
        )}
      </Tbody>
    </Table>
  );
};

export default Grid;
