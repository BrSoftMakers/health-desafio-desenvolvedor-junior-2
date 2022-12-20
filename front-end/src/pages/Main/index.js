import './styles.css';
import Aside from '../../components/Aside';
import Card from '../../components/Cards';
import Pet from '../../assets/img/dog-cat.png';
import Header from '../../components/Header';
import { useEffect, useState } from 'react';
import api from '../../services/api';
import { getItem } from '../../utils/storage';

function Main() {
    const [dashboard, setDashboard] = useState([]);

    const token = getItem('token');

    async function loadDashboard() {
        try {

            const response = await api.get('/dashboard', {
                headers: {
                    Authorization: `Bearer ${token}`
                }
            });
            setDashboard([...response.data]);


        } catch (error) {
            return console.log(error.response);
        }
    }

    useEffect(() => {
        loadDashboard();

    }, []);



    return (
        <div className="container-main">
            <Aside />
            <Header title="Dashboard" />

            <main className='main'>


                {dashboard.map((dash) => (
                    <div key={dash.id}>
                        <Card image={Pet}
                            namePet={dash.pet_nome}
                            raca={dash.raca}
                            tipo={dash.tipo}
                            nomeDono={dash.nome}
                            fone={dash.telefone}
                        />
                    </div>

                ))}


            </main>

        </div>
    );
}

export default Main;
