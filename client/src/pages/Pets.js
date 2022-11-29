import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import styles from './Pets.module.css'
import Linkbutton from '../components/layout/LinkButton';
import Container from './../components/layout/Container';
import PetCard from './../pet/PetCard';

const Pets = () => {

    const navigate = useNavigate();
    const [ pets, setPets ] = useState([]);



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
        })
        .catch((err) => console.log(err))
        });
    }, [])

    const removePet = (id) => {
        fetch(`https://petsho-api.herokuapp.com/api/pets/${id}`, {
            method: 'DELETE',
            headers: {
                'Content-Type': 'application/json'
            }
        })
        .then(resp => resp.json())
        .then(() => {
            setPets(pets.filter((pet) => pet.id !== id));
            //redirect
            navigate('/pets')
        })
        .catch(err => console.log(err))
    }


    return (
        <div className={styles.pet_container}>
            <div className={styles.title_container}>
                <h1>Meus Pets</h1>
                <Linkbutton to="/novo" text="Adicionar novo pet"></Linkbutton>
            </div>
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
            </Container>
        </div>
    );
}

export default Pets;