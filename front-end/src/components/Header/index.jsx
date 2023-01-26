/* eslint-disable import/no-extraneous-dependencies */
import React from 'react';
import './styles.css';

export default function Header() {
  const data = JSON.parse(localStorage.getItem('user'));
  return (
    <header>
      <div className="header-container">
        <div className="title-container">
          <div className="title-wrapper">
            <h1>PetMania - Dashboard</h1>
          </div>
        </div>
        <div className="user-info">
          <div>
            Usuário:
            {' '}
            <span>{ data.nome }</span>
          </div>
          <div>
            <p>
              Role:
              {' '}
              <span>{ data.categoria }</span>
            </p>
          </div>
        </div>
      </div>
    </header>
  );
}
