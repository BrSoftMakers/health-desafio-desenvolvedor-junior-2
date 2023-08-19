import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';

function PetDetails() {
    const { id } = useParams();
    const [pet, setPet] = useState({});

    useEffect(() => {
        fetchPetDetails();
    }, [])

    const fetchPetDetails = async () => {
        try {
            const response = await axios.get(`http//localhost:3001/visualizar-pet/${id}`);
            setPet(response.data);
        } catch (error) {
            console.error('Erro ao buscar detalhes do pet:', error)
        }
    };

    return (
        <div>
            <h2>Detalhes do Pet</h2>
            <p>Nome: {pet.nome}</p>
            <p>Idade: {pet.idade}</p>
            <p>Tipo: {pet.tipo}</p>
            <p>Raça: {pet.raca}</p>
            <p>Nome do Dono: {pet.nome_dono}</p>
            <p>Telefone do Dono: {pet.telefone_dono}</p>
        </div>
    );
}

export default PetDetails;