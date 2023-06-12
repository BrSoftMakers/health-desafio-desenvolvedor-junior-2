import React from 'react';
import { Routes, Route, BrowserRouter as Router } from 'react-router-dom';
import AnimalList from './components/AnimalList';
import AnimalCreateForm from './components/AnimalCreateForm';
import AnimalUpdateForm from './components/AnimalUpdateForm';
import AnimalDelete from './components/AnimalDelete';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<AnimalList />} />
        <Route path="/animals" element={<AnimalList />} />
        <Route path="/animals/create" element={<AnimalCreateForm />} />
        <Route path="/animals/:id/edit" element={<AnimalUpdateForm />} />
        <Route path="/animals/:id/delete" element={<AnimalDelete />} />
      </Routes>
    </Router>
  );
}

export default App;
