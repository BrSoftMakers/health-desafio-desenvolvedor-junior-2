import { useEffect, useState } from 'react';

import RegisterPet from './RegisterPet';
import View from './View';

export default function Container() {
  const [allPetsRegisteredData, setAllPetsRegisteredData] = useState([]);
  const [allPetsRegistered, setAllPetsRegistered] = useState([]);
  const [showRegisterPet, setShowRegisterPet] = useState(false);
  const [showView, setShowView] = useState(false);
  const [idView, setIdView] = useState('');
  const [registerEndpoint, setRegisterEndpoint] = useState('');
  const [deleted, setDeleted] = useState(true);
  const [created, setCreated] = useState(false);

  const deletePet = (id) => {
    fetch(`http://127.0.0.1:3001/pets-handler/delete/${id}`, {
      method: 'DELETE',
      headers: { 'Content-Type': 'application/json' }
    })
    .then((data) => data.json())
    .then((data) => setDeleted(!deleted));
  }

  const handleFilterList = ({ target: { value } }) => {
    setAllPetsRegistered(
      allPetsRegisteredData.filter((pet) => (
        String(pet.id).includes(value) || pet.nome.includes(value) || pet.nomeDoDono.includes(value)
      ))
    )
  }

  useEffect(() => {
    fetch('http://127.0.0.1:3001/pets-handler/read-all')
      .then((data) => data.json())
      .then((data) => {
        setAllPetsRegistered(data);
        setAllPetsRegisteredData(data)
      });
  }, [created, deleted]);

  return (
    <>
      <section id='content-articles'>
        <header id='header-articles'>
          <input 
            type='text' 
            placeholder='Busque um pet pelo seu id, nome ou nome do dono'
            onChange={handleFilterList}
          />
          <button 
            onClick={() => {
              setCreated(false);
              setRegisterEndpoint('/create');
              setShowRegisterPet(!showRegisterPet);
            }}
            className='make-part-register-pet-component'
          >Adicionar um pet</button>
        </header>
        <section id='content-articles-scroll'>
          {allPetsRegistered.length > 0 ? (
            allPetsRegistered.map((pet, index) => (
              <article key={index} className='article-pet-info'>
                <section id='pet-info'>
                  <div className='info-p-article'>Nome:<p className='p-space'>{pet.nome}</p></div>
                  <div className='info-p-article'>Nome do dono(a): <p className='p-space'>{pet.nomeDoDono}</p></div>
                  <div className='info-p-article'>Telefone de contato: <p className='p-space'>{pet.telefoneDeContato}</p></div>
                </section>
                <button onClick={() => deletePet(pet.id)}>deletar</button>
                <button 
                  className='make-part-register-pet-component'
                  onClick={() => {
                    setCreated(false);
                    setRegisterEndpoint(`update/${pet.id}`);
                    setShowRegisterPet(!showRegisterPet);
                }}>editar</button>
                <button 
                  className='make-part-view-component'
                  onClick={() => {
                    setIdView(pet.id);
                    setShowView(!showView);
                }}>Mais informações</button>
              </article>
            ))
          ) : (
            <p id='feedback-no-pets'>Nenhum pet registrado</p>
          )}
        </section>
      </section>
      {showRegisterPet 
        ? (<RegisterPet 
            showRegisterPetComponent={ (param) => setShowRegisterPet(param)}
            setCreated={ (param) => setCreated(param)}
            registerEndpoint={ registerEndpoint }
          />)
        : null}
        {showView
        ? (<View 
            setShowView={ (param) => setShowView(param)}
            idView={ idView }
          />)
        : null}
    </>
  );
}