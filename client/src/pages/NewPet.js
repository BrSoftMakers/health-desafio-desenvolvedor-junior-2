
import React from 'react'
import PetProject from './../pet/PetForm';

const NewPet = () => {

    const createPost = (pet) =>{

        fetch("https://petsho-api.herokuapp.com/api/pets", {
            method: "POST",
            mode: "no-cors",
            headers: {
                'Content-type': 'application/json',
            },
            body: JSON.stringify(pet)
        })
        .then((res) => res.json())
        .then((data) => {
            console.log(data);
        })
        .catch(err => console.log(err))
    }

  return (
    <div>
        <h3>Adicionar novo PET</h3>
        <p>Preencha todo o formulário para adicionar o novo pet</p>
        <PetProject handleSubmit={createPost} btnText="Adicionar PETs"/>
    </div>
  )
}

export default NewPet