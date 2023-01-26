import React from 'react';
import BasicModal from '../components/Modal';
import Pets from './Pets';

export default function Home() {
  return (
    <main className="container">
      <BasicModal />
      <Pets />
    </main>
  );
}
