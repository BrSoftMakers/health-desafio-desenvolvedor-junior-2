import React, { useContext } from 'react';
import AppContext from '../../context/app.context';

import './styles.css';

function Table() {
  const { pets, deletePet } = useContext(AppContext);

  return (
    <div className="table-container">
      <table>
        <thead>
          <tr>
            <th>Id</th>
            <th>Nome</th>
            <th>Idade</th>
            <th>Especie</th>
            <th>Id do Tutor</th>
            <th>Atualizar Item</th>
            <th>Remover Item</th>
          </tr>
        </thead>
        <tbody>
          {
          pets?.map((item, index) => (
            <tr key={item.id}>
              <td
                data-testid={
                  `customer_checkout__element-order-table-item-number-${index}`
                }
              >
                {index + 1 }
              </td>

              <td data-testid={`customer_checkout__element-order-table-name-${index}`}>
                {item.nome}
              </td>

              <td
                data-testid={`customer_checkout__element-order-table-quantity-${index}`}
              >
                {item.idade}
              </td>
              <td
                data-testid={`customer_checkout__element-order-table-quantity-${index}`}
              >
                {item.especie}
              </td>
              <td
                data-testid={`customer_checkout__element-order-table-quantity-${index}`}
              >
                {item.id_tutor}
              </td>
              <td
                data-testid={
                  `customer_checkout__element-order-table-remove-${index}`
                }
              >
                <button type="button">Atualizar</button>
              </td>
              <td
                data-testid={
                  `customer_checkout__element-order-table-remove-${index}`
                }
              >
                <button type="button" onClick={() => deletePet(item.id)}>Remover</button>
              </td>
            </tr>
          ))
        }
        </tbody>
      </table>
    </div>
  );
}

export default Table;
