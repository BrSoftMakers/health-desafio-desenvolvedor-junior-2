/* eslint-disable import/no-extraneous-dependencies */
import React from 'react';
import './styles.css';
import { useNavigate } from 'react-router-dom';
import Cookies from 'js-cookie';
import toastMessage from '../../helpers/toastMessage';

export default function Header() {
  const data = JSON.parse(localStorage.getItem('user'));
  const redirect = useNavigate();

  const logout = () => {
    localStorage.removeItem('user');
    Cookies.remove('token', { HttpOnly: true });
    toastMessage('Usuário deslogado 👋🏾', 'warning');
    setTimeout(() => {
      redirect('/login');
    }, 4000);
  };

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
          <button onClick={logout} type="button">Logout</button>
        </div>
      </div>
    </header>
  );
}
