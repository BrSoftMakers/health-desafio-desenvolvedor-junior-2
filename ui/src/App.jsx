import React from 'react';
import './App.css';
import './assets/colors.css';
import './assets/typography.css';
import Form from './components/Form';
import Header from './components/Header';
import Table from './components/Table';
import { PetProvider } from './context/PetContext';

function App() {
  return (
    <PetProvider>
      <Header />
      <main className="main-section">
        <Form />
        <Table />
      </main>
    </PetProvider>
  );
}

export default App;
