import React, { useEffect, useState } from 'react';

import { useNavigate } from 'react-router-dom';

import { Table } from '../../components/commom/Table';
import { Column } from '../../components/commom/Table/Table';
import { Pets, deletePet, getPets } from '../../services/petService';

const PetsTable: React.FC = () => {

    const navigate = useNavigate();
    const [pets, setPets] = React.useState<Pets[]>([]);

    const fetchPets = async () => {
        try {
            const pets = await getPets()
            setPets(pets)
        } catch (error) {
            alert('Não foi possível listar os dados!')
        }
    }

    useEffect(() => {
        fetchPets()
    }, []);


    const handleEdit = (pets: Pets) => {
        try {
            if (confirm('Você deseja realmente editar esse registro?'))
                navigate('/pets/edit', { state: pets });
        } catch (error) {
            console.log(error)
            alert('Não foi possível editar.')
        }
    }

    const handleDelete = async (pets: Pets) => {
        try {
            if (confirm('Você deseja realmente deletar esse registro?')) {
                await deletePet(pets.petId)
                fetchPets();
                alert('Os dados foram deletados com sucesso!')
            }
        } catch (error) {
            console.log(error)
            alert('Não foi possível deletar.')
        }
    }

    const columns: Column<Pets>[] = [
        { header: "Código", acessor: "petId" },
        { header: "Nome", acessor: "petName" },
        { header: "Idade", acessor: "petAge" },
        { header: "Tipo", acessor: "petType" },
        { header: "Raça", acessor: "petRace" },
        { header: "Tutor(a)", acessor: "petOwner" },
        { header: "Contato do Tutor(a)", acessor: "phoneOwner" },
    ]

    return (
            <Table
                columns={columns}
                data={pets}
                handleEdit={handleEdit}
                handleDelete={handleDelete}
            />
    )
}

export default PetsTable;