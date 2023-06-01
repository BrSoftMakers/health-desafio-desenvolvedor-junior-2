import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import {PetHouseProvider} from './contexts/PetHouse.tsx'
import './styles/global.css'


ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <PetHouseProvider>
     <App />
    </PetHouseProvider>
  </React.StrictMode>,
)
