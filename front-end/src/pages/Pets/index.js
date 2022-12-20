import './styles.css';
import Aside from '../../components/Aside';
import Header from '../../components/Header';
import Table from '../../components/TablePet';
import { useEffect, useState } from 'react';
import api from '../../services/api';
import { getItem } from '../../utils/storage';


function Pets() {
    const [pets, setPets] = useState([]);

    const token = getItem('token');

    async function loadPets() {
        try {
            const response = await api.get('/pets', {
                headers: {
                    Authorization: `Bearer ${token}`
                }
            });

            setPets([...response.data]);

        } catch (error) {
        }
    }


    useEffect(() => {
        loadPets();

    }, []);


    return (
        <div className='container-main'>

            <Aside />
            <Header title='Pets' />

            <section className='container-section'>
                <Table pets={pets} />
            </section>
        </div>
    );
}

export default Pets;
