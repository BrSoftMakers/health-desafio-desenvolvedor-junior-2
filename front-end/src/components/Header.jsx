/* eslint-disable import/no-extraneous-dependencies */
import React from 'react';

export default function Header() {
  const data = JSON.parse(localStorage.getItem('user'));
  return (
    <header>
      <h1>PetMania</h1>
      <div>
        <p>
          Usuário:
          {' '}
          <span>{ data.nome }</span>
        </p>
        <p>
          Role:
          {' '}
          <span>{ data.categoria }</span>
        </p>
      </div>
    </header>
  );
}
