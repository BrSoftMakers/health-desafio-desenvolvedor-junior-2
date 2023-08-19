import React, { useState, useEffect } from 'react';
import axios from 'axios';

function PetList() {
    const [pets, setPets] = useState([]);

    useEffect(() => {
        fetchPets();
    }, []);

    async function fetchPets() {
        try {
            const response = await axios.get('http://localhost:3001/api/pets');
            setPets(response.data);
        } catch (error) {
            console.error('Erro ao buscar os pets', error);
        }
    }

    return (
        <div>
            <h2>Informações dos Pets</h2>
            <ul>
                {pets.map((pet) => (
                    <li key={pet.id}>

                        <p>Nome: {pet.nome}</p>
                        <p>Idade: {pet.idade}</p>
                        <p>Tipo: {pet.tipo}</p>
                        <p>Raça: {pet.raca}</p>
                        <p>Nome do Dono: {pet.nome_dono}</p>
                        <p>Telefone do Dono: {pet.telefone_dono}</p>
                    </li>
                ))}
            </ul>
        </div>
    );
}


export default PetList;