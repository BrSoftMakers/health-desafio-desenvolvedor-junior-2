import React from 'react';
import { Link } from 'react-router-dom';


function Navbar() {
  return (
    <nav>
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/adicionar-pet">Adicionar Pet</Link>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;
