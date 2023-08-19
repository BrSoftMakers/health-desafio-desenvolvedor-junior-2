import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { createRoot } from 'react-dom/client';

import NavBar from './components/NavBar';
import PetList from './components/PetList';
import PetDetails from './components/PetDetails';
import PetForm from './components/PetForm';

const root = createRoot(document.getElementById('root'));

root.render(
  <Router>
    <NavBar />
    <Routes>
      <Route path="/" element={<PetList />} />
      <Route path="/pets/:id" element={<PetDetails />} />
      <Route path="/adicionar-pet" element={<PetForm />} />
    </Routes>
  </Router>
);
