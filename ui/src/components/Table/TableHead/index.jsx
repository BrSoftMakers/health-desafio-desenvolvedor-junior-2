import React from 'react';

import './styles.css';

const tableColumns = [
  { id: 'id', label: 'ID' },
  { id: 'name', label: 'Nome' },
  { id: 'age', label: 'Idade' },
  { id: 'species', label: 'Espécie' },
  { id: 'breed', label: 'Raça' },
  { id: 'owner', label: 'Dono(a)' },
  { id: 'phone', label: 'Telefone' },
  { id: 'editButton', label: 'Editar' },
  { id: 'deleteButton', label: 'Remover' },
];

const generateTableHeaders = ({ id, label }) => (
  <th key={`${id}-column`}>{ label }</th>
);

function TableHead() {
  return (
    <thead>
      <tr>
        {tableColumns.map(generateTableHeaders)}
      </tr>
    </thead>
  );
}

export default TableHead;
