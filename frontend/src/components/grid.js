import React from "react";
import { Thead, Table, Tr, Tbody, Td, Th } from "../styles/grid"
import { FaTrash, FaEdit } from "react-icons/fa";


const Grid = ({ pets }) => {
  return (
    <Table>
      <Thead>
        <Tr>
          <Th>Nome</Th>
          <Th>Idade</Th>
          <Th>Tipo</Th>
          <Th>Raça</Th>
          <Th>Nome do dono</Th>
          <Th>Tel do dono</Th>
          <Th></Th>
          <Th></Th>
        </Tr>
      </Thead>
      <Tbody>
        {pets.map((item, i) => (
          <Tr key={i}>
            <Td width="30%">{item.nome}</Td>
            <Td width="30%">{item.idade}</Td>
            <Td width="30%">{item.tipo}</Td>
            <Td width="30%">{item.raca}</Td>
            <Td width="30%">{item.nome_dono}</Td>
            <Td width="30%">{item.tel_dono}</Td>
            <Td alignCenter width="5%">
              <FaEdit />
            </Td>
            <Td alignCenter width="5%">
              <FaTrash />
            </Td>
          </Tr>
        ))}
      </Tbody>
    </Table>
  );
};

export default Grid;