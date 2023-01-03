import React from 'react';
import ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import './styles/index.css';
import App from './pages/App';
import CadastrarPet from './pages/CadastrarPet';

const router = createBrowserRouter([
  {
    path: "/",
    element: <App/>,
    
  },
  {
    path: "/cadastrarPet",
    element: <CadastrarPet/>
  },
  {
    path: "/editarPet",
    element: <></>
  }
]);

const root = ReactDOM.createRoot(document.getElementById('root')!);
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
