import React, { useEffect, useState } from 'react'
import axios from 'axios'

import { useParams } from 'react-router-dom'

import Header from '../../components/Header/Header'

function LerMais() {

    const [ lermais, setLermais ] = useState({})

    const { id } = useParams()

    useEffect(() => {
        axios.get(`http://localhost:8080/api/cadastros/${id}`)
        .then((response) => {
            setLermais(response.data)
        })

    }, [])
    
    return(
        
        <div>
            <Header />
            <main>
                <div className="cards">
                    <div className="card" >
                        <div className='title__card'>
                            <h2>Nome do pet: {lermais.nome}</h2>
                            <h2>Idade: {lermais.idade}</h2>
                            <h2>Tipo: {lermais.tipo}</h2>
                            <h2>Raça: {lermais.raca}</h2>
                            <h2>Nome do Dono: {lermais.nomedono}</h2>
                            <h2>Telefone: {lermais.telefone}</h2>
                        </div>
                    </div>
                </div>
            </main>
        </div>
    )
}

export default LerMais