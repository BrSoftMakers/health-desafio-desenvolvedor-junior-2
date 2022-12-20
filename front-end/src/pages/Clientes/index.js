import './styles.css';
import Aside from '../../components/Aside';
import Header from '../../components/Header';
import Table from '../../components/TableClient';
import { useEffect, useState } from 'react';
import { getItem } from '../../utils/storage';
import api from '../../services/api';


function Clientes() {
    const [clientes, setClientes] = useState([]);

    const token = getItem('token');

    async function loadClientes() {
        try {
            const response = await api.get('/clientes', {

                headers: {
                    Authorization: `Bearer ${token}`
                }
            });

            setClientes([...response.data])


        } catch (error) {
            console.log(error.response);

        }
    }

    useEffect(() => {
        loadClientes();

    }, [])

    return (
        <div className='container-main'>
            <Aside />

            <Header title="Clientes" />


            <section className='container-section'>

                <Table clientes={clientes} />

            </section>
        </div>

    );
}

export default Clientes;
