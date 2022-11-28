import { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import styles from './Pets.module.css'
import Linkbutton from '../components/layout/LinkButton';
import Message from './../components/layout/Message';
import Container from './../components/layout/Container';
import PetCard from './../pet/PetCard';
import Loading from './../components/layout/Loading';

const Pets = () => {

    const [ pets, setPets ] = useState([]);
    const [ removeLoading, setRemoveLoading ] = useState(false);
    const [ petMessage, setPetMessage ] = useState('');


    const location = useLocation();
    let message = '';
    if(location.state){
        message = location.state.message;
    }

    useEffect(() =>{
        setTimeout(() => {
            fetch('https://petsho-api.herokuapp.com/api/pets', {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json'
            }
        })
        .then((resp) => resp.json())
        .then((data) => {
            setPets(data)
            setRemoveLoading(true)
        })
        .catch((err) => console.log(err))
        }, 300);
    }, [])

    const removePet = (id) => {
        setPetMessage('')
        fetch(`https://petsho-api.herokuapp.com/api/pets${id}`, {
            method: 'DELETE',
            headers: {
                'Content-Type': 'application/json'
            }
        })
        .then(resp => resp.json())
        .then(() => {
            setPets(pets.filter((project) => project.id !== id));
            setPetMessage('Pet removido com sucesso!')
        })
        .catch(err => console.log(err))
    }


    return (
        <div className={styles.pet_container}>
            <div className={styles.title_container}>
                <h1>Meus Pets</h1>
                <Linkbutton to="/novopet" text="Adicionar novo pet"></Linkbutton>
            </div>
            {
                message && <Message type="success" msg={message}/>
            }
            {
                petMessage && <Message type="success" msg={petMessage}/>
            }
            <Container>
                {pets.length > 0 &&
                    pets.map((pet) => 
                        <PetCard
                            id={pet.id}
                            name={pet.name}
                            age={pet.age}
                            tipo={pet.tipo}
                            key={pet.id}
                            raca={pet.raca}
                            imagem={pet.imagem}
                            owner={pet.owner}
                            phone={pet.phone}
                            handleRemove={removePet}
                        />
                    )
                }
                {!removeLoading && <Loading/>}
                {removeLoading && pets.length === 0 &&
                    <p>Não há pets cadastrados!</p>
                }
            </Container>
        </div>
    );
}

export default Pets;