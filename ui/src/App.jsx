import React from 'react';
import './App.css';
import './assets/colors.css';
import './assets/typography.css';
import Form from './components/Form';
import { PetProvider } from './context/PetContext';

function App() {
  return (
    <PetProvider>
      <main className="main-section">
        <Form />
      </main>
    </PetProvider>
  );
}

export default App;
