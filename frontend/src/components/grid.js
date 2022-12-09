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