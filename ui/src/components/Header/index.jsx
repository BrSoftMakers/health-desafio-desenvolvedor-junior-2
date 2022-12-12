import React from 'react';
import { BiHealth } from 'react-icons/bi';
import './styles.css';

export default function Header() {
  return (
    <header className="header">
      <h1>
        <BiHealth />
        {' '}
        Health
      </h1>
    </header>
  );
}
